import {useLayoutEffect} from "react";
import {Alert, Image, Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {NavigationProps, StackParamList} from "../App";
import {MEALS} from "../data/dummy-data";
import Meal from "../models/meal";

function MealDetailsScreen() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProp<StackParamList, "MealDetails">>();

  const mealId: string = route.params.mealId;
  let meal: Meal | undefined = MEALS.find(meal => meal.id === mealId);
  if (meal === undefined) {
    navigation.goBack();
    Alert.alert("Unrecognized meal", "This meal was not recognized, therefore you can't see its details.");
    return <View />  // doesn't really matter since we do navigation.goBack(), it only needs to be a react component
  }

  useLayoutEffect(() => {
    meal = MEALS.find(meal => meal.id === mealId);
    if (meal === undefined) {
      navigation.goBack();
      Alert.alert("Unrecognized meal", "This meal was not recognized, therefore you can't see its details.");
      return
    }
    navigation.setOptions({headerTitle: meal.title})
  }, [mealId, navigation])

  const complexityEmoteMap = {
    'simple': "\u{1F604}",
    'challenging': "\u{1F914}",
    'hard': '\u{1F613}',
  }
  const affordabilityEmoteMap = {
    'affordable': '\u0024',
    'pricey': '\u0024\u0024',
    'luxurious': '\u0024\u0024\u0024',
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: meal.imageUrl}} />
      <View style={styles.wholeParamsContainer}>
        <View style={styles.paramsContainer}>
          <Text style={styles.mealParam}>Affordability: {meal.affordability} {affordabilityEmoteMap[meal.affordability]}</Text>
          <Text style={styles.mealParam}>Time to prepare: {meal.duration} minutes &#128338;</Text>
          <Text style={styles.mealParam}>Complexity: {meal.complexity} {complexityEmoteMap[meal.complexity]}</Text>
          {meal.isVegan ? <Text style={styles.mealParam}>&#10004; Vegan</Text> : null}
          {meal.isVegetarian ? <Text style={styles.mealParam}>&#10004; Vegetarian</Text> : null}
          {meal.isGlutenFree ? <Text style={styles.mealParam}>&#10004; Gluten Free</Text> : null}
          {meal.isLactoseFree ? <Text style={styles.mealParam}>&#10004; Lactose Free</Text> : null}
        </View>
        <View style={styles.paramsContainer}>
          <Text style={styles.mealParamListTitle}>Ingredients:</Text>
          {meal.ingredients.map(ingredient => (
            <Text key={ingredient} style={styles.mealListParam}>• {ingredient}</Text>
          ))}
        </View>
        <View style={styles.paramsContainer}>
          <Text style={styles.mealParamListTitle}>Steps:</Text>
          {meal.steps.map((step, stepNo) => (
            <Text key={step} style={styles.mealListParam}>{stepNo+1}. {step}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  wholeParamsContainer: {
    paddingVertical: 10,
  },
  paramsContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: Platform.select({android: 'hidden', ios: 'visible'}),
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  mealParam: {
    fontSize: 15,
  },
  mealListParam: {
    fontSize: 14,
    paddingLeft: 10,
  },
  mealParamListTitle: {
    paddingVertical: 5,
    fontSize: 20,
  },
});