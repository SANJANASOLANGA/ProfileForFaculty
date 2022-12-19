import React from "react";
import { View, StyleSheet, Image } from 'react-native';

export default function ProfileBG() {
  return (
    <View>
      <Image
        style={styles.img}
        source={require('../assets/Images/newTag.jpeg')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  }
});