import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native"; // alternative of route

import { MEALS } from "../data/dummy-data";

// get a route prop in a component registered as a screen in react navigation
function MealsOverviewScreen({ route }) {
  // const route = useRoute()
  // const cat = route.params.categoryId
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen {categoryId}</Text>
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
