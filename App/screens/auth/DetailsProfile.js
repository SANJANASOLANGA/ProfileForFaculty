import React, { useEffect, useState } from 'react';
import {BackHandler, ImageBackground, StyleSheet, TextInput, Text, Image, TouchableOpacity, View,} from 'react-native';
import SelectList from 'react-native-dropdown-select-list'

const DetailsProfile = ({navigation}) => {
  // Disable the android back button
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', () => true);
  // }, []);
  
  const onPressRegister = () =>{
    navigation.navigate('Login')
  }

  const [selected, setSelected] = useState("")

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
          <View style={styles.container}>
            <ImageBackground
              style={styles.img}
              resizeMode={'cover'}
              source={require('../../assets/Images/AuthBG.jpg')}
            >
                <View style={styles.formatInput}>
                    <TextInput style={styles.textInput} placeholder="Full Name" />
                </View>
                <View style={styles.formatInput}>
                    <TextInput style={styles.textInput} placeholder="AR Number (AR12345)" /> 
                </View>
                <View style={styles.formatInput}>
                    <TextInput style={styles.textInput} placeholder="AF Number(AF/19/12345)" /> 
                </View>
                <View style={styles.formatInput}>
                  <SelectList 
                    data={data} setSelected={setSelected} 
                    placeholder='Select Department'
                    dropdownStyles={{backgroundColor:'#edf0ee'}}
                    dropdownTextStyles={{color:'#19241c'}}
                    maxHeight={300}
                  />
                </View>
                <View style={styles.formatInput}>
                    <TouchableOpacity style={styles.defaultButton} 
                        onPress={onPressRegister}
                    >
                      <Text style={[styles.buttonText,{color:'#f7f7f7'}]} >
                        Register 
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
      fontFamily:'Roboto-Medium'
    },
    img: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
    },
    textInput:{
      padding: 10,
      frontSize: 16,
      borderWidth: 1,
      borderColor: '#a7a7a7',
      borderRadius: 7,
      marginBottom:15,
      backgroundColor: '#f2e9ec',
    },
    formatInput:{
      marginTop: 7,
      padding: 7,
    },
    defaultButton:{
      padding: 15,
      backgroundColor: '#941824',
      borderRadius: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 16,
      Color: '#fff',
      fontWeight: 'bold',
    }
  });
export default DetailsProfile;