import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import { Button } from 'react-native'
import { ReviewType } from '../types'
import * as yup from "yup";
import { Text } from 'react-native'
import FlatButton from '../components/FlatButton'

const ReviewSchema = yup.object({
  title: yup.string()
    .required("Title is required")
    .min(4, 'Title must be at least 4 characters'),
  body: yup.string()
    .required("Body is required")
    .min(8, 'Body must be at least 8 characters'),
  rating: yup.string()
    .required("Rating is a required field")
    .test('is-num-1-5', 'Rating must be a number between 1 - 5', (val) => {
      return val && parseInt(val) > 0 && parseInt(val) < 6
    })
})

const ReviewForm = (props: {
  addReview: (review: ReviewType) => void
}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: ''
        }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          // log the values
          console.log(values)

          // add the review to the list
          props.addReview({
            title: values.title,
            body: values.body,
            rating: Number(values.rating),
            key: Math.random().toString()
          })

          // reset the form
          actions.resetForm()
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
              value={props.values.title}
            />
            {props.touched.title && props.errors.title &&
              <Text style={globalStyles.errorText}>
                {props.errors.title}
              </Text>}

            <TextInput
              multiline
              numberOfLines={4}
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={props.handleChange('body')}
              onBlur={props.handleBlur('body')}
              value={props.values.body}
            />
            {props.touched.body && props.errors.body &&
              <Text style={globalStyles.errorText}>
                {props.errors.body}
              </Text>}

            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              onBlur={props.handleBlur('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            {props.touched.rating && props.errors.rating &&
              <Text style={globalStyles.errorText}>
                {props.errors.rating}
              </Text>}

            <FlatButton text="Rate" onPress={() => props.handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default ReviewForm

const styles = StyleSheet.create({})