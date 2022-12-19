import React from 'react';
import { Alert, ImageBackground, StyleSheet, TextInput, Text, TouchableOpacity, View, } from 'react-native';
const ForgetPassWord = (navigation) => {
  const onPressRegister = () => {
    try {
      navigation.navigate('Register')
    }
    catch (e) { Alert.alert("There is an error") }
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        resizeMode={'cover'}
        source={require('../../assets/Images/AuthBG.jpg')}
      >

        <View style={styles.formatInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Faculty Email Address"
          />
        </View>
        <View style={styles.formatInput}>
          <TouchableOpacity style={styles.defaultButton}>
            <Text
              style={[styles.buttonText, { color: '#f7f7f7' }]}>
              Send Reset Link
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formatInput}>
          <View style={{ height: 1, backgroundColor: '#ddd', width: '100%' }} />
        </View>
        <View style={styles.formatInput}>
          <TouchableOpacity onPress={onPressRegister}>
            <Text
              style={[styles.bottomBanner, styles.buttonText]}>
              Create Account? Register now
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto-Medium'
  },
  img: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    Color: 'white',
    fontWeight: 'bold',
  },
  formatInput: {
    marginTop: 7,
    padding: 7,
  },
  textInput: {
    padding: 10,
    frontSize: 16,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 7,
    backgroundColor: '#f2e9ec',
  },
  defaultButton: {
    padding: 15,
    backgroundColor: '#941824',
    borderRadius: 10,
    color: 'white'
  },
  bottomBanner: {
    color: '#0c28b3',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    Color: '#fff',
    fontWeight: 'bold',
  }
});
export default ForgetPassWord;