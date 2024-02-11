import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import { Button } from 'react-native'
import { ReviewType } from '../types'

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
              value={props.values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />

            <Button title="Rate" color="maroon" onPress={() => props.handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default ReviewForm

const styles = StyleSheet.create({})