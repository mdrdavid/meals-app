import React, { useEffect, useLayoutEffect } from "react";

import { useRoute } from "@react-navigation/native"; // alternative of route

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

// get a route prop in a component registered as a screen in react navigation
function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute()
  // const cat = route.params.categoryId
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // useLayoutEffect is used here to enable a smooth transition,
  // the useLayoutEffect simultaneously loads as the component renders not after the component has rendered
  useLayoutEffect(() => {
    // getting a category with the id equal to the categoryId and access the title
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    // setting the navigation header options directly from the navigation screen
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);
  return <MealsList items={displayedMeals}/>
}

export default MealsOverviewScreen;
