import 'react-native-gesture-handler';
import React from 'react';
import Home from './home';
import About from './about';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Root( {navigation} ){

    const Drawer = createDrawerNavigator();

    return(
     <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Drawer.Screen name='About' component={About}/>  
     </Drawer.Navigator>
    );
}

