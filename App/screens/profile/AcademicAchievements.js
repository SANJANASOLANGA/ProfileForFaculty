import React, {useState} from 'react';
import { Alert, StyleSheet, TextInput, Text, TouchableOpacity, View, } from 'react-native';
import ProfileBG from '../../components/ProfileBG'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const AcademicAchievements = () => {

  const [education, setEducation] = useState('');
  const [sports, setSports] = useState('');
  const [volunteering, setVolunteering] = useState('');
  const [cultural, setCultural] = useState('');
  const [other, setOther] = useState('');

  const onPressUpdate = async () => {
    let user = auth().currentUser;
    let email = user.email
    await firestore()
      .collection('Users')
      .doc(email)
      .update({
        Education: education,
        Sports: sports,
        Volunteering: volunteering,
        Cultural: cultural,
        OtherAchievements:other
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
            placeholder="Education"
            value={education}
            onChangeText={aEducation => {
              setEducation(aEducation)
            }} 
          />
        </View>
        <View style={styles.formatInput}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Sports" 
            value={sports}
            onChangeText={aSports => {
              setSports(aSports)
            }}
          />
        </View>
        <View style={styles.formatInput}> 
          <TextInput
            value={volunteering}
            onChangeText={aVolunteering => {
              setVolunteering(aVolunteering)
            }}
            style={styles.textInput}
            placeholder="Volunteering"
          />
        </View>
        <View style={styles.formatInput}> 
          <TextInput
            value={cultural}
            onChangeText={aCultural => {
              setCultural(aCultural)
            }}
            style={styles.textInput}
            placeholder="Cultural"
          />
        </View>  
        <View style={styles.formatInput}> 
          <TextInput
            value={other}
            onChangeText={aOther => {
              setOther(aOther)
            }}
            style={styles.textInput}
            placeholder="Other"
          />
        </View>
        <View style={styles.formatInput}>
          <TouchableOpacity style={styles.defaultButton} onPress={onPressUpdate}>
            <Text style={[styles.buttonText,{color:'#f7f7f7'}]}>
              Update
            </Text>
          </TouchableOpacity>
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
    padding: 15,
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

export default AcademicAchievements;
