
import React from 'react';
import {StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';
import ProfileBG from '../../components/ProfileBG'
const Resume = () => {
  return (
      
        <View style={styles.container}>
          <ProfileBG/>
          <View style={{backgroundColor:'#f7f7f7'}}>
            <View style={styles.formatInput}> 
              <TextInput
                style={styles.textInput}
                placeholder="Upload Your Resume"
              />
            </View>
            <View style={styles.formatInput}>
              <TouchableOpacity style={styles.defaultButton}>
                <Text style={[styles.buttonText,{color:'#f7f7f7'}]}>
                  Upload
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
    marginTop: 10,
    padding: 70,
  },
  textInput:{
    padding: 50,
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
    marginTop:-70
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    Color: '#fff',
    fontWeight: 'bold',
  }
});

export default Resume;
