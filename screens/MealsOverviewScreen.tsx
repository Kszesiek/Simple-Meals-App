import { useLayoutEffect } from "react";
import {View, StyleSheet, FlatList} from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import {useNavigation, useRoute, RouteProp} from "@react-navigation/native";
import {NavigationProps, StackParamList} from "../App";
import MealItem from "../Components/MealItem";
import Meal from "../models/meal";
import Category from "../models/category";

function MealsOverviewScreen() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProp<StackParamList, "MealOverview">>();

  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  })

  useLayoutEffect(() => {
    let category: Category | undefined = CATEGORIES.find(category => category.id == categoryId);
    if (category === undefined) {
      category = new Category("undefined", "Unrecognized category", "red");
    }
    const categoryTitle: string = category.title;
    navigation.setOptions({headerTitle: categoryTitle})
  }, [categoryId, navigation])

  function renderMealItem(itemData: {item: Meal}) {
    return (
      <View>
        <MealItem meal={itemData.item} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});