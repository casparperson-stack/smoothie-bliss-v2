import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Sparkles, ChevronRight, Loader, Search, X, ThumbsUp } from 'lucide-react';

const smoothieRecipes = [
  {
    id: 1,
    name: "Tropical Paradise",
    ingredients: [
      { name: "Mango", amount: "1 cup" },
      { name: "Pineapple", amount: "1/2 cup" },
      { name: "Coconut milk", amount: "1 cup" },
      { name: "Banana", amount: "1 whole" },
      { name: "Lime", amount: "1 tbsp juice" }
    ],
    color: "from-yellow-400 to-orange-500",
    description: "A refreshing tropical blend",
    emoji: "🥭🍍",
    tags: ["tropical", "sweet", "creamy"]
  },
  {
    id: 2,
    name: "Berry Blast",
    ingredients: [
      { name: "Strawberries", amount: "1 cup" },
      { name: "Blueberries", amount: "1/2 cup" },
      { name: "Raspberries", amount: "1/2 cup" },
      { name: "Greek yogurt", amount: "1/2 cup" },
      { name: "Honey", amount: "1 tbsp" }
    ],
    color: "from-pink-400 to-purple-500",
    description: "Antioxidant-rich berry fusion",
    emoji: "🍓🫐",
    tags: ["berry", "sweet", "tangy", "protein"]
  },
  {
    id: 3,
    name: "Green Machine",
    ingredients: [
      { name: "Spinach", amount: "2 cups" },
      { name: "Kale", amount: "1 cup" },
      { name: "Green apple", amount: "1 whole" },
      { name: "Cucumber", amount: "1/2 cup" },
      { name: "Ginger", amount: "1 tsp" }
    ],
    color: "from-green-400 to-emerald-600",
    description: "Energizing green goodness",
    emoji: "🥬🍏",
    tags: ["green", "healthy", "detox"]
  },
  {
    id: 4,
    name: "Chocolate Peanut Butter",
    ingredients: [
      { name: "Banana", amount: "2 whole" },
      { name: "Peanut butter", amount: "2 tbsp" },
      { name: "Cocoa powder", amount: "2 tbsp" },
      { name: "Almond milk", amount: "1 cup" },
      { name: "Dates", amount: "3 pieces" }
    ],
    color: "from-amber-600 to-brown-700",
    description: "Indulgent protein-packed treat",
    emoji: "🍫🥜",
    tags: ["chocolate", "nutty", "protein", "sweet"]
  },
  {
    id: 5,
    name: "Peachy Keen",
    ingredients: [
      { name: "Peaches", amount: "2 whole" },
      { name: "Vanilla yogurt", amount: "1/2 cup" },
      { name: "Almond milk", amount: "1/2 cup" },
      { name: "Cinnamon", amount: "1/2 tsp" },
      { name: "Oats", amount: "1/4 cup" }
    ],
    color: "from-orange-300 to-pink-400",
    description: "Creamy peachy perfection",
    emoji: "🍑✨",
    tags: ["sweet", "creamy", "spiced"]
  },
  {
    id: 6,
    name: "Dragon Fruit Delight",
    ingredients: [
      { name: "Dragon fruit", amount: "1 whole" },
      { name: "Strawberries", amount: "1 cup" },
      { name: "Coconut water", amount: "1 cup" },
      { name: "Chia seeds", amount: "1 tbsp" },
      { name: "Agave", amount: "1 tbsp" }
    ],
    color: "from-pink-300 to-fuchsia-500",
    description: "Exotic and Instagram-worthy",
    emoji: "🐉🌺",
    tags: ["tropical", "exotic", "sweet"]
  },
  {
    id: 7,
    name: "Minty Mojito",
    ingredients: [
      { name: "Mint", amount: "1/4 cup" },
      { name: "Lime", amount: "2 tbsp juice" },
      { name: "Spinach", amount: "1 cup" },
      { name: "Pineapple", amount: "1 cup" },
      { name: "Coconut water", amount: "1 cup" }
    ],
    color: "from-lime-300 to-green-500",
    description: "Refreshing mint-infused boost",
    emoji: "🌿🍋",
    tags: ["refreshing", "green", "tropical"]
  },
  {
    id: 8,
    name: "Apple Pie",
    ingredients: [
      { name: "Apple", amount: "2 whole" },
      { name: "Cinnamon", amount: "1 tsp" },
      { name: "Vanilla protein", amount: "1 scoop" },
      { name: "Almond milk", amount: "1 cup" },
      { name: "Nutmeg", amount: "1/4 tsp" }
    ],
    color: "from-red-300 to-amber-500",
    description: "Dessert in a glass",
    emoji: "🍎🥧",
    tags: ["spiced", "sweet", "protein"]
  },
  {
    id: 9,
    name: "Sunrise Special",
    ingredients: [
      { name: "Orange", amount: "2 whole" },
      { name: "Carrot", amount: "1 cup" },
      { name: "Mango", amount: "1/2 cup" },
      { name: "Turmeric", amount: "1/2 tsp" },
      { name: "Ginger", amount: "1 tsp" }
    ],
    color: "from-yellow-300 to-orange-600",
    description: "Immunity-boosting citrus blend",
    emoji: "🍊🥕",
    tags: ["citrus", "healthy", "spiced"]
  },
  {
    id: 10,
    name: "Blueberry Muffin",
    ingredients: [
      { name: "Blueberries", amount: "1.5 cups" },
      { name: "Oats", amount: "1/2 cup" },
      { name: "Vanilla yogurt", amount: "1/2 cup" },
      { name: "Almond butter", amount: "2 tbsp" },
      { name: "Maple syrup", amount: "1 tbsp" }
    ],
    color: "from-blue-400 to-purple-600",
    description: "Breakfast favorite reimagined",
    emoji: "🫐🧁",
    tags: ["berry", "sweet", "protein"]
  },
  {
    id: 11,
    name: "Watermelon Wave",
    ingredients: [
      { name: "Watermelon", amount: "2 cups" },
      { name: "Strawberries", amount: "1/2 cup" },
      { name: "Lime", amount: "1 tbsp juice" },
      { name: "Mint", amount: "2 tbsp" },
      { name: "Coconut water", amount: "1/2 cup" }
    ],
    color: "from-red-400 to-pink-500",
    description: "Hydrating summer refresher",
    emoji: "🍉🌊",
    tags: ["refreshing", "sweet", "hydrating"]
  },
  {
    id: 12,
    name: "Matcha Madness",
    ingredients: [
      { name: "Matcha powder", amount: "1 tsp" },
      { name: "Banana", amount: "1 whole" },
      { name: "Spinach", amount: "1 cup" },
      { name: "Almond milk", amount: "1 cup" },
      { name: "Honey", amount: "1 tbsp" }
    ],
    color: "from-green-300 to-teal-500",
    description: "Energizing green tea fusion",
    emoji: "🍵🍃",
    tags: ["green", "energizing", "healthy"]
  },
  {
    id: 13,
    name: "Banana Bread",
    ingredients: [
      { name: "Banana", amount: "2 whole" },
      { name: "Walnuts", amount: "1/4 cup" },
      { name: "Cinnamon", amount: "1 tsp" },
      { name: "Oat milk", amount: "1 cup" },
      { name: "Vanilla", amount: "1 tsp" }
    ],
    color: "from-yellow-600 to-amber-700",
    description: "Comfort food in a cup",
    emoji: "🍌🍞",
    tags: ["sweet", "spiced", "nutty"]
  },
  {
    id: 14,
    name: "Acai Energy",
    ingredients: [
      { name: "Acai", amount: "1 packet" },
      { name: "Banana", amount: "1 whole" },
      { name: "Granola", amount: "1/4 cup" },
      { name: "Honey", amount: "1 tbsp" },
      { name: "Almond milk", amount: "1/2 cup" }
    ],
    color: "from-purple-600 to-pink-600",
    description: "Superfood power blend",
    emoji: "🥣💜",
    tags: ["berry", "protein", "energizing"]
  },
  {
    id: 15,
    name: "Coconut Dream",
    ingredients: [
      { name: "Coconut cream", amount: "1/2 cup" },
      { name: "Pineapple", amount: "1 cup" },
      { name: "Mango", amount: "1/2 cup" },
      { name: "Chia seeds", amount: "1 tbsp" },
      { name: "Lime", amount: "1 tbsp juice" }
    ],
    color: "from-cyan-300 to-blue-400",
    description: "Island paradise vibes",
    emoji: "🥥🏝️",
    tags: ["tropical", "creamy", "sweet"]
  },
  {
    id: 16,
    name: "Cherry Bomb",
    ingredients: [
      { name: "Cherries", amount: "1.5 cups" },
      { name: "Vanilla yogurt", amount: "1/2 cup" },
      { name: "Almond milk", amount: "1/2 cup" },
      { name: "Dark chocolate", amount: "2 tbsp chips" },
      { name: "Honey", amount: "1 tbsp" }
    ],
    color: "from-red-600 to-pink-600",
    description: "Sweet and tangy indulgence",
    emoji: "🍒💣",
    tags: ["sweet", "tangy", "chocolate"]
  },
  {
    id: 17,
    name: "Pumpkin Spice",
    ingredients: [
      { name: "Pumpkin puree", amount: "1/2 cup" },
      { name: "Banana", amount: "1 whole" },
      { name: "Cinnamon", amount: "1 tsp" },
      { name: "Nutmeg", amount: "1/4 tsp" },
      { name: "Oat milk", amount: "1 cup" }
    ],
    color: "from-orange-500 to-amber-600",
    description: "Fall favorite all year round",
    emoji: "🎃🍂",
    tags: ["spiced", "creamy", "sweet"]
  },
  {
    id: 18,
    name: "Kiwi Cooler",
    ingredients: [
      { name: "Kiwi", amount: "3 whole" },
      { name: "Spinach", amount: "1 cup" },
      { name: "Lime", amount: "2 tbsp juice" },
      { name: "Mint", amount: "2 tbsp" },
      { name: "Coconut water", amount: "1 cup" }
    ],
    color: "from-green-300 to-lime-400",
    description: "Zesty tropical refreshment",
    emoji: "🥝❄️",
    tags: ["tropical", "refreshing", "green"]
  },
  {
    id: 19,
    name: "Peanut Butter Cup",
    ingredients: [
      { name: "Banana", amount: "2 whole" },
      { name: "Peanut butter", amount: "3 tbsp" },
      { name: "Chocolate protein", amount: "1 scoop" },
      { name: "Oat milk", amount: "1 cup" },
      { name: "Dates", amount: "2 pieces" }
    ],
    color: "from-brown-600 to-amber-700",
    description: "Protein-packed chocolate delight",
    emoji: "🥜🍫",
    tags: ["chocolate", "nutty", "protein"]
  },
  {
    id: 20,
    name: "Lavender Dream",
    ingredients: [
      { name: "Blueberries", amount: "1 cup" },
      { name: "Lavender", amount: "1/2 tsp dried" },
      { name: "Vanilla yogurt", amount: "1/2 cup" },
      { name: "Honey", amount: "1 tbsp" },
      { name: "Almond milk", amount: "1/2 cup" }
    ],
    color: "from-purple-300 to-indigo-400",
    description: "Calming floral bliss",
    emoji: "💜🌸",
    tags: ["berry", "floral", "sweet"]
  },
  {
    id: 21,
    name: "Avocado Toast",
    ingredients: [
      { name: "Avocado", amount: "1 whole" },
      { name: "Spinach", amount: "1 cup" },
      { name: "Lime", amount: "2 tbsp juice" },
      { name: "Banana", amount: "1 whole" },
      { name: "Coconut water", amount: "1 cup" }
    ],
    color: "from-green-500 to-emerald-600",
    description: "Creamy and nutritious",
    emoji: "🥑🍞",
    tags: ["green", "creamy", "healthy"]
  },
  {
    id: 22,
    name: "Gingerbread",
    ingredients: [
      { name: "Banana", amount: "2 whole" },
      { name: "Ginger", amount: "1 tbsp fresh" },
      { name: "Cinnamon", amount: "1 tsp" },
      { name: "Molasses", amount: "1 tbsp" },
      { name: "Almond milk", amount: "1 cup" }
    ],
    color: "from-amber-700 to-brown-800",
    description: "Holiday spice in every sip",
    emoji: "🫚🍪",
    tags: ["spiced", "sweet", "warming"]
  },
  {
    id: 23,
    name: "Raspberry Cheesecake",
    ingredients: [
      { name: "Raspberries", amount: "1.5 cups" },
      { name: "Cream cheese", amount: "3 tbsp" },
      { name: "Graham crackers", amount: "2 pieces" },
      { name: "Vanilla", amount: "1 tsp" },
      { name: "Milk", amount: "3/4 cup" }
    ],
    color: "from-pink-400 to-red-500",
    description: "Dessert-inspired decadence",
    emoji: "🍰💕",
    tags: ["berry", "sweet", "creamy", "dessert"]
  },
  {
    id: 24,
    name: "Lemon Meringue",
    ingredients: [
      { name: "Lemon", amount: "2 tbsp juice" },
      { name: "Vanilla yogurt", amount: "1/2 cup" },
      { name: "Honey", amount: "2 tbsp" },
      { name: "Coconut cream", amount: "1/4 cup" },
      { name: "Ice", amount: "1 cup" }
    ],
    color: "from-yellow-200 to-yellow-400",
    description: "Tart and sweet perfection",
    emoji: "🍋☁️",
    tags: ["citrus", "tangy", "sweet"]
  },
  {
    id: 25,
    name: "Blackberry Sage",
    ingredients: [
      { name: "Blackberries", amount: "1.5 cups" },
      { name: "Sage", amount: "4 leaves" },
      { name: "Lime", amount: "1 tbsp juice" },
      { name: "Honey", amount: "1 tbsp" },
      { name: "Coconut water", amount: "1 cup" }
    ],
    color: "from-purple-700 to-gray-800",
    description: "Sophisticated herbal blend",
    emoji: "🫐🌿",
    tags: ["berry", "herbal", "refreshing"]
  },
  {
    id: 26,
    name: "Piña Colada",
    ingredients: [
      { name: "Pineapple", amount: "1.5 cups" },
      { name: "Coconut cream", amount: "1/2 cup" },
      { name: "Banana", amount: "1 whole" },
      { name: "Lime", amount: "1 tbsp juice" },
      { name: "Rum extract", amount: "1/2 tsp" }
    ],
    color: "from-yellow-300 to-white",
    description: "Tropical vacation in a glass",
    emoji: "🍹🏖️",
    tags: ["tropical", "creamy", "sweet"]
  },
  {
    id: 27,
    name: "Mocha Madness",
    ingredients: [
      { name: "Coffee", amount: "1/2 cup brewed" },
      { name: "Cocoa powder", amount: "2 tbsp" },
      { name: "Banana", amount: "1 whole" },
      { name: "Almond milk", amount: "1/2 cup" },
      { name: "Dates", amount: "3 pieces" }
    ],
    color: "from-brown-800 to-black",
    description: "Caffeinated chocolate kick",
    emoji: "☕🍫",
    tags: ["chocolate", "coffee", "energizing"]
  },
  {
    id: 28,
    name: "Strawberry Shortcake",
    ingredients: [
      { name: "Strawberries", amount: "2 cups" },
      { name: "Vanilla yogurt", amount: "1/2 cup" },
      { name: "Graham crackers", amount: "2 pieces" },
      { name: "Honey", amount: "1 tbsp" },
      { name: "Milk", amount: "1/2 cup" }
    ],
    color: "from-pink-300 to-red-400",
    description: "Classic summer treat",
    emoji: "🍓🍰",
    tags: ["berry", "sweet", "dessert"]
  },
  {
    id: 29,
    name: "Beetroot Boost",
    ingredients: [
      { name: "Beetroot", amount: "1 medium" },
      { name: "Berries", amount: "1 cup mixed" },
      { name: "Orange", amount: "1 whole" },
      { name: "Ginger", amount: "1 tsp" },
      { name: "Coconut water", amount: "1 cup" }
    ],
    color: "from-red-700 to-pink-600",
    description: "Earthy energizing elixir",
    emoji: "🥗💪",
    tags: ["healthy", "energizing", "earthy"]
  },
  {
    id: 30,
    name: "Chai Spice",
    ingredients: [
      { name: "Chai tea", amount: "1/2 cup brewed" },
      { name: "Banana", amount: "1 whole" },
      { name: "Cinnamon", amount: "1/2 tsp" },
      { name: "Cardamom", amount: "1/4 tsp" },
      { name: "Almond milk", amount: "1/2 cup" }
    ],
    color: "from-orange-700 to-brown-600",
    description: "Warm spiced comfort",
    emoji: "☕🌟",
    tags: ["spiced", "warming", "sweet"]
  }
];

