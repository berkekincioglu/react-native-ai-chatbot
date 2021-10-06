import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import ChatScreen from './src/screens/ChatScreen';
import { Provider } from 'react-redux';
// import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Start'
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Chat' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
