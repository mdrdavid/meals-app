import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGripTile from "../components/CategoryGripTile";

function renderCategoryItem(itemData){
    return <CategoryGripTile title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen() {
  return <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2}/>;
}

export default CategoriesScreen;
