import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/styles.ts';

// @ts-ignore
const CustomCard = props => {
  const [likeCount, setLikeCount] = useState(0);

  const onLikedButtonPress = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.button_container}
        onPress={() => onLikedButtonPress()}>
        <Text style={styles.button_title}>I LIKED!</Text>
        <Text style={styles.button_text}>{likeCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;
