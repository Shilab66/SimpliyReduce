import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginS from './screens/LoginS';
import HomeScreen from './screens/HomeScreen';
import Carpool from './screens/Carpool';
import Log from './screens/Log';
import PublicChat from './screens/PublicChat';
import LogAction from './screens/LogAction';
import CreateRequest from './screens/CreateRequest';
import Test from './screens/Test';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen options={{headerShown: false}} name="Login" component={LoginS} />
         <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
         <Stack.Screen options={{headerShown: false}} name="Carpool" component={Carpool} />
         <Stack.Screen options={{headerShown: false}} name="Log" component={Log} />
         <Stack.Screen options={{headerShown: false}} name="Action" component={LogAction} />
         <Stack.Screen options={{headerShown: false}} name="Chat" component={PublicChat} />
         <Stack.Screen options={{headerShown: false}} name="Request" component={CreateRequest} />
         <Stack.Screen options={{headerShown: false}} name="Test" component={Test} />
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
