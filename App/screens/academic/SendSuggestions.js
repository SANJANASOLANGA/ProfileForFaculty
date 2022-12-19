import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SendSuggestions= () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.defaultBg}
            resizeMode={'cover'}
            source={require('../../assets/Images/newTag.jpeg')}
          />
        </View>
        <View style={{backgroundColor:'#f7f7f7'}}>
        <TouchableOpacity>
          <Text
            style={{
              color: '#9c390b',
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Suggestions
          </Text>
        </TouchableOpacity>
        <View style={styles.formatInput}>

        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 22,
              fontWeight:'250',
            }}>
               You will receive the necessary suggestions through the faculty mail. If you want to receive your suggestions through your personal mail, add in the column below.
          </Text>

        <View style={styles.formatInput}>

        <View style={styles.formatInput}> 
          <TextInput style={styles.textInput} placeholder="Add your e-mail address " /> 
        </View> 
        <View style={{marginBottom:8}}> 
        <TouchableOpacity style={styles.defaultButton}>
          
          <Text
            style={styles.button}>
            Submit 
          </Text>
        </TouchableOpacity></View> 
        </View>
        <View style={styles.formatInput}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultBg: {
    width: '100%',
    height: 220,
  },
  defaultButton:{
    backgroundColor: '#e69b05',
    borderRadius: 10,
    marginBottom:20,
    fontSize: 20,
    marginLeft:10,
    marginRight:10
  },
  formatInput:{
    marginTop: 6,
    padding: 10,
  },
  textInput:{
    padding: 10,
    frontSize: 16,
    borderWidth: 3,
    borderColor: '#a7a7a7',
    borderRadius: 7,
  },
  button:{
    textAlign: 'center',
    fontSize: 16,
    Color: '#8a1f11',
    fontWeight: 'bold',
    marginBottom:15,
    justifyContent:'center',
    marginTop:15
  }  
});

export default SendSuggestions;