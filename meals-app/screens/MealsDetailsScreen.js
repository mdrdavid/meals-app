import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/Favarites-context";

function MealsDetailsScreen({ route, navigation }) {
  const favoriteMealsContext = useContext(FavoriteContext);
  // route give access to the params set in the meal details screen
  const mealId = route.params.mealId;

  // check if a meal is favorite
  const isMealFavorite = favoriteMealsContext.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    // make meal unfavorite
    if (isMealFavorite) {
      favoriteMealsContext.removeFavorite(mealId);
    } else {
      favoriteMealsContext.addFavorite(mealId);
    }
    alert("pressed");
    navigation.navigate("Favorites");
  }
  // ad and set button to header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        // return <Button title="Tap Me" onPress={headerButtonPressHandler} />;
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={isMealFavorite ? "start" : "start-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  // select a meal
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText} // receive the textStyle prop from meal details component
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          {/* {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))} */}
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          {/* {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))} */}
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
