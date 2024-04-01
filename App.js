import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/home';
import ReviewDetail from './screens/reviewDetail';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  }); 

  const Stack = createNativeStackNavigator();

  if(!fontsLoaded){
    <AppLoading />
  } 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Review Details' component={ReviewDetail} />
      </Stack.Navigator>
    </NavigationContainer>

  );
} 



