import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/home';
import ReviewDetail from './screens/reviewDetail';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  }); 

  const Stack = createNativeStackNavigator();

  if(fontsLoaded){
    SplashScreen.hideAsync()
  } 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title: 'GameZone', headerStyle: {backgroundColor: '#eee', height: 60}}}/>
        <Stack.Screen name='ReviewDetails' component={ReviewDetail} options={{title: 'Review Details', headerStyle: {backgroundColor: '#eee', height: 60}}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
} 



