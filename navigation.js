import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screems/Home";
import RestaurantDetail from "./screems/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
// import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();

export default function navigation() {
  const Stack = createStackNavigator();

  const screenOptions = { 
    headerShown: false,
  };
  
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
} 