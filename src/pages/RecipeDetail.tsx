
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipes = [
    {
      id: 1,
      title: "Green Goddess Smoothie Bowl",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      time: "5 min",
      servings: 1,
      difficulty: "Easy",
      ingredients: [
        "1 tsp Spirulina powder",
        "1 frozen banana",
        "1/2 cup coconut milk",
        "1 tbsp chia seeds",
        "1/4 cup granola",
        "Fresh berries for topping",
        "Coconut flakes"
      ],
      description: "Start your morning with this nutrient-packed smoothie bowl that energizes and nourishes your body with superfoods.",
      instructions: [
        "Add frozen banana, coconut milk, and spirulina powder to a blender.",
        "Blend until smooth and creamy, about 30-45 seconds.",
        "Pour into a bowl and let it sit for 1 minute to thicken.",
        "Top with chia seeds, granola, fresh berries, and coconut flakes.",
        "Serve immediately and enjoy your nutritious breakfast!"
      ],
      nutritionFacts: {
        calories: 280,
        protein: "8g",
        carbs: "45g",
        fiber: "12g",
        sugar: "18g"
      }
    },
    {
      id: 2,
      title: "Ceremonial Matcha Latte",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
      time: "3 min",
      servings: 1,
      difficulty: "Easy",
      ingredients: [
        "1 tsp ceremonial matcha powder",
        "1 cup oat milk",
        "1 tbsp honey",
        "1/4 tsp vanilla extract",
        "Hot water (not boiling)"
      ],
      description: "A traditional matcha preparation that brings calm focus and sustained energy throughout your day.",
      instructions: [
        "Sift matcha powder into a bowl to remove any lumps.",
        "Add 2-3 tablespoons of hot water (175°F) to the matcha.",
        "Whisk vigorously in a 'W' motion until frothy and smooth.",
        "Heat oat milk gently and add honey and vanilla.",
        "Pour the warm milk into the matcha base and stir gently.",
        "Serve in your favorite mug and enjoy mindfully."
      ],
      nutritionFacts: {
        calories: 120,
        protein: "3g",
        carbs: "18g",
        fiber: "2g",
        sugar: "16g"
      }
    },
    {
      id: 3,
      title: "Raw Cacao Energy Balls",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
      time: "15 min",
      servings: 12,
      difficulty: "Easy",
      ingredients: [
        "1 cup Medjool dates, pitted",
        "1/4 cup raw cacao powder",
        "1/2 cup raw almonds",
        "1/4 cup coconut flakes",
        "1 tbsp coconut oil",
        "1 tsp vanilla extract",
        "Pinch of sea salt"
      ],
      description: "No-bake energy balls perfect for a healthy snack or post-workout fuel that satisfies your chocolate cravings.",
      instructions: [
        "Soak dates in warm water for 10 minutes if they're too dry.",
        "Pulse almonds in a food processor until roughly chopped.",
        "Add dates and process until a paste forms.",
        "Add cacao powder, coconut oil, vanilla, and salt. Process until combined.",
        "Roll mixture into 12 balls using your hands.",
        "Roll in coconut flakes if desired.",
        "Refrigerate for 30 minutes before serving. Store in fridge for up to 1 week."
      ],
      nutritionFacts: {
        calories: 85,
        protein: "2g",
        carbs: "12g",
        fiber: "3g",
        sugar: "9g"
      }
    }
  ];

  const recipe = recipes.find(r => r.id === parseInt(id || ""));

  if (!recipe) {
    return (
      <div className="min-h-screen bg-sage-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-sage-900 mb-4">Recipe Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-emerald-600 hover:bg-emerald-700">
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-sage-700 hover:text-emerald-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Recipes</span>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{recipe.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>{recipe.servings} serving{recipe.servings > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChefHat className="w-5 h-5" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-sage-700 leading-relaxed">{recipe.description}</p>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100 mb-8">
              <h2 className="text-2xl font-bold text-sage-900 mb-6">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sage-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100">
              <h2 className="text-2xl font-bold text-sage-900 mb-6">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-sage-700 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Nutrition Facts */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100">
              <h3 className="text-xl font-bold text-sage-900 mb-6">Nutrition Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-sage-200">
                  <span className="font-medium text-sage-700">Calories</span>
                  <span className="font-bold text-sage-900">{recipe.nutritionFacts.calories}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600">Protein</span>
                  <span className="text-sage-900">{recipe.nutritionFacts.protein}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600">Carbs</span>
                  <span className="text-sage-900">{recipe.nutritionFacts.carbs}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600">Fiber</span>
                  <span className="text-sage-900">{recipe.nutritionFacts.fiber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600">Sugar</span>
                  <span className="text-sage-900">{recipe.nutritionFacts.sugar}</span>
                </div>
              </div>
            </div>

            {/* Share Recipe */}
            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-200">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Love this recipe?</h3>
              <p className="text-emerald-700 mb-6">Share it with friends and family to spread the healthy goodness!</p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                Share Recipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
