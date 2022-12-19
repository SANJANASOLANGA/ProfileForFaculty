import React, { Component } from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import ProfileBG from '../../components/ProfileBG';
export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ProfileBG/>
        <ScrollView style={{backgroundColor:'#f7f7f7'}}>
          <View style={styles.contain}>
        <View>

          <Text style={styles.tittle}>About Us</Text>
        
          <Text style={styles.text}> We are a group of second year students studying in the Department of Information
                and Communication Technology of the Faculty of Humanities and Social Sciences 
                of the University of Sri Jayawardenepura, have created this application targeting 
                all students of the Faculty of Humanities and Social Sciences of the University of 
                Sri Jayewardenepura. We have created this application to collect the outstanding achievements and academic achievements 
              of all the students of the Faculty of Humanities and Social Sciences during their studies and 
              maintain them as a profile through mobile technology.</Text>
              <Text style={[styles.tittle,{fontSize:20, marginTop:12}]}>Team Members</Text>
              <Text style={[styles.text,{marginTop:-15}]}>
                S.A.D.S. Sanjana - AF/19/15888 {'\n'}T. W. K. K. Nayanamadu - AF/19/15098
                {'\n'} K. D. C. Kulasooriya - AF/19/15211{'\n'}R. W. M. W. Rajapaksha - AF/19/15831
              </Text>
          </View> 
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    justifyContent: 'flex-start'
  },
  tittle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    color: '#9c390b',
    fontWeight: 'bold',
    fontFamily:'Poppins-Medium'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#1a0701',
    fontFamily:'Poppins-Medium'
  },
});