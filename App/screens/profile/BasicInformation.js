import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ProfileBG from '../../components/ProfileBG'

const BasicInformation = () => {
  const [users, setUsers] = useState([]);

  const getProfileDetails = async () => {
    try {
      Alert.alert(
        "Profile details loaded !"
      );
      let user = auth().currentUser;
      let email = user.email
      console.log('hureeeeeeeee ' + email)
      await firestore()
        .collection('Users')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.docs.length > 0) {
            let pEmail = querySnapshot.docs[0]._data.email
            let pAR = querySnapshot.docs[0]._data.AR_Number
            let pAF = querySnapshot.docs[0]._data.AF_Number
            let pName = querySnapshot.docs[0]._data.name
            let education = querySnapshot.docs[0]._data.Education
            let sports = querySnapshot.docs[0]._data.Sports
            let volunteering = querySnapshot.docs[0]._data.Volunteering
            let cultural = querySnapshot.docs[0]._data.Cultural
            let youtube = querySnapshot.docs[0]._data.Youtube
            let fb = querySnapshot.docs[0]._data.FB
            let linkedin = querySnapshot.docs[0]._data.Linkedin
            let insta = querySnapshot.docs[0]._data.Insta
            let otherLinks = querySnapshot.docs[0]._data.OtherLinks
            let otherAchievements = querySnapshot.docs[0]._data.OtherAchievements
            users.push(pAF, pAR, pName, education, sports,
              volunteering, cultural, youtube, fb, linkedin, insta, otherLinks, otherAchievements)
            setUsers[users]
            console.log(
              querySnapshot +
              'user email = ' + pEmail +
              ' af = ' + pAF +
              ' ar = ' + pAR +
              ' name = ' + pName + ' insta ' + insta +
              'users[9] = ' + users[9]
            )
            console.log(users)

          } else {
            // Alert.alert('Account not found !')
            Alert.alert('Try after logout your profile')
          }
        })
        .catch(error => {
          Alert.alert(error)
          console.log('error is ' + error)
        })
    } catch (e) {
      Alert.alert('Try after logout your profile')
    }
  }

  useEffect(() => {
    getProfileDetails()
  }, []);

  return (
    <View style={styles.container}>
      <ProfileBG />
      <ScrollView style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
        <Image
          source={require('../../assets/Images/Profile.png')}
          resizeMode={'contain'}
          style={styles.profilePicture}
        />
        <Text style={styles.mainText}>Profile Details{'\n'}</Text>
        <Text style={styles.text}>{auth().currentUser.email}</Text>
        <Text style={styles.subText}>Email</Text>
        <Text></Text>
        <Text style={styles.text}>{users[2]}</Text>
        <Text style={styles.subText}>Name</Text>
        <Text></Text>
        <Text style={styles.text}>{users[1]}</Text>
        <Text style={styles.subText}>AR Number</Text>
        <Text></Text>
        <Text style={styles.text}>{users[0]}</Text>
        <Text style={styles.subText}>AF Number</Text>
        <Text style={styles.mainText}>{'\n'}Your Achievements{'\n'}</Text>
        <Text style={styles.text}>{users[3]}</Text>
        <Text style={styles.subText}>Education</Text>
        <Text></Text>
        <Text style={styles.text}>{users[4]}</Text>
        <Text style={styles.subText}>Sports</Text>
        <Text></Text>
        <Text style={styles.text}>{users[5]}</Text>
        <Text style={styles.subText}>Volunteering</Text>
        <Text></Text>
        <Text style={styles.text}>{users[6]}</Text>
        <Text style={styles.subText}>Cultural</Text>
        <Text></Text>

        <Text style={styles.mainText}>Social Media Links{'\n'}</Text>
        <Text style={styles.text}>{users[7]}</Text>
        <Text style={styles.subText}>YouTube</Text>
        <Text></Text>
        <Text style={styles.text}>{users[8]}</Text>
        <Text style={styles.subText}>Facebook</Text>
        <Text></Text>
        <Text style={styles.text}>{users[9]}</Text>
        <Text style={styles.subText}>Linkedin</Text>
        <Text></Text>
        <Text style={styles.text}>{users[10]}</Text>
        <Text style={styles.subText}>Instragram</Text>
        <Text></Text>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto-Medium'
  },
  profilePicture: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: '#8f242e',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Poppins-Italic",
    // borderBottomColor: 'black',
    // borderBottomWidth: StyleSheet.hairlineWidth
  },
  subText: {
    color: '#8f242e',
    textAlign: 'left',
    fontSize: 13,
    fontFamily: "Poppins-Medium",
    marginLeft: 10
  },
  text: {
    color: '#78232b',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Poppins-Medium",
    marginLeft: 10
  },
});

export default BasicInformation;