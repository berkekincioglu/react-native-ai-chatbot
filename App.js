import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Start'
          component={StartScreen}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name='Chat' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
