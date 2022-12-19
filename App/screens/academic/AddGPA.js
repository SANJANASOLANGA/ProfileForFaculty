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

const AddGPA = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.defaultBg}
            resizeMode={'stretch'}
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
            Evaluation of GPA
          </Text>
        </TouchableOpacity>
        <View style={styles.formatInput}>

        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'left',
              fontSize: 25,
              fontWeight:'500',
              marginLeft:5
            }}>
               Current GPA
          </Text>

        <View style={styles.formatInput}>

        <View style={styles.formatInput}> 
          <TextInput style={styles.textInput} placeholder="add your current GPA value " /> 
        </View>

        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'left',
              fontSize: 25,
              fontWeight: '500',
              marginLeft:5
            }}>
               For maximum GPA
          </Text>

        <View style={styles.formatInput}>

        <View style={styles.formatInput}> 
          <TextInput style={styles.textInput} placeholder=" " /> 
        </View>

        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 18,
              fontWeight:'250',
            }}>
               Go to suggestions for tips on how to get a high GPA
          </Text>

        
        <View style={styles.formatInput}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}></View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d9c7',
  },
  defaultBg: {
    width: '100%',
    height: 220,
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
  
});

export default AddGPA;
