import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGripTile from "../components/CategoryGripTile";

// function renderCategoryItem(itemData){
//   function pressHandler(){}
//     return <CategoryGripTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
// }

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }
    return (
      <CategoryGripTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