export default function SmoothieApp() {
  const [activeTab, setActiveTab] = useState('daily');
  const [likedSmoothies, setLikedSmoothies] = useState([]);
  const [dailySmoothies, setDailySmoothies] = useState([]);
  const [recommendedSmoothies, setRecommendedSmoothies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchIngredients, setSearchIngredients] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [matchedSmoothies, setMatchedSmoothies] = useState([]);
  const [selectedSmoothie, setSelectedSmoothie] = useState(null);

  useEffect(() => {
    loadLikedSmoothies();
    loadSavedIngredients();
    generateDailySmoothies();
  }, []);

  useEffect(() => {
    if (selectedIngredients.length > 0) {
      findMatchingSmoothies();
    } else {
      setMatchedSmoothies([]);
    }
  }, [selectedIngredients]);

  useEffect(() => {
    generateRecommendations();
  }, [likedSmoothies]);

  const loadLikedSmoothies = async () => {
    try {
      const result = await window.storage.get('smoothie-likes');
      if (result) {
        const likedIds = JSON.parse(result.value);
        const liked = smoothieRecipes.filter(s => likedIds.includes(s.id));
        setLikedSmoothies(liked);
      }
    } catch (error) {
      console.log('No saved likes yet');
    } finally {
      setLoading(false);
    }
  };

  const loadSavedIngredients = async () => {
    try {
      const result = await window.storage.get('saved-ingredients');
      if (result) {
        const ingredients = JSON.parse(result.value);
        setSelectedIngredients(ingredients);
      }
    } catch (error) {
      console.log('No saved ingredients yet');
    }
  };

  const generateDailySmoothies = () => {
    const today = new Date().getDate();
    const shuffled = [...smoothieRecipes].sort((a, b) => 
      ((a.id + today) * 7) % 13 - ((b.id + today) * 7) % 13
    );
    setDailySmoothies(shuffled.slice(0, 6));
  };

  const generateRecommendations = () => {
    if (likedSmoothies.length === 0) {
      setRecommendedSmoothies([]);
      return;
    }

    const likedTags = likedSmoothies.flatMap(s => s.tags);
    const tagCounts = {};
    likedTags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    const recommendations = smoothieRecipes
      .filter(smoothie => !likedSmoothies.some(liked => liked.id === smoothie.id))
      .map(smoothie => {
        const matchScore = smoothie.tags.reduce((score, tag) => {
          return score + (tagCounts[tag] || 0);
        }, 0);
        const maxScore = Math.max(...Object.values(tagCounts));
        const percentage = Math.round((matchScore / maxScore) * 100);
        return { smoothie, matchScore, percentage };
      })
      .filter(item => item.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 6);

    setRecommendedSmoothies(recommendations);
  };

  const findMatchingSmoothies = () => {
    const normalizedSelected = selectedIngredients.map(i => i.toLowerCase());
    
    const matches = smoothieRecipes.map(smoothie => {
      const matchCount = smoothie.ingredients.filter(ing => 
        normalizedSelected.some(selected => 
          ing.name.toLowerCase().includes(selected) || selected.includes(ing.name.toLowerCase())
        )
      ).length;
      
      return { smoothie, matchCount };
    })
    .filter(item => item.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);
    
    setMatchedSmoothies(matches);
  };

  const addIngredient = async () => {
    const trimmed = searchIngredients.trim();
    if (trimmed && !selectedIngredients.includes(trimmed)) {
      const newIngredients = [...selectedIngredients, trimmed];
      setSelectedIngredients(newIngredients);
      setSearchIngredients('');
      
      try {
        await window.storage.set('saved-ingredients', JSON.stringify(newIngredients));
      } catch (error) {
        console.error('Failed to save ingredients:', error);
      }
    }
  };

  const removeIngredient = async (ingredient) => {
    const newIngredients = selectedIngredients.filter(i => i !== ingredient);
    setSelectedIngredients(newIngredients);
    
    try {
      await window.storage.set('saved-ingredients', JSON.stringify(newIngredients));
    } catch (error) {
      console.error('Failed to save ingredients:', error);
    }
  };

  const toggleLike = async (smoothie) => {
    const isCurrentlyLiked = likedSmoothies.some(s => s.id === smoothie.id);
    let newLiked;
    
    if (isCurrentlyLiked) {
      newLiked = likedSmoothies.filter(s => s.id !== smoothie.id);
    } else {
      newLiked = [...likedSmoothies, smoothie];
    }
    
    setLikedSmoothies(newLiked);
    
    try {
      const likedIds = newLiked.map(s => s.id);
      await window.storage.set('smoothie-likes', JSON.stringify(likedIds));
    } catch (error) {
      console.error('Failed to save likes:', error);
    }
  };

  const isLiked = (id) => likedSmoothies.some(s => s.id === id);

  const SmoothieCard = ({ smoothie, matchCount, recommendScore }) => (
    <div 
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <div 
        onClick={() => setSelectedSmoothie(smoothie)}
        className={`h-48 bg-gradient-to-br ${smoothie.color} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <span className="text-8xl z-10 drop-shadow-lg">{smoothie.emoji}</span>
      </div>
      {matchCount !== undefined && matchCount > 0 && (
        <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
          {matchCount} match{matchCount > 1 ? 'es' : ''}
        </div>
      )}
      {recommendScore !== undefined && (
        <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
          <ThumbsUp className="w-3 h-3" />
          {recommendScore}%
        </div>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleLike(smoothie);
        }}
        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform z-10"
      >
        <Heart
          className={`w-5 h-5 ${isLiked(smoothie.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
        />
      </button>
      <div 
        onClick={() => setSelectedSmoothie(smoothie)}
        className="p-5 cursor-pointer"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">{smoothie.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{smoothie.description}</p>
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Ingredients:</p>
          {smoothie.ingredients.map((ingredient, idx) => (
            <div key={idx} className="flex items-start justify-between text-sm">
              <div className="flex items-start flex-1">
                <ChevronRight className="w-3 h-3 mr-1 mt-0.5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-700">{ingredient.name}</span>
              </div>
              <span className="text-gray-500 text-xs ml-2">{ingredient.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {selectedSmoothie && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSmoothie(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-48 bg-gradient-to-br ${selectedSmoothie.color} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <span className="text-8xl z-10 drop-shadow-lg">{selectedSmoothie.emoji}</span>
              <button
                onClick={() => setSelectedSmoothie(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform z-20"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedSmoothie.name}</h2>
                      <p className="text-gray-600 text-base">{selectedSmoothie.description}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(selectedSmoothie);
                      }}
                      className="bg-gray-100 rounded-full p-3 hover:scale-110 transition-transform ml-3"
                    >
                      <Heart
                        className={`w-7 h-7 ${isLiked(selectedSmoothie.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                      />
                    </button>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Instructions</h3>
                    <ol className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="font-bold text-purple-600 mr-2 flex-shrink-0">1.</span>
                        <span>Add all ingredients to a high-speed blender.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-purple-600 mr-2 flex-shrink-0">2.</span>
                        <span>Blend on high for 30-60 seconds until smooth and creamy.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-purple-600 mr-2 flex-shrink-0">3.</span>
                        <span>Add ice or more liquid if needed to reach desired consistency.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-purple-600 mr-2 flex-shrink-0">4.</span>
                        <span>Pour into a glass and enjoy immediately for best taste!</span>
                      </li>
                    </ol>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedSmoothie.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Ingredients */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Ingredients</h3>
                  <div className="bg-purple-50 rounded-xl p-3 mb-3">
                    <p className="text-sm text-purple-800 font-semibold mb-1">
                      📋 Makes 1-2 servings
                    </p>
                    <p className="text-xs text-purple-700">
                      Tip: Use frozen fruit or add ice for a thicker, colder smoothie
                    </p>
                  </div>
                  <div className="space-y-2">
                    {selectedSmoothie.ingredients.map((ingredient, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                        <div className="flex items-center flex-1">
                          <div className="bg-purple-100 rounded-full p-1.5 mr-2">
                            <ChevronRight className="w-3 h-3 text-purple-600" />
                          </div>
                          <span className="text-gray-800 font-medium">{ingredient.name}</span>
                        </div>
                        <span className="text-purple-600 font-bold text-sm">{ingredient.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="text-center mb-8 pt-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Smoothie Bliss
          </h1>
          <p className="text-gray-600">Discover your perfect blend</p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="bg-white rounded-full shadow-md p-1 inline-flex gap-1">
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-4 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                activeTab === 'daily'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Daily
            </button>
            <button
              onClick={() => setActiveTab('recommended')}
              className={`px-4 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                activeTab === 'recommended'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              For You
            </button>
            <button
              onClick={() => setActiveTab('finder')}
              className={`px-4 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                activeTab === 'finder'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Search className="w-4 h-4" />
              Finder
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              All
            </button>
            <button
              onClick={() => setActiveTab('liked')}
              className={`px-4 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                activeTab === 'liked'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Heart className="w-4 h-4" />
              Likes ({likedSmoothies.length})
            </button>
          </div>
        </div>

        {activeTab === 'daily' && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Today's Recommendations</h2>
              <p className="text-gray-600">Fresh picks just for you • Changes daily</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailySmoothies.map(smoothie => (
                <SmoothieCard key={smoothie.id} smoothie={smoothie} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'recommended' && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Recommended For You</h2>
              <p className="text-gray-600">Based on your likes • Personalized picks</p>
            </div>
            {likedSmoothies.length === 0 ? (
              <div className="text-center py-16">
                <ThumbsUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Like some smoothies first!</p>
                <p className="text-gray-400">We'll recommend similar ones based on your taste</p>
              </div>
            ) : recommendedSmoothies.length === 0 ? (
              <div className="text-center py-16">
                <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">You've liked them all!</p>
                <p className="text-gray-400">Check out the daily picks for more options</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedSmoothies.map(({ smoothie, percentage }) => (
                  <SmoothieCard key={smoothie.id} smoothie={smoothie} recommendScore={percentage} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'finder' && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Ingredient Finder</h2>
              <p className="text-gray-600">Tell us what you have, we'll find your smoothie</p>
            </div>
            
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Enter your ingredients:
                </label>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={searchIngredients}
                    onChange={(e) => setSearchIngredients(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                    placeholder="e.g., banana, strawberries..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  <button
                    onClick={addIngredient}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                  >
                    Add
                  </button>
                </div>
                
                {selectedIngredients.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Your ingredients:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedIngredients.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                        >
                          {ingredient}
                          <button
                            onClick={() => removeIngredient(ingredient)}
                            className="hover:bg-purple-200 rounded-full p-0.5 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {selectedIngredients.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Add ingredients to find matching smoothies</p>
                <p className="text-gray-400">Start typing what you have in your kitchen</p>
              </div>
            ) : matchedSmoothies.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No smoothies match those ingredients</p>
                <p className="text-gray-400">Try adding different ingredients</p>
              </div>
            ) : (
              <div>
                <p className="text-center text-gray-600 mb-6">
                  Found {matchedSmoothies.length} smoothie{matchedSmoothies.length > 1 ? 's' : ''} matching your ingredients
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchedSmoothies.map(({ smoothie, matchCount }) => (
                    <SmoothieCard key={smoothie.id} smoothie={smoothie} matchCount={matchCount} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'all' && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">All Smoothies</h2>
              <p className="text-gray-600">Explore our complete collection of {smoothieRecipes.length} recipes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {smoothieRecipes.map(smoothie => (
                <SmoothieCard key={smoothie.id} smoothie={smoothie} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'liked' && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Favorites</h2>
              <p className="text-gray-600">Smoothies you've saved • Synced across sessions</p>
            </div>
            {likedSmoothies.length === 0 ? (
              <div className="text-center py-16">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No favorites yet!</p>
                <p className="text-gray-400">Start liking smoothies to see them here</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedSmoothies.map(smoothie => (
                  <SmoothieCard key={smoothie.id} smoothie={smoothie} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}