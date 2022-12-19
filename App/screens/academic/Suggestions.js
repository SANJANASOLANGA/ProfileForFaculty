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

const Suggestions= () => {
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
            How to raise your GPA
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
            Avoid classes you don't need.
          </Text>

        <View style={styles.formatInput}>
        
        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 22,
              fontWeight:'250',
            }}>
            Meet with a tutor.
          </Text>

        <View style={styles.formatInput}>

        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 22,
              fontWeight:'250',
            }}>
            Set goals for yourself.
          </Text>

        <View style={styles.formatInput}>
        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 22,
              fontWeight:'250',
            }}>
            Turn in assignments on time.
          </Text>

        <View style={styles.formatInput}>
        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 22,
              fontWeight:'250',
            }}>
            Study topics as you go.
          </Text>

        <View style={styles.formatInput}>
        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 22,
              fontWeight:'250',
            }}>
           Ask questions during class.
          </Text>

        <View style={styles.formatInput}>
        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 22,
              fontWeight:'250',
            }}>
            Use educational resources.
          </Text>

        <View style={styles.formatInput}>
        </View>
          <Text
            style={{
              color: '#1a0701',
              textAlign: 'center',
              fontSize: 22,
              fontWeight:'250',
            }}>
            Keep everything organized.
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
  },
  defaultBg: {
    width: '100%',
    height: 220,
  },
  defaultButton:{
    padding: 10,
    backgroundColor: '#e69b05',
    borderRadius: 10,
    marginTop: 50,
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

export default Suggestions;

