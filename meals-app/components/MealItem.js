import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import {useNavigation} from "@react-navigation/native"

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();
// navigating to the meals detail screen using useNavigation hook since this meals item 
//is a component not a screen so can not access navigation or route from react navigation

function selectMealHandler(){
  navigation.navigate("MealDetailsScreen", {
    mealId: id
  })
}
  
  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <TouchableHighlight
          android_ripple={(color = "#ccc")}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={selectMealHandler}
        >
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration} minutes</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    // to set shadow on ios make sure you set a backgroundColor
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  // on ios
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
