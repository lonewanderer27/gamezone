import { Text, View } from 'react-native'
import React, { useId, useState } from 'react'
import { globalStyles } from '../styles/global'
import { Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/home';
import { FlatList, TouchableOpacity } from 'react-native';
import { ReviewType } from '../types';
import Card from '../components/Card';
import { Modal } from 'react-native';
import { StyleSheet } from 'react-native';
import { useToggle } from 'usehooks-ts'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';
import { useAtom } from 'jotai';
import { gameReviewsAtom } from '../atoms';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  const [reviews, setReviews] = useAtom(gameReviewsAtom)
  const [modalOpen, toggleModal, setModalOpen] = useToggle();

  const handleReview = (review: ReviewType) => {
    navigation.navigate("ReviewDetail", { review: review });
  }

  const handleAddReview = (review: ReviewType) => {
    // add review at the top of the list
    setReviews((prevReviews) => {
      return [review, ...prevReviews]
    })

    // close modal
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm addReview={handleAddReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleReview(item)}>
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }
})

export default Home