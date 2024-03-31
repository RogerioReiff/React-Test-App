import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function TodoItem({item, pressHandler}) {
    
    return(

            <View style={styles.item}>

                <TouchableOpacity onPress={() => pressHandler(item.key)}>

                    <MaterialIcons name='delete' size={18} color='#333'/>

                 </TouchableOpacity>

                 <Text style={styles.textList}>{item.text}</Text>

            </View>
    )
}

const styles =  StyleSheet.create({

    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },

    textList: {
        marginLeft: 5,
    }
});