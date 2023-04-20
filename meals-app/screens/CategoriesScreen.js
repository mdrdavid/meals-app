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
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id // pass the category id from params to the mealsOverviewScreen
      });
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
