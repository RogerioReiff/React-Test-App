import 'react-native-gesture-handler';
import React from 'react';
import Home from './home';
import About from './about';
import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Root( {navigation} ){

    const Drawer = createDrawerNavigator();

    return(
     <Drawer.Navigator>
        <Drawer.Group screenOptions={{headerStyle:{backgroundColor: '#eee', height: 60}}}>
            <Drawer.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Drawer.Screen name='About' component={About} options={{headerShown: false}}/>  
        </Drawer.Group>
     </Drawer.Navigator>
    );
}

