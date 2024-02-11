import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const FlatButton = (props: {
  text: string,
  onPress: () => void
}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default FlatButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
    marginVertical: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  }
})