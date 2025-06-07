
import Header from "@/components/Header";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Recipes from "@/components/Recipes";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Products />
      <Benefits />
      <Recipes />
    </div>
  );
};

export default Index;
