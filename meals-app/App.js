import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        {/* set default screen options that will appear on all screens */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" }, // set the color of the header
            headerTintColor: "white", // set the color of the header title
            contentStyle: { backgroundColor: "#3f2f25" }, // set styles for the main screen
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meals Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }} // setting header options dynamically

            options={{
              headerStyle: { backgroundColor: "#48d1cc" },
            }}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealsDetailsScreen}
            options={{
              title: "Meal Detail",
              headerStyle: { backgroundColor: "#afeeee" },
              // headerRight:()=>{
              //   return <Button title="Tap Me" onPress={()=> alert("Pressed")}/>
              // }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
