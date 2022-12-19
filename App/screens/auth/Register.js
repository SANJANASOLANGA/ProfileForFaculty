import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, TextInput, Text, Image, TouchableOpacity, View, } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AuthButton from '../../components/AuthButton';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [ar, setAR] = useState('');
  const [af, setAF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const getProfileDetails = async () => {
    await firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        // check the email is already exsits or not
        if (querySnapshot.docs.length > 0) {
          if (querySnapshot.docs[0]._data.email === email) {
            Alert.alert('Email is already exists !')
            console.log('Entered email is ' + email)
            console.log('Stored email is ' + querySnapshot.docs[0]._data.email)
          }
        }
      })
      .catch(error => {
        Alert.alert(error)
        console.log('Your error is ' + error)
      })
  }

  const onPressRegister = async () => {

    console.log('Name is ' + name + ' AR is ' + ar + ' AF is ' + af + ' Email is ' + email)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name == '' && ar == '' && af == '' && email == '' && password == '' && confirmPassword == '') {
      Alert.alert('All fields are required !')
      // } else if (getProfileDetails()) {
      //   console.log('getProfileDetails() section')
      // alert('Email is required !')
    } else if (email == '') {
      Alert.alert('Email is required !')
    } else if (password == '') {
      Alert.alert('Password is required !')
    } else if (confirmPassword == '') {
      Alert.alert('Confirm Password is required !')
    } else if (password !== confirmPassword) {
      Alert.alert("Password didn't match")
    } else if (password.length < 6) {
      Alert.alert("Password isn't strong")
    } else if (reg.test(email) === false) {
      Alert.alert("Email is Not Correct")
    } else {
      // console.log('Else part   Name is '+name + ' AR is ' + ar + ' AF is ' + af+ ' Email is ' + email)
      // if(email != ''){
      //   await firestore()
      //     .collection('Users')
      //     .where('email', '==', email)
      //     .get()
      //     .then(querySnapshot => {
      //       // check the email is already exsits or not
      //       if (querySnapshot.docs.length > 0) {
      //         if ( querySnapshot.docs[0]._data.email === email ) {
      //           alert('Email is already exists !')
      //         }
      //       } 
      //     })
      //     .catch(error => {
      //       alert(error)
      //       console.log('error is ' + error)
      //     })
      // }else{
      //   await firestore()
      //     .collection('Users')
      //     .doc(ar)
      //     .set({
      //       name: name,
      //       AR_Number: ar,
      //       AF_Number: af,
      //       email: email,
      //       password: password
      //     })
      //     .then(() => {
      //       console.log('Name is '+name + 'AR is' + ar + af+ email)
      //       console.log('User added!');
      //       alert('User added!')
      //       navigation.navigate('Login')
      //     });
      // }
      await firestore()
        .collection('Users')
        .doc(email)
        .set({
          name: name,
          AR_Number: ar,
          AF_Number: af,
          email: email,
          password: password,
          Education:'No data entered',
          Sports: 'No data entered',
          Volunteering: 'No data entered',
          Cultural: 'No data entered',
          Youtube: 'No data entered',
          FB: 'No data entered',
          Linkedin: 'No data entered',
          Insta: 'No data entered'
        })
        .then(() => {
          Alert.alert(
            "Successfully Registerd!",
            " ",
            [
              { text: "OK", onPress: () => navigation.navigate('Login') }
            ]
          );
        });
    }
  }

  const onPressLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        resizeMode={'cover'}
        source={require('../../assets/Images/AuthBG.jpg')}
      >
        <TextInput
          value={name}
          onChangeText={userName => {
            setName(userName)
          }}
          style={styles.textInput}
          placeholder="Full Name"
        />

        <TextInput
          value={ar}
          onChangeText={userAR => {
            setAR(userAR)
          }}
          style={styles.textInput}
          placeholder="AR Number (AR12345)"
        />

        <TextInput
          value={af}
          onChangeText={userAF => {
            setAF(userAF)
          }}
          style={styles.textInput}
          placeholder="AF Number(AF/19/12345)"
        />

        <TextInput
          value={email}
          onChangeText={userEmail => {
            setEmail(userEmail)
          }}
          style={styles.textInput}
          placeholder="Your Faculty Email Address"
          keyboardType='email-address'
        />
        <TextInput
          value={password}
          onChangeText={userPassword => {
            setpassword(userPassword)
          }}
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={userConfirmPassword => {
            setConfirmPassword(userConfirmPassword)
          }}
          style={styles.textInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <AuthButton
          buttonText="Register"
          buttonClick={onPressRegister}
        />
        <TouchableOpacity
          style={styles.defaultButton}
          onPress={onPressRegister}
        >
          <Text
            style={[styles.buttonText, { color: '#f7f7f7' }]}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressLogin}
        >
          <Text
            style={styles.LoginBanner}>
            Already Have An Account? Login
          </Text>
        </TouchableOpacity>
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
  textInput: {
    padding: 10,
    frontSize: 16,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 7,
    marginBottom: 15,
    backgroundColor: '#f2e9ec',
    margin: 7
  },
  LoginBanner: {
    color: '#0736ad',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Register;