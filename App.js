import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './screens/root';
import About from './screens/about';
import ReviewDetail from './screens/reviewDetail';
import Header from './shared/header';

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
      <Stack.Navigator initialRouteName='Root'>
          <Stack.Group screenOptions={{headerStyle:{backgroundColor: '#eee', height: 60}}}>
              <Stack.Screen name='Root' component={Root} options={({navigation})=> {return{header:()=> <Header title='BroZone' navigation={navigation}/>}}}/>
              <Stack.Screen name='ReviewDetails' component={ReviewDetail} options={{title:'Review Details'}}/>
              <Stack.Screen name='aboutStack' component={About} options={({navigation})=> {return{header:()=> <Header title='BroZone' navigation={navigation}/>}}}/> 
          </Stack.Group>    
      </Stack.Navigator>
    </NavigationContainer>
  );
} 



