import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainFeedBack from '../screens/feedback/MainFeedBack';
import AboutApp from '../screens/feedback/AboutApp';
import StudentsFeedBack from '../screens/feedback/StudentsFeedBack';
import BasicInformation from '../screens/profile/BasicInformation';
import Resume from '../screens/profile/Resume';
import AcademicAchievements from '../screens/profile/AcademicAchievements';
import SocialMediaLinks from '../screens/profile/SocialMediaLinks';
import ContactNumbers from '../screens/MoreScreens/ContactNumbers';
import Guidline from '../screens/MoreScreens/Guidline';
import MainProfile from "../screens/profile/MainProfile";
import MainMore from "../screens/MoreScreens/MainMoreScreen";
import AboutUs from "../screens/MoreScreens/AboutUs";

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainProfile"
      screenOptions={{
        headerTransparent: true
    }}
      >
        <Stack.Screen name="MainProfile" component={MainProfile} 
          options={{title: ''}}
        />
      <Stack.Screen name="BasicInformation" component={BasicInformation} 
          options={{ 
            title: 'Profile',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Resume" component={Resume} 
          options={{ 
            title: 'Resume',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="AcademicAchievements" component={AcademicAchievements} 
          options={{ 
            title: 'Your Achievements',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="SocialMediaLinks" component={SocialMediaLinks} 
          options={{ 
            title: 'Social Media Links',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
    </Stack.Navigator>
  );
}

const FeedBackStackNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="MainFeedBack"
        screenOptions={{
          headerTransparent: true
      }}
        >
        <Stack.Screen name="MainFeedBack" component={MainFeedBack} 
          options={{title: ''}}
        />
        <Stack.Screen name="AboutApp" component={AboutApp} 
          options={{ 
            title: 'Rate us',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="StudentsFeedBack" component={StudentsFeedBack} 
          options={{ 
            title: 'Students FeedBack',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    );
  }

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="MainMore"
      screenOptions={{
        headerTransparent: true
    }}
      >
        <Stack.Screen name="MainMore" component={MainMore} 
          options={{ 
            title: '',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="AboutUs" component={AboutUs} 
          options={{ 
            title: 'About Us',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Guidline" component={Guidline} 
          options={{ 
            title: 'Guidlines',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="ContactNumbers" component={ContactNumbers} 
          options={{ 
            title: 'Contact Numbers',
            headerTintColor: 'white',
            headerTitleStyle: { 
              color:'#f7f7f7',
              fontSize:20 
            },
            headerTitleAlign: 'center',
          }}
        />
    </Stack.Navigator>
  );
}

export { ProfileStackNavigator, FeedBackStackNavigator, MoreStackNavigator };