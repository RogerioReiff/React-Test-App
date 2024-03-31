import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReviewDetail(){
    return(
        <View style={styles.container}>
            <Text>Review Detail Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});