import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

export default function Header({title, navigation}){

    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <TouchableOpacity style={styles.icon} onPress={openMenu}>
                <MaterialIcons name='menu' size={30}/>
            </TouchableOpacity> 
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
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
    headerImage:{
        width:26,
        height:26,
        marginHorizontal: 10,
    },
    headerTitle:{
        flexDirection: 'row',
    },
    icon: {
        position: 'absolute',
        left: 16,
        bottom: 10,
    }
});