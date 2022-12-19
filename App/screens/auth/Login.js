import React, { useContext, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, TextInput, Text, Image, TouchableOpacity, View, } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AuthButton from '../../components/AuthButton';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();;

  const { register } = useContext(AuthContext);

  function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
        console.log('waited........')
    });
}

  const checkLogin = async() => {
    try{
      if (email == null) {
      Alert.alert('Email is required !')
    } else if (password == null){
      Alert.alert('Password is required !')
    }else {
      await firestore()
        .collection('Users')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          console.log('querySnapshot.docs is '+ querySnapshot.docs)
          console.log('querySnapshot.docs[0]._data.name is '+querySnapshot.docs[0]._data.name)
          if (querySnapshot.docs.length > 0) {
            if (
              querySnapshot.docs[0]._data.email === email &&
              querySnapshot.docs[0]._data.password === password
            ) {
              register(email, password)
              let user = auth().currentUser;
              console.log('currentUser is '+user)
              // new Promise(resolve => setTimeout(resolve, 10000));
              // wait(10000);
              if (user==email){
                Alert.alert(
                  "Logged Successfully !",
                  " ",
                  [
                    { text: "OK", onPress: () => navigation.navigate('Tabs') }
                  ]
                );
              }
              else{
                Alert.alert('Logged Successfully !')
              }
            } else {
              Alert.alert('Check your email or password again')
            }
            console.log(
              'Email is ' + querySnapshot.docs[0]._data.email + ' Password is ' +
              querySnapshot.docs[0]._data.password
            )
          } else {
            Alert.alert('Account not found')
          }
        })
        .catch(error => {
          Alert.alert('Sorry ! Please try again.....')
          console.log('error is ' + error)
        })
    }}catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!')
      }
  
      if (e.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!')
      }
      console.error(e);
      Alert.alert('Try again after sometime')
    }
    
    

  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        resizeMode={'cover'}
        source={require('../../assets/Images/AuthBG.jpg')}
      >
          <TextInput
            style={styles.textInput}
            placeholder="Your Faculty Email Address"
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            keyboardType='email-address'
            iconType="user"
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(UserPassword) => setpassword(UserPassword)}
            iconType="lock"
            secureTextEntry={true}
          />
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassWord')}
          >
            <Text
              style={styles.forgrtPW}>
              Forgot password?
            </Text>
          </TouchableOpacity> */}
          <AuthButton
            buttonText="Login"
            buttonClick={checkLogin}
          />
          {/* <Text style={[{textAlign: 'center', marginBottom:7, fontSize:16 }]}>or</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Images/Microsoft.png')}
              style={styles.microsoftLogo}
            />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text
              style={styles.bottomBanner}>
              Create Account? Register now
            </Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto-Medium',
  },
  img: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  textInput: {
    padding: 10,
    frontSize: 16,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 7,
    marginBottom: 15,
    backgroundColor: '#f2e9ec',
    margin:9,
  },
  forgrtPW: {
    color: '#d60916',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:20
  },
  bottomBanner: {
    color: '#0c28b3',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 7
  },
  microsoftLogo: {
    width: 40,
    height: 40,
    alignSelf: 'center'
  }
});
export default Login;