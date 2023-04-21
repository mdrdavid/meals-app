import React from "react";
import { View, Text } from "react-native";

function MealsDetailsScreen({ route, navigation }) {
  // route give access to the params set in the meal details screen
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the meal detail screen ({mealId})</Text>
    </View>
  );
}

export default MealsDetailsScreen;
