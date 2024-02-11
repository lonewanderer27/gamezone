import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  titleText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18
  }
})