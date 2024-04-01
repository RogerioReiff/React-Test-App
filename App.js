import React from 'react';
import { useState } from 'react';
import Home from './screens/home';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  }); 


   if(!fontsLoaded){
    <AppLoading />
  } 
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>

  );
} 



