import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'The rating must be a number 1 to 5', (val)=>{return parseInt(val) < 6 && parseInt(val) > 0;})
});

export default function ReviewForm({ addReview }){
    return(
        <View style={globalStyles.container}>
            <Formik validationSchema={reviewSchema} initialValues={{title: '', body: '', rating: ''}} onSubmit={(values)=>{addReview(values);}}>
                {(formikProps) => (
                    <View>
                        <TextInput style={globalStyles.input} placeholder='Review Title' onChangeText={formikProps.handleChange('title')} value={formikProps.values.title}/>
                        <TextInput multiline style={globalStyles.input} placeholder='Review Body' onChangeText={formikProps.handleChange('body')} value={formikProps.values.body}/>
                        <TextInput style={globalStyles.input} placeholder='Rating (1-5)' onChangeText={formikProps.handleChange('rating')} value={formikProps.values.rating} keyboardType='numeric'/>
                        <Button title='submit' color='maroon' onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}