import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CategoriesScreen from "./data/screens/CategoriesScreen";

export default function App() {
  return (
    <View>
      <StatusBar style="dark" />
      <CategoriesScreen/>
    </View>
  );
};
