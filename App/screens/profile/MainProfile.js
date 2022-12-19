import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import ProfileBG from '../../components/ProfileBG';
import ProfileButton from '../../components/ProfileButton';

const MainProfile = ({ navigation }) => {

  const onPresBasicInfo = () => {
    console.log('pressed')
    navigation.navigate('BasicInformation')
  }
  const onPressResume = () => {
    console.log('pressed')
    navigation.navigate('Resume')
  }
  const onPresAchievement = () => {
    console.log('pressed')
    navigation.navigate('AcademicAchievements')
  }
  const onPresSocialMediaLinks = () => {
    console.log('pressed')
    navigation.navigate('SocialMediaLinks')
  }

  return (
    <View style={styles.container}>
      <ProfileBG/>
      <ScrollView style={{ backgroundColor: '#f7f7f7' }}>
        <ProfileButton
          buttonText = "Profile"
          buttonText2 = "View Your Profile"
          buttonClick = {onPresBasicInfo}
        />
        <ProfileButton
          buttonText = "Resume"
          buttonText2 = "Upload Your Resume"
          buttonClick = {onPressResume}
        />
        <ProfileButton
          buttonText = "Your Achievements"
          buttonText2 = "Upload Your Achievements"
          buttonClick = {onPresAchievement}
        />
        <ProfileButton
          buttonText = "Social Media Links"
          buttonText2 = "Upload Your Social Media Links"
          buttonClick = {onPresSocialMediaLinks}
        />
      </ScrollView>
    </View>
  );
}

export default MainProfile;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    fontFamily: 'Roboto-Medium'
  }
});