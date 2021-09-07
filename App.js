import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/pages/Splash';
import Home from './src/pages/Home';
import Movie from './src/pages/Movie';

import {Button} from 'react-native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Movie"
            component={Movie}
            options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
