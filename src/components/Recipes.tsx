import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();

  const recipes = [
    {
      id: 1,
      title: "Green Goddess Smoothie Bowl",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      time: "5 min",
      servings: 1,
      difficulty: "Easy",
      ingredients: ["Spirulina powder", "Banana", "Coconut milk", "Chia seeds"],
      description: "Start your morning with this nutrient-packed smoothie bowl that energizes and nourishes."
    },
    {
      id: 2,
      title: "Ceremonial Matcha Latte",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80",
      time: "3 min",
      servings: 1,
      difficulty: "Easy",
      ingredients: ["Matcha powder", "Oat milk", "Honey", "Vanilla extract"],
      description: "A traditional matcha preparation that brings calm focus and sustained energy."
    },
    {
      id: 3,
      title: "Raw Cacao Energy Balls",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
      time: "15 min",
      servings: 12,
      difficulty: "Easy",
      ingredients: ["Raw cacao powder", "Dates", "Almonds", "Coconut flakes"],
      description: "No-bake energy balls perfect for a healthy snack or post-workout fuel."
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
            Nourishing Recipes
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Transform your daily routine with these simple, wholesome recipes featuring our premium superfoods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-sage-50 rounded-3xl overflow-hidden shadow-lg border border-sage-100 hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-sage-700">
                  {recipe.difficulty}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-sage-900">
                  {recipe.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-sage-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} serving{recipe.servings > 1 ? 's' : ''}</span>
                  </div>
                </div>
                
                <p className="text-sage-600 leading-relaxed">
                  {recipe.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sage-800">Key Ingredients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <span 
                        key={index}
                        className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-sage-700 hover:bg-sage-800 text-white rounded-xl mt-4"
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                >
                  View Full Recipe
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
