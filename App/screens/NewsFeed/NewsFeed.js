import React, { useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ImageBackground, StyleSheet, Text, Image, View,} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const NewsFeed = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const getNews = async() => {
    const subscriber = firestore()
      .collection('News')
      .onSnapshot(querySnapshot => {
        const users = [];
        console.log('querySnapshot' + querySnapshot);
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
      });

  // Unsubscribe from events when no longer in use
  return () => subscriber();
  }

  useEffect(() => {
    startLoading()
    getNews()
  }, []);
  
  return (
      <View style={styles.container}>
        { loading ?
          <ActivityIndicator size="large" color="#e3d2d1" 
           style={{
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
          /> :
        <View>
        <ImageBackground
          style={styles.defaultBg}
          resizeMode={'cover'}
          source={require('../../assets/Images/newTag.jpeg')}
        />
        <View style={{backgroundColor:'#f7f7f7'}}>
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <View style={styles.formatInput}>
                <Text style={styles.cardMainText}>{item.title}</Text>
                <Image
                  source={{uri:item.img}}
                  style={styles.cardImage}
                >
                </Image>
                <Text style={styles.cardText}>{item.body}</Text>
                
              </View>
            )}
          />
        </View>
        </View>}
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'Roboto-Medium'
  },
  defaultBg: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  formatInput:{
    marginTop: 7,
    padding: 7,
  },
  cardText: {
    fontSize: 14,
    padding: 10,
    backgroundColor: '#DDDDDD',
    color: '#000000',
    textAlign: 'justify',
    letterSpacing:0.5,
    fontFamily:'Poppins-Medium'
  },
  cardMainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    padding: 10,
    textAlign:'center',
    marginTop: 7,
    fontFamily:'Poppins-Medium'
  },
  cardImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  }
});

export default NewsFeed;