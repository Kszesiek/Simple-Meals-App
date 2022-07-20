import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

export type StackParamList = {
  "MainCategories": undefined
  "MealOverview": { categoryId: string }
};
export type NavigationProps = NativeStackNavigationProp<StackParamList>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainCategories"
          screenOptions={{
            headerStyle: {backgroundColor: '#C2B280'},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            contentStyle: {backgroundColor: "#F5F5DC"},
          }}
        >
          <Stack.Screen
            name={"MainCategories"}
            component={CategoriesScreen}
            options={{title: 'Categories'}}
          />
          <Stack.Screen
            name={"MealOverview"}
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
