import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About Screen</Text>
    </View>
  )
}

export default About