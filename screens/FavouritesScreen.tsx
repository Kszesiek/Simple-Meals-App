import {Text, View, StyleSheet} from "react-native";
import MealsList from "../Components/MealsList";
import {MEALS} from "../data/dummy-data";
import {useSelector} from "react-redux";
import {store} from "../store/redux/store";

function FavouritesScreen() {
  const favouriteMealIds = useSelector((state: typeof store.dispatch.prototype) => state.favouriteMeals.meal_ids);
  const favouriteMeals = MEALS.filter(meal => favouriteMealIds.includes(meal.id));

  if (favouriteMeals.length === 0)
    return (
      <View style={styles.noMealsContainer}>
        <Text style={styles.noMealsText}>It seems like you haven't added any meals to your favourites yet.</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <MealsList meals={favouriteMeals} />
    </View>
  )
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5DC",
    flex: 1,
  },
  noMealsContainer: {
    backgroundColor: "#F5F5DC",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMealsText: {
    width: '70%',
    textAlign: 'center',
  },
})