import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetail({route, navigation}){

    const {Items} = route.params;

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{Items.title}</Text>
                <Text style={globalStyles.titleText}>{Items.body}</Text>
                <View style={styles.rating}>
                    <Text>BroZone rating: </Text>
                    <Image source={images.ratings[Items.rating]}/>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});
