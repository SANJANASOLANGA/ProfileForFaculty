import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ProfileButton(props) {
  return (
    <TouchableOpacity onPress={() => props.buttonClick()}>
      <View style={styles.buttonBorder}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
        <Text style={styles.buttonText2}>{props.buttonText2}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonBorder: {
    borderColor: '#e3d2d1',
    height: 70,
    borderWidth: 2,
    borderRadius: 20,
    margin: 30,
    marginTop: 0,
    marginBottom: 25,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#33302f',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium'
  },
  buttonText2: {
    color: '#757473',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Poppins-Medium'
  }
});