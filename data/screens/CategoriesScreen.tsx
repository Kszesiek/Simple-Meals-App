import { FlatList } from "react-native";
import { CATEGORIES } from "../dummy-data";
import React from "react";
import CategoryGridTile from "../../Components/CategoryGridTile";

function CategoriesScreen() {
  return <FlatList
    data={CATEGORIES}
    keyExtractor={item => item.id}
    renderItem={item => <CategoryGridTile title={item.item.title} color={item.item.color} />}
    numColumns={2}
  />
}

export default CategoriesScreen;