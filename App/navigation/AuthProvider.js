import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch {
            console.log(e);
            Alert.alert("There is an error",e.message)
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);              
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            let user = auth().currentUser;
            console.log('currentUser is ' + user.email)
            if (user.email != null){
              user
              .delete()
              .then(() => 
                // console.log("User deleted")
                Alert.alert('Successfully Logged Out!')
                )
                .catch((e) => Alert.alert('Successfully Logged Out!'));
              // .catch((e) => Alert.alert('Try again after sometime'));
            }else{
              Alert.alert('Try again later')
            }
            
            await auth().signOut();
          } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
              Alert.alert('That email address is already in use!')
            }
        
            if (e.code === 'auth/invalid-email') {
              Alert.alert('That email address is invalid!')
            }
            console.error(e);
            Alert.alert('Try again after sometime')
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};