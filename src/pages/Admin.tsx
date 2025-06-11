import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Users, Calendar, TrendingUp, LogOut, Filter, Search, BarChart2 } from "lucide-react";
import * as XLSX from 'xlsx';
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LeadData {
  _id: string;
  name: string;
  email: string;
  source: string;
  productInterest?: string;
  product?: string;
  productFormat?: string;
  flavor?: string;
  quantity?: number;
  type?: 'cart' | 'contact';
  createdAt: string;
}

interface Stats {
  total: number;
  today: number;
  thisWeek: number;
  topSource: string;
  topProduct: string;
  productDistribution: { [key: string]: number };
  sourceDistribution: { [key: string]: number };
}

const Admin = () => {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<LeadData[]>([]);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    today: 0,
    thisWeek: 0,
    topSource: '',
    topProduct: '',
    productDistribution: {},
    sourceDistribution: {}
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [productFilter, setProductFilter] = useState('all');
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchLeads();
  }, [navigate]);

  useEffect(() => {
    filterLeads();
  }, [leads, searchTerm, sourceFilter, productFilter]);

  const filterLeads = () => {
    let filtered = [...leads];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(lead => 
        lead.name.toLowerCase().includes(searchLower) ||
        lead.email.toLowerCase().includes(searchLower)
      );
    }

    // Apply source filter
    if (sourceFilter !== 'all') {
      filtered = filtered.filter(lead => lead.source === sourceFilter);
    }

    // Apply product filter
    if (productFilter !== 'all') {
      filtered = filtered.filter(lead => lead.product === productFilter);
    }

    setFilteredLeads(filtered);
  };

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/leads`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('API Response status:', response.status);

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/login');
        return;
      }

      const data = await response.json();
      console.log('Fetched leads data:', data);
      
      setLeads(data);
      setFilteredLeads(data);

      // Calculate stats
      const today = new Date().toDateString();
      const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

      const todayLeads = data.filter((lead: LeadData) =>
        new Date(lead.createdAt).toDateString() === today
      );

      const weekLeads = data.filter((lead: LeadData) =>
        new Date(lead.createdAt) >= oneWeekAgo
      );

      // Calculate distributions
      const productDistribution = data.reduce((acc: any, lead: LeadData) => {
        acc[lead.product] = (acc[lead.product] || 0) + 1;
        return acc;
      }, {});

      const sourceDistribution = data.reduce((acc: any, lead: LeadData) => {
        acc[lead.source] = (acc[lead.source] || 0) + 1;
        return acc;
      }, {});

      // Find top product and source
      const topProduct = Object.keys(productDistribution).reduce((a, b) =>
        productDistribution[a] > productDistribution[b] ? a : b, ''
      );

      const topSource = Object.keys(sourceDistribution).reduce((a, b) =>
        sourceDistribution[a] > sourceDistribution[b] ? a : b, ''
      );

      const newStats = {
        total: data.length,
        today: todayLeads.length,
        thisWeek: weekLeads.length,
        topSource: topSource || 'No data',
        topProduct: topProduct || 'No data',
        productDistribution,
        sourceDistribution
      };
      
      console.log('Calculated stats:', newStats);
      setStats(newStats);
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast({
        title: "Error",
        description: "Failed to fetch leads",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const exportToExcel = () => {
    if (filteredLeads.length === 0) {
      toast({
        title: "No Data",
        description: "No leads to export",
        variant: "destructive",
      });
      return;
    }

    const exportData = filteredLeads.map(lead => ({
      'Name': lead.name,
      'Email': lead.email,
      'Source': lead.source,
      'Product Interest': lead.productInterest,
      'Product': lead.product,
      'Date': lead.createdAt,
      'Timestamp': new Date(lead.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Leads');
    
    XLSX.writeFile(workbook, `wellness-leads-${new Date().toISOString().split('T')[0]}.xlsx`);
    
    toast({
      title: "Success",
      description: "Leads exported successfully",
    });
  };

  const clearAllLeads = async () => {
    if (window.confirm('Are you sure you want to clear all leads? This action cannot be undone.')) {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/leads`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/login');
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to clear leads');
        }
        setLeads([]);
        setFilteredLeads([]);
        setStats({
          total: 0,
          today: 0,
          thisWeek: 0,
          topSource: 'No data',
          topProduct: 'No data',
          productDistribution: {},
          sourceDistribution: {}
        });
        toast({
          title: "Success",
          description: "All leads have been cleared",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to clear leads",
          variant: "destructive",
        });
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sage-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-sage-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const uniqueSources = Array.from(new Set(leads.map(lead => lead.source).filter(Boolean)));
  const uniqueProducts = Array.from(new Set(leads.map(lead => lead.product).filter(Boolean)));

  return (
    <div className="min-h-screen bg-sage-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-sage-900 mb-2">Lead Management Dashboard</h1>
            <p className="text-sage-600">Monitor and export your wellness community leads</p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="border-sage-200"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-emerald-600" />
              <div>
                <p className="text-sm text-sage-600">Total Leads</p>
                <p className="text-2xl font-bold text-sage-900">{stats.total}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-emerald-600" />
              <div>
                <p className="text-sm text-sage-600">Today</p>
                <p className="text-2xl font-bold text-sage-900">{stats.today}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
              <div>
                <p className="text-sm text-sage-600">This Week</p>
                <p className="text-2xl font-bold text-sage-900">{stats.thisWeek}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <BarChart2 className="w-8 h-8 text-emerald-600" />
              <div>
                <p className="text-sm text-sage-600">Top Product</p>
                <p className="text-lg font-semibold text-sage-900 capitalize">
                  {stats.topProduct?.replace('-', ' ') || 'N/A'}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2">
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Select value={sourceFilter} onValueChange={setSourceFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              {uniqueSources.map(source => (
                <SelectItem key={source} value={source}>
                  {source.replace('-', ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={productFilter} onValueChange={setProductFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {uniqueProducts.map(product => (
                <SelectItem key={product} value={product}>
                  {product.replace('-', ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            onClick={exportToExcel}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            disabled={filteredLeads.length === 0}
          >
            <Download className="mr-2 w-4 h-4" />
            Export to Excel
          </Button>
          
          <Button 
            onClick={clearAllLeads}
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50"
            disabled={leads.length === 0}
          >
            Clear All Leads
          </Button>
        </div>

        {/* Leads Table */}
        <Card className="overflow-hidden">
          <div className="p-6 border-b border-sage-200">
            <h2 className="text-xl font-semibold text-sage-900">Recent Leads</h2>
          </div>
          
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 text-sage-300 mx-auto mb-4" />
              <p className="text-sage-600">No leads found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sage-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-500 uppercase tracking-wider">Source</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-500 uppercase tracking-wider">Product Format</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-500 uppercase tracking-wider">Flavor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-sage-200">
                  {filteredLeads.slice().reverse().map((lead) => {
                    // Ensure lead object is not null/undefined
                    if (!lead) {
                      return null; 
                    }
                    const { _id, name, email, source, productInterest, product, createdAt, productFormat, flavor, quantity, type } = lead;

                    return (
                      <tr key={_id || `no-id-${Math.random()}`} className="hover:bg-sage-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-sage-900">
                          {name || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-sage-600">
                          {email || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-sage-600 capitalize">
                          {(source?.replace('-', ' ')) || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-sage-600 capitalize">
                          {(type?.replace('-', ' ')) || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-sage-600 capitalize">
                          {(productFormat?.replace('-', ' ')) || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-sage-600 capitalize">
                          {(flavor?.replace('-', ' ')) || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-sage-600">
                          {(quantity !== undefined && quantity !== null) ? quantity : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-sage-600">
                          {new Date(createdAt || Date.now()).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Admin;
