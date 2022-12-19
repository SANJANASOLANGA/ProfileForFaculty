import React ,{ useState }from 'react';
import {Alert, ScrollView, SafeAreaView, View, StyleSheet, Text, TextInput, TouchableOpacity,ImageBackground} from 'react-native';
import SelectList from 'react-native-dropdown-select-list'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function StudentsFeedBack() {

  const [selected, setSelected] = useState("")
  const [com, setCom] = useState('');

  const onPressSubmit = async () => {
    let user = auth().currentUser;
    let email = user.email
    if (com == '') {
      Alert.alert('Please give your feedback !')
    }else{
      await firestore()
      .collection('Users')
      .doc(email)
      .update({
        LecComment: com,
      })
      .then(() => {
        Alert.alert(
          "Thank you for your feedback!"
        );
      });
      setCom('')
    }
  }

  const data = [
    {key:'1', value:'ANTHROPOLOGY'},
    {key:'2', value:'CRIMINOLOGY AND CRIMINAL JUSTICE'},
    {key:'3', value:'ECONOMICS'},
    {key:'4', value:'ENGLISH AND LINGUISTICS'},
    {key:'5', value:'ENGLISH LANGUAGE TEACHING'},
    {key:'6', value:'GEOGRAPHY'},
    {key:'7', value:'HISTORY AND ARCHAEOLOGY'},
    {key:'8', value:'INFORMATION & COMMUNICATION TECHNOLOGY'},
    {key:'9', value:'LANGUAGES, CULTURAL STUDIES AND PERFORMING ARTS'},
    {key:'10', value:'MUSIC AND CREATIVE TECHNOLOGY'},
    {key:'11', value:'PALI AND BUDDHIST STUDIES'},
    {key:'12', value:'PHILOSOPHY AND PSYCHOLOGY'},
    {key:'13', value:'POLITICAL SCIENCE'},
    {key:'14', value:'SINHALA AND MASS COMMUNICATION'},
    {key:'15', value:'SOCIAL STATISTICS'},
    {key:'16', value:'SOCIOLOGY'},
  ]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.container}>
        <ImageBackground
            style={styles.defaultBg}
            resizeMode={'stretch'}
            source={require('../../assets/Images/newTag.jpeg')}
        />
      </View>
      <View style={{paddingHorizontal:20, paddingVertical:10, backgroundColor:'#f7f7f7'}}>
      <SelectList 
          data={data} setSelected={setSelected} 
          placeholder='Search by name'
          dropdownStyles={{backgroundColor:'#edf0ee'}}
          dropdownTextStyles={{color:'#19241c'}}
          maxHeight={300}
        />
        <Text style={styles.heading}>
          Leave a comment about your experience
        </Text>
        <TextInput
          value={com}
          onChangeText={com => {
            setCom(com)
          }}
          style={styles.textInput}
          placeholder="Leave a comment..."
        />
        <TouchableOpacity style={styles.defaultButton} onPress={onPressSubmit}>
          <Text style={[styles.buttonText,{color:'#f7f7f7'}]}>
            Submit 
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily:'Roboto-Medium'
  },
  defaultBg: {
    width: '100%',
    height: 220,
  },
  textInput:{
    padding: 70,
    frontSize: 20,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 7,
    marginBottom:10,
    width: '100%',
    alignItems:'flex-start'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:9,
    color:'#3b3305'
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
  },
  button:{
    textAlign: 'center'
  }
});


