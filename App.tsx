import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import FavouritesContextProvider from "./store/context/favourites-context";

// temporarily here
const colors = {
  main: '#c2b280',
  light: '#f5e4b0',
  dark: '#918353',
}

export type StackParamList = {
  "MainCategories": undefined
  "MealOverview": { categoryId: string }
  "MealDetails": { mealId: string }
};
export type NavigationProps = NativeStackNavigationProp<StackParamList>;

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function MealsStackNavigator() {
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

function FavouritesStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Favourites"
      screenOptions={{
        headerStyle: {backgroundColor: '#C2B280', },
        headerTitleStyle: {fontWeight: 'bold'},
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        contentStyle: {backgroundColor: "#F5F5DC"},
      }}
    >
      <Tabs.Screen
        name={"Favourites"}
        component={FavouritesScreen}
      />
      <Stack.Screen
        name={"MealDetails"}
        component={MealDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Tabs.Navigator
            initialRouteName={"MealsStackNavigator"}
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
              name={"MealsStackNavigator"}
              component={MealsStackNavigator}
              options={{
                headerShown: false,
                title: "Meals library",
                tabBarIcon: ({color, size}) => <Ionicons name="apps-outline" color={color} size={size} />
              }}
            />
            <Tabs.Screen
              name={"FavouritesStackNavigator"}
              component={FavouritesStackNavigator}
              options={{
                headerShown: false,
                title: "Favourites",
                tabBarIcon: ({color, size}) => <Ionicons name="heart-outline" color={color} size={size} />
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
};
