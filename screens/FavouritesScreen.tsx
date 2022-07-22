import {Text, View, StyleSheet} from "react-native";

function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Henlo!</Text>
    </View>
  )
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5DC",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})