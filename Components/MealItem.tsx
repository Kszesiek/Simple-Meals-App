import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";
import Meal from "../models/meal";

function MealItem({meal}: {meal: Meal}) {
  return (
    <View>
      <View style={styles.mealCard}>
        <Pressable
          android_ripple={{color: 'gray'}}
          style={({pressed}: {pressed: boolean}) => pressed ? styles.buttonPressed : null}
        >
          {/*<View style={styles.titleCard}>*/}
            <Image style={styles.image} source={{uri: meal.imageUrl}} />
          {/*</View>*/}
          <Text style={styles.title}>{meal.title}</Text>
          <View style={styles.properties}>
            <Text>{meal.duration} minutes  |  {meal.complexity}  |  {meal.affordability}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealCard: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: Platform.select({android: 'hidden', ios: 'visible'}),
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  // titleCard: {
  //   elevation: 5,
  //   borderRadius: 10,
  //   backgroundColor: 'white',
  //   overflow: 'hidden',
  // },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 22,
    margin: 10,
  },
  properties: {
    margin: 10,
    marginTop: 0,
    alignItems: 'center'
  },
  buttonPressed: {
    opacity: 0.9,
  },
});