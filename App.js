import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from "./components/Screens/Home";
import ExploreScreen from "./components/Screens/Explore";
import ProfileScreen from "./components/Screens/Profile";
import SettingsScreen from "./components/Screens/Settings";

export default function App() {
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Explore" component={ExploreScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="Settings" component={SettingsScreen}/>
      <Stack.Screen name="Collection" component={CollectionScreen}/>
    </Stack.Navigator>
  </NavigationContainer>);
}

const Stack = createNativeStackNavigator();
