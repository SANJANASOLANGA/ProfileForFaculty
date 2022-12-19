import React, { useState } from 'react';
import { Alert, ScrollView, TextInput, TouchableWithoutFeedback, Animated, StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileBG from '../../components/ProfileBG'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function AboutApp() {
  const [starRating, setStarRating] = useState(null);

  const animatedButtonScale = new Animated.Value(1);

  const [com, setCom] = useState('');

  const onPressSubmit = async () => {
    let user = auth().currentUser;
    let email = user.email
    if (com == '') {
      Alert.alert('Please give us your feedback !')
    }else{
      await firestore()
      .collection('Users')
      .doc(email)
      .update({
        AppComment: com,
      })
      .then(() => {
        Alert.alert(
          "Thank you for your feedback!"
        );
      });
      setCom('')
    }
  }

  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.5,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };

  return (
      
      <View style={styles.container}>
        <ProfileBG/>
        <ScrollView>
        <View style={{backgroundColor:'#f7f7f7'}}>
        <Text style={styles.heading}>{starRating ? `${starRating}` : 'Please rate your experience'}</Text>
        <View style={styles.stars}>
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(1)}
          >
            <Animated.View style={animatedScaleStyle}>            
              <Icon
                name={starRating >= 1 ? 'star' : 'star-outline'}
                size={32}
                style={starRating >= 1 ? styles.starSelected : styles.starUnselected}
              />
            </Animated.View>
          </TouchableWithoutFeedback >
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(2)}
          >
            <Animated.View style={animatedScaleStyle}>
              <Icon
                name={starRating >= 2 ? 'star' : 'star-outline'}
                size={32}
                style={starRating >= 2 ? styles.starSelected : styles.starUnselected}
              />
            </Animated.View>
          </TouchableWithoutFeedback >
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(3)}
          >
            <Animated.View style={animatedScaleStyle}>
              <Icon
                name={starRating >= 3 ? 'star' : 'star-outline'}
                size={32}
                style={starRating >= 3 ? styles.starSelected : styles.starUnselected}
              />
            </Animated.View>
          </TouchableWithoutFeedback >
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(4)}
          >
            <Animated.View style={animatedScaleStyle}>
              <Icon
                name={starRating >= 4 ? 'star' : 'star-outline'}
                size={32}
                style={starRating >= 4 ? styles.starSelected : styles.starUnselected}
              />
            </Animated.View>
          </TouchableWithoutFeedback >
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => setStarRating(5)}
          >
            <Animated.View style={animatedScaleStyle}>
            <Icon
              name={starRating >= 5 ? 'star' : 'star-outline'}
              size={32}
              style={starRating >= 5 ? styles.starSelected : styles.starUnselected}
            />
            </Animated.View>
          </TouchableWithoutFeedback >
        </View>
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
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    fontFamily:'Roboto-Medium'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:1,
    color:'#3b3305',
    alignSelf: 'center',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    marginTop:-10,
    alignSelf: 'center',
  },
  starUnselected: {
    color: '#aaa',
  },
  starSelected: {
    color: '#ffb300',
  },
  textInput:{
    padding: 70,
    frontSize: 20,
    borderWidth: 1,
    borderColor: '#a7a7a7',
    borderRadius: 7,
    marginBottom:15,
    width: '90%',
    alignSelf: 'center',
  },
  defaultButton:{
    padding: 15,
    backgroundColor: '#941824',
    borderRadius: 10,
    color:'white',
    marginLeft:18,
    marginRight:18
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


