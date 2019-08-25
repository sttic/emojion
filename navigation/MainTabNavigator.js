import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DemoScreen from '../screens/DemoScreen';
import ChatScreen from '../screens/ChatScreen';
import MsgScreen from '../screens/MsgScreen';
import TrendsScreen from '../screens/TrendsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    MsgSent: MsgScreen,
    Trends: TrendsScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'App',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-apps'
          : 'md-apps'
      }
    />
  ),
};

HomeStack.path = '';

const DemoStack = createStackNavigator(
  {
    Demo: DemoScreen,
  },
  config
);

DemoStack.navigationOptions = {
  tabBarLabel: 'Demo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};

DemoStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  DemoStack
});

tabNavigator.path = '';

export default tabNavigator;
