import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";
import Meal from "../models/meal";
import {useNavigation} from "@react-navigation/native";
import {NavigationProps} from "../App";

function MealsList({meals}: {meals: Meal[]}) {
  const navigation = useNavigation<NavigationProps>();

  function pressHandler (meal: Meal) {
    navigation.navigate("MealDetails", {
      mealId: meal.id
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={meals}
        keyExtractor={item => item.id}
        renderItem={item => <MealItem meal={item.item} onPress={() => pressHandler(item.item)} />}
      />
    </View>
  )
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingTop: 10,
    paddingBottom: 30,
  },
});