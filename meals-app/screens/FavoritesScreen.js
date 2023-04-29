import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { View, Text, StyleSheet } from "react-native";

import MealsList from "../components/MealsList/MealsList";
// import { FavoriteContext } from '../store/context/Favarites-context'
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  // const favoriteMealsContext = useContext(FavoriteContext);
  const favoriteMeals = useSelector((state) => state.favoriteMeals.ids);

  // const favoriteMeal = MEALS.filter(meal =>favoriteMealsContext.ids.includes(meal.id))
  const favoriteMeal = MEALS.filter((meal) => favoriteMeals.includes(meal.id));

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeal} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
