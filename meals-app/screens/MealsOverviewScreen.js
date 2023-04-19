import { View, FlatList, StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/native"; // alternative of route

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

// get a route prop in a component registered as a screen in react navigation
function MealsOverviewScreen({ route }) {
  // const route = useRoute()
  // const cat = route.params.categoryId
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }
  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen {categoryId}</Text> */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
