import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { Button } from 'react-native'
import { RootStackParamList } from '../routes/home';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'ReviewDetail'>;

const ReviewDetail = ({ route, navigation }: Props) => {
  const handleHome = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{route.params.review.title}</Text>
      <Button title="Back to Home" onPress={handleHome} />
    </View>
  )
}

export default ReviewDetail