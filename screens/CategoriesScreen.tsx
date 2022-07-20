import { FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from "../data/dummy-data";
import React from "react";
import CategoryGridTile from "../Components/CategoryGridTile";
import { NavigationProps } from "../App";
import Category from "../models/category";

function CategoriesScreen() {
  const navigation = useNavigation<NavigationProps>();

  function pressHandler(item: Category) {
    navigation.navigate("MealOverview", {
      categoryId: item.id
    });
  }

  return <FlatList
    data={CATEGORIES}
    keyExtractor={item => item.id}
    renderItem={item => <CategoryGridTile title={item.item.title} color={item.item.color} onPress={() => pressHandler(item.item)} />}
    numColumns={2}
  />
}

export default CategoriesScreen;