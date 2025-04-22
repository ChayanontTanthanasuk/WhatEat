import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//  Signup/Login
import LoginScreen from './Singup/LoginScreen';

//  Onboarding
import AgeScreen from './Singup/AgeScreen';
import WeightScreen from './Singup/WeightScreen';
import HeightScreen from './Singup/HeightScreen';
import GenderScreen from './Singup/GenderScreen';
import DiseaseScreen from './Singup/DiseaseScreen';
import FoodAllergyScreen from './Singup/FoodAllergyScreen';

//  Main Pages
import MainPage from './Main/MainPage';
import MealPage from './Category/MealPage';
import AppetizersPage from './Category/AppetizersPage';
import MealDetailPage from './Category/Detail/MealDetailPage';
import AppetizersDetailPage from './Category/Detail/AppetizersDetailPage';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        
        {/* Auth */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/*  Onboarding Flow */}
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="Weight" component={WeightScreen} />
        <Stack.Screen name="Height" component={HeightScreen} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen name="Disease" component={DiseaseScreen} />
        <Stack.Screen name="FoodAllergy" component={FoodAllergyScreen} />

        {/*  Main App */}
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="MealPage" component={MealPage} />
        <Stack.Screen name="AppetizersPage" component={AppetizersPage} />
        <Stack.Screen name="MealDetail" component={MealDetailPage} />
        <Stack.Screen name="AppetizersDetail" component={AppetizersDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
