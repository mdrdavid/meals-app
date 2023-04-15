import { View, Text, TouchableHighlight } from "react-native";

function CategoryGripTile({ title, color }) {
  return (
    <View>
      <TouchableHighlight>
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default CategoryGripTile;
