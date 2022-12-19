import React, {useState} from 'react';
import { Alert, StyleSheet, TextInput, Text, TouchableOpacity, View, } from 'react-native';
import ProfileBG from '../../components/ProfileBG'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SocialMediaLinks = () => {
  const [youtube, setYoutube] = useState('');
  const [fb, setFB] = useState('');
  const [linkedin, setLinkdin] = useState('');
  const [insta, setInsta] = useState('');
  const [other, setOther] = useState('');

  const onPressUpdate = async () => {
    let user = auth().currentUser;
    let email = user.email
    await firestore()
      .collection('Users')
      .doc(email)
      .update({
        Youtube: youtube,
        FB: fb,
        Insta: insta,
        Linkedin: linkedin,
        OtherLinks:other
      })
      .then(() => {
        Alert.alert(
          "Successfully Updated!"
        );
      });
  }
  return (
        <View style={styles.container}>
          <ProfileBG/>
        <View style={{backgroundColor:'#f7f7f7'}}>
        <View style={styles.formatInput}> 
          <TextInput 
            style={styles.textInput} 
            placeholder="YouTube Links" 
            value={youtube}
            onChangeText={youtube => {
              setYoutube(youtube)
            }} 
          />
        </View>
        <View style={styles.formatInput}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Facebook Links" 
            value={fb}
            onChangeText={fb => {
              setFB(fb)
            }} 
          />
        </View>
        <View style={styles.formatInput}> 
          <TextInput
            style={styles.textInput}
            placeholder="LinkedIn Links"
            value={linkedin}
            onChangeText={linkedin => {
              setLinkdin(linkedin)
            }} 
          />
        </View>
        <View style={styles.formatInput}> 
          <TextInput
            style={styles.textInput}
            placeholder="Instargram Links"
            value={insta}
            onChangeText={insta => {
              setInsta(insta)
            }} 
          />
        </View>  
        <View style={styles.formatInput}> 
          <TextInput
            style={styles.textInput}
            placeholder="Other Links"
            value={other}
            onChangeText={other => {
              setOther(other)
            }}
          />
        </View>
        <View style={styles.formatInput}>
          <TouchableOpacity style={styles.defaultButton} onPress={onPressUpdate}>
            <Text style={[styles.buttonText,{color:'#f7f7f7'}]}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formatInput}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}></View>
        </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'Roboto-Medium'
  },
  formatInput:{
    marginTop: 7,
    padding: 7,
  },
  textInput:{
    padding: 9,
    frontSize: 16,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 7,
  },
  defaultButton:{
    padding: 14,
    backgroundColor: '#941824',
    borderRadius: 10,
    color:'white',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    Color: '#fff',
    fontWeight: 'bold',
  }
});

export default SocialMediaLinks;
