import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import ProfileBG from '../../components/ProfileBG';

const Guidline = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ProfileBG />
        </View>
        <View style={{ backgroundColor: '#f7f7f7' }}>
          <Text style={styles.textStyles}>
          To use this app, first you should be a student of Faculty Of Humanities And Social Sciences in University Of Sri Jayewardenepura.
            {'\n'}{'\n'}
            Then you should create account using your faculty email and give any password.
            {'\n'}{'\n'}
            There should be only one account per one user.
            {'\n'}{'\n'}
            After the creating account you can login to the profile any time using your username and password.
            {'\n'}{'\n'}
            You can get your all university details using your faculty mobile app.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d9c7',
    fontFamily: 'Roboto-Medium'
  },
  formatInput: {
    marginTop: 6,
    padding: 10,
  },
  textInput: {
    padding: 10,
    frontSize: 16,
    borderWidth: 3,
    borderColor: '#a7a7a7',
    borderRadius: 7,
  },
  textStyles: {
    color: '#1a0701',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '250',
    fontFamily:'Poppins-Medium'
  }
});

export default Guidline;
