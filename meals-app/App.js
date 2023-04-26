import { StatusBar } from "react-native";
import { StyleSheet, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" }, // set the color of the header
        headerTintColor: "white", // set the color of the header title
        sceneContainerStyle: { backgroundColor: "#3f2f25" }, // set styles for the main screen
        drawerContentStyle: { backgroundColor: "#351401" }, // set the background color for the drawer
        drawerInactiveTintColor: "white", // set the color of the drawer items
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
          {/* Drawer navigation nested in Stack navigation */}
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              // title: "Meals Categories",
              headerShown: false, // remove the stack navigation header when on drawer navigation
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
