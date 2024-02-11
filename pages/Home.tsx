import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { Button } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ route, navigation }: Props) => {
  const handleReviews = () => {
    navigation.navigate('ReviewDetail')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home Screen</Text>
      <Button title="Go to Reviews" onPress={handleReviews}/>
    </View>
  )
}

export default Home