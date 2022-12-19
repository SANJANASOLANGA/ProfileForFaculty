import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from '../screens/auth/FirstScreen'
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassWord from '../screens/auth/ForgetPassWord';
import Tabs from './Tabs';
import DetailsProfile from '../screens/auth/DetailsProfile';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerTransparent: true
    }}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} 
        options={{ headerShown: false}}
        />
        <Stack.Screen name="DetailsProfile" component={DetailsProfile} options={{ headerShown: false}} />
        <Stack.Screen name="ForgetPassWord" component={ForgetPassWord} options={{title: 'Forget Password'}}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false}} />
      </Stack.Navigator>
  );
}

export default AuthNavigation;
