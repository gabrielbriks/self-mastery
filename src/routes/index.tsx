import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home as HomeScreen } from '../screens/Home';
import { Medo as MedoScreen } from '../screens/Medo';
import { Tristeza as TristezaScreen } from '../screens/Tristeza';
import { Saudade as SaudadeScreen } from '../screens/Saudade';
import { Vergonha as VergonhaScreen } from '../screens/Vergonha';

import { theme } from '../styles/theme';



const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Self-Mastery" 
          component={HomeScreen} 
          options={
            {
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTransparent: true,
              headerTitle: ""
            }}
        />
        <Stack.Screen 
          name="Medo" 
          component={MedoScreen} 
          options={
            {
              headerTransparent: true,
              headerShown: true,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitle: "",
              headerBackTitleStyle: {
                fontSize: 25, 
                fontFamily: theme.fonts.chewyRegular
              },
              headerBackVisible: true,
              headerBackButtonMenuEnabled: false,
              headerTintColor: '#000', 
              
            }}
        />

        <Stack.Screen 
          name="Tristeza" 
          component={TristezaScreen} 
          options={
            {
              headerTransparent: true,
              headerShown: true,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitle: "",
              headerBackTitleStyle: {
                fontSize: 25, 
                fontFamily: theme.fonts.chewyRegular
              },
              headerBackVisible: true,
              headerBackButtonMenuEnabled: false,
              headerTintColor: '#000', 
              
            }}
        />

        <Stack.Screen 
          name="Saudade" 
          component={SaudadeScreen} 
          options={
            {
              headerTransparent: true,
              headerShown: true,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitle: "",
              headerBackTitleStyle: {
                fontSize: 25, 
                fontFamily: theme.fonts.chewyRegular
              },
              headerBackVisible: true,
              headerBackButtonMenuEnabled: false,
              headerTintColor: '#000', 
              
            }}
        />

        <Stack.Screen 
          name="Vergonha" 
          component={VergonhaScreen} 
          options={
            {
              headerTransparent: true,
              headerShown: true,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTitle: "",
              headerBackTitleStyle: {
                fontSize: 25, 
                fontFamily: theme.fonts.chewyRegular
              },
              headerBackVisible: true,
              headerBackButtonMenuEnabled: false,
              headerTintColor: '#000', 
              
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;