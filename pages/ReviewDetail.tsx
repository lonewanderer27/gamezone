import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles, images } from '../styles/global'
import { RootStackParamList } from '../routes/home';
import { StackScreenProps } from '@react-navigation/stack';
import Card from '../components/Card';
import { Image } from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'ReviewDetail'>;

const ReviewDetail = ({ route: { params: { review } }, navigation }: Props) => {
  const rating = ""+review.rating+""

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{review.title}</Text>
        <Text>{review.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})

export default ReviewDetail