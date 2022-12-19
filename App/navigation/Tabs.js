import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsFeed from '../screens/NewsFeed/NewsFeed';
import { ProfileStackNavigator, FeedBackStackNavigator, MoreStackNavigator } from './AppStack';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'News') {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === 'Profile') {
              iconName = focused ? "person-circle-sharp" :"person-circle-outline";
            }else if (route.name === 'FeedBack') {
              iconName = focused ? 'receipt-sharp' : 'receipt-outline';
            }else if (route.name === 'More') {
              iconName = focused ? 'menu' : 'menu-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#c1282d',
          tabBarInactiveTintColor: '#666565',
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarStyle: [
            {
              height: 70,
              backgroundColor: '#f7f7f7'
            },
            null
          ],
        })}
      >
        <Tab.Screen name="News" component={NewsFeed} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        <Tab.Screen name="FeedBack" component={FeedBackStackNavigator} />
        <Tab.Screen name="More" component={MoreStackNavigator} />
      </Tab.Navigator>
  );
}