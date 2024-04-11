import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetail({route, navigation}){

    const {Items} = route.params;

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{Items.title}</Text>
            <Text style={globalStyles.titleText}>{Items.body}</Text>
            <Text style={globalStyles.titleText}>{Items.rating}</Text>
        </View>
    );
}
