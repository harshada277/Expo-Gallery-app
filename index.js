import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../screens/GalleryScreen';
import ViewerScreen from '../screens/ViewerScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Viewer" component={ViewerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}