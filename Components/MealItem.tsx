import {Text, View} from "react-native";

function MealItem({title}: {title: string}) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default MealItem;