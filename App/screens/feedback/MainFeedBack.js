import React from 'react';
import { View, StyleSheet, Image, ScrollView} from 'react-native';
import ProfileBG from '../../components/ProfileBG';
import ProfileButton from '../../components/ProfileButton';

const MainFeedBack = ({navigation}) => {

  const onPresRate=()=>{
    console.log('pressed')
    navigation.navigate('AboutApp')
  }
  const onPressStdFeedBack=()=>{
    console.log('pressed')
    navigation.navigate('StudentsFeedBack')
  }
    return (
      <View style={styles.container}>
        <ProfileBG/>
        <ScrollView style={{backgroundColor:'#f7f7f7'}}>
          <ProfileButton
            buttonText = "Rate Us"
            buttonText2 = "Please rate your experience"
            buttonClick = {onPresRate}
          />
          <ProfileButton
            buttonText = "Students FeedBack"
            buttonText2 = "Leave a comment about your experience"
            buttonClick = {onPressStdFeedBack}
          />
        </ScrollView>
      </View>
    );
  }

export default MainFeedBack

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    justifyContent: 'flex-start',
    fontFamily:'Roboto-Medium'
  }
});