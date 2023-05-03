import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoriteContextProvider from "../store/context/favarites-context";
import FavoriteContextProvider from "./store/context/Favarites-context";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
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
                headerStyle: { backgroundColor: "#afeee9" },
                // headerRight:()=>{
                //   return <Button title="Tap Me" onPress={()=> alert("Pressed")}/>
                // }
              }}
            />
            <Stack.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
                title: "Favorites",
                headerStyle: { backgroundColor: "#afeeee" },
                // drawerIcon: ({ color, size }) => (
                //   <Ionicons name="star" color={color} size={size} />
                // ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
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
