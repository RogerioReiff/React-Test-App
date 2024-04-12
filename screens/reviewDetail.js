import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetail({route, navigation}){

    const {Items} = route.params;

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{Items.title}</Text>
                <Text style={globalStyles.titleText}>{Items.body}</Text>
                <Text style={globalStyles.titleText}>{Items.rating}</Text>
            </Card>
        </View>
    );
}
