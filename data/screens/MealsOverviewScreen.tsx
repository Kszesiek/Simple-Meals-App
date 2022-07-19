import {View, StyleSheet, FlatList} from "react-native";
import { MEALS } from "../dummy-data";
import {useNavigation, useRoute, RouteProp} from "@react-navigation/native";
import {NavigationProps, StackParamList} from "../../App";
import MealItem from "../../Components/MealItem";
import Meal from "../../models/meal";

function MealsOverviewScreen() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProp<StackParamList, "MealOverview">>();

  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  })

  function renderMealItem(itemData: {item: Meal}) {
    return (
      <View>
        <MealItem title={itemData.item.title} />
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