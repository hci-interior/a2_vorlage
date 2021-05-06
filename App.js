import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import APIScreen from "./app/screens/APIScreen.js";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ title: 'Welcome' }}>
          </Stack.Screen>
          <Stack.Screen
              name="API"
              component={APIScreen}
              options={{ title: 'Animal Facts' }}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
