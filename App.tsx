import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import {Ionicons} from "@expo/vector-icons";

export type StackParamList = {
  "MainCategories": undefined
  "MealOverview": { categoryId: string }
  "MealDetails": { mealId: string }
};
export type NavigationProps = NativeStackNavigationProp<StackParamList>;

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainCategories"
      screenOptions={{
        headerStyle: {backgroundColor: '#C2B280', },
        headerTitleStyle: {fontWeight: 'bold'},
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
      <Stack.Screen
        name={"MealDetails"}
        component={MealDetailsScreen}
      />
    </Stack.Navigator>
  );
}

const colors = {
  main: '#c2b280',
  light: '#f5e4b0',
  dark: '#918353',
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName={"StackNavigator"}
          screenOptions={{
            headerStyle: {backgroundColor: colors.main},
            headerTitleStyle: {fontWeight: 'bold'},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            tabBarInactiveTintColor: colors.dark,
            tabBarActiveTintColor: colors.dark,
            tabBarActiveBackgroundColor: colors.light,
            tabBarStyle: {backgroundColor: colors.main},
          }}
        >
          <Tabs.Screen
            name={"StackNavigator"}
            component={StackNavigator}
            options={{
              headerShown: false,
              title: "Meals library",
              tabBarIcon: ({color, size}) => <Ionicons name="apps-outline" color={color} size={size} />
            }}
          />
          <Tabs.Screen
            name={"Favourites"}
            component={FavouritesScreen}
            options={{
              tabBarIcon: ({color, size}) => <Ionicons name="heart-outline" color={color} size={size} />
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  );
};
