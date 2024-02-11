import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/global'
import { Button } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../routes';
import { FlatList, TouchableOpacity } from 'react-native';
import { ReviewType } from '../types';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  const [reviews, setReviews] = useState<ReviewType[]>([
    {
      title: "Half-Life 2",
      rating: 9.5,
      body: "Half-Life 2 follows protagonist Gordon Freeman as he fights the alien Combine and their oppressive rule over humanity.",
      key: "hl2"
    },
    {
      title: "BioShock",
      rating: 9.3,
      body: "Set in the underwater city of Rapture, BioShock combines first-person shooter gameplay with RPG elements and a compelling narrative.",
      key: "bioshock"
    },
    {
      title: "Deus Ex: Human Revolution",
      rating: 9.0,
      body: "In Deus Ex: Human Revolution, players take on the role of Adam Jensen, a security officer equipped with cybernetic augmentations, as he uncovers a global conspiracy.",
      key: "deusexhr"
    },
    {
      title: "Prey",
      rating: 8.7,
      body: "Prey puts players in the shoes of Morgan Yu aboard a space station overrun by hostile aliens, offering a blend of psychological horror and immersive storytelling.",
      key: "prey"
    },
    {
      title: "Metro Exodus",
      rating: 8.8,
      body: "Metro Exodus continues the story of Artyom as he ventures out of the Moscow metro into the post-apocalyptic Russian wilderness, facing both human and mutant threats.",
      key: "metroexodus"
    },
    {
      title: "The Last of Us Part II",
      rating: 9.7,
      body: "The Last of Us Part II follows Ellie as she seeks revenge in a post-apocalyptic world, exploring themes of morality, redemption, and the consequences of one's actions.",
      key: "tlou2"
    },
    {
      title: "Horizon Zero Dawn",
      rating: 9.2,
      body: "In Horizon Zero Dawn, players control Aloy, a hunter in a world overrun by robotic creatures, as she uncovers the secrets of her past and the origins of the machines.",
      key: "horizonzerodawn"
    },
    {
      title: "Bloodborne",
      rating: 9.4,
      body: "Bloodborne plunges players into a dark and gothic world filled with nightmarish creatures and challenging gameplay, offering a deep and immersive experience.",
      key: "bloodborne"
    },
    {
      title: "Heavy Rain",
      rating: 9.0,
      body: "Heavy Rain is an interactive drama and action-adventure game that follows four characters as they investigate the Origami Killer, a serial murderer whose victims drown in rainfall.",
      key: "heavyrain"
    }
  ])

  const handleReviews = () => {
    navigation.navigate('ReviewDetail')
  }

  const handleReview = (review: ReviewType) => {
    navigation.navigate("ReviewDetail", { review: review });
  }

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleReview(item)}>
            <Text style={globalStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home