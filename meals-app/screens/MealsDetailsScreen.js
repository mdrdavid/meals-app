import React from "react";
import { View, Text, Image } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetails";

function MealsDetailsScreen({ route, navigation }) {
  // route give access to the params set in the meal details screen
  const mealId = route.params.mealId;

  // select a meal
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>stepd</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealsDetailsScreen;
