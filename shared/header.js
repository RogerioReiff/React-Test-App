import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

export default function Header({title, navigation}){

    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    return(
        <View style={styles.header}>
            <TouchableOpacity style={styles.icon} onPress={openMenu}>
                <MaterialIcons name='menu' size={30}/>
            </TouchableOpacity> 
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee' 
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
        bottom: 10,
    }
});