import React,{Component} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import AuthButton from '../../components/AuthButton';
export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
  }

  onPressLogin=()=>{
    console.log('pressed login')
    this.props.navigation.navigate('Login')
  }

  onPressRegister=()=>{
    console.log('pressed register')
    this.props.navigation.navigate('Register')
  }

  render() {  
    return (
          <View>
            <ImageBackground
              style={styles.img}
              resizeMode={'cover'}
              source={require('../../assets/Images/AuthBG.jpg')}
            >
              <View style={styles.container}>
                <Text
                  style={styles.mainBanner}>
                  Faculty of Humanities and Social Sciences
                </Text>
            
                <Text
                  style={styles.sjpBanner}>
                  University of Sri Jayewardenepura
                </Text>
              </View>
              <View>
                <AuthButton
                  buttonText="Login"
                  buttonClick={this.onPressLogin}
                />
                <AuthButton
                  buttonText="Register"
                  buttonClick={this.onPressRegister}
                />
              </View>
        </ImageBackground>
        </View>
    );
  }}


const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems:'center'
  },
  img: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  mainBanner:{
    color: '#52020a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent:'center',
  },
  sjpBanner: {
    color: '#701d25',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});