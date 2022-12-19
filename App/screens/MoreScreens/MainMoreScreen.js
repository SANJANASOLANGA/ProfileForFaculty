import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import ProfileBG from '../../components/ProfileBG';
import ProfileButton from '../../components/ProfileButton';

const MainMore = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const onPresAboutUs = () => {
    navigation.navigate('AboutUs')
  }
  const onPresContactNo = () => {
    navigation.navigate('ContactNumbers')
  }
  const onPressGuildlines = () => {
    navigation.navigate('Guidline')
  }

  return (
    <View style={styles.container}>
      <ProfileBG />
      <ScrollView style={{ backgroundColor: '#f7f7f7' }}>
        <ProfileButton
          buttonText="About Us"
          buttonText2="About Us"
          buttonClick={onPresAboutUs}
        />
        <ProfileButton
          buttonText="Contact Numbers"
          buttonText2="Find Contact Numbers"
          buttonClick={onPresContactNo}
        />
        <ProfileButton
          buttonText="Guildlines"
          buttonText2="Get help to use this app"
          buttonClick={onPressGuildlines}
        />
        <TouchableOpacity onPress={() => logout()}>
          <View style={styles.buttonBorder}>
            <Text style={styles.buttonText}>Logout</Text>
          </View>
        </TouchableOpacity>
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
    fontFamily: 'Roboto-Medium'
  },
  buttonBorder:{
    borderColor:'#e3d2d1',
    height:72,
    borderWidth:2,
    borderRadius:20,
    margin:30,
    marginTop:0,
    marginBottom:30,
    justifyContent:'center',
    backgroundColor: '#941824', 
    color: 'white'
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default MainMore;