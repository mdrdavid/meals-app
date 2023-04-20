import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import AdminProductsScreen from "./screens/AdminProductsScreen";
import AdminSubscriptionsScreen from "./screens/AdminSubscriptions";
import AdminServicesScreen from "./screens/AdminServicesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar styles="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AdminProductsScreen"
            component={AdminProductsScreen}
            options={{ title: "Admin Products" }}
          />
          <Stack.Screen
            name="AdminServicesScreen"
            component={AdminServicesScreen}
            options={{ title: "Admin Services" }}
          />
          <Stack.Screen
            name="AdminSubscriptions"
            component={AdminSubscriptionsScreen}
            options={{ title: "Admin Subscriptions" }}
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
