import React from "react";

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Platform,
} from "react-native";

import {useNavigation} from "@react-navigation/native"

function CategoryGripTile({ title, color, onPress }) {
  // navigating from inside a component that is not registered as a screen its self
  const navigation = useNavigation()
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <TouchableHighlight
        android_ripple={(color = "#ccc")}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        // onPress={() => alert("Pressed!")}
        onPress={onPress}
        // style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        style={styles.button}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default CategoryGripTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    // to set shadow on ios make sure you set a backgroundColor
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
