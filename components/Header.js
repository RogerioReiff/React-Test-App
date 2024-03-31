import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {

    return (
        
        <View style={styles.Header}>

            <Text style={styles.Title}>My Todo's</Text>

        </View>
    )
}

const styles =  StyleSheet.create({

    Header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },

    Title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});