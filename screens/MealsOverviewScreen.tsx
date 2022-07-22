import { useLayoutEffect } from "react";
import {Alert} from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import {useNavigation, useRoute, RouteProp} from "@react-navigation/native";
import {NavigationProps, StackParamList} from "../App";
import Category from "../models/category";
import MealsList from "../Components/MealsList";

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
      navigation.goBack();
      Alert.alert("Unrecognized category", "This category was not recognized, therefore you can't see its details.");
      return
    }
    const categoryTitle: string = category.title;
    navigation.setOptions({headerTitle: categoryTitle})
  }, [categoryId, navigation])

  return <MealsList meals={displayedMeals} />
}

export default MealsOverviewScreen;