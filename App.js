import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashSam from './src/Screens/FlashSam';
import OnboardingScreen from './src/Screens/OnboardingScreen';
import LoginScreen from './src/Screens/LoginScreen';
import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';

import SignupScreen from './src/Screens/SignupScreen';
import SendOtpScreen from './src/Screens/SendOtpScreen';
import ResetPassword from './src/Screens/ResetPassword';
import HomeScreen from './src/Screens/Home/HomeScreen';
import SeeMore from './src/Screens/Home/SeeMore';
import FilterScreen from './src/Screens/Home/FilterScreen';
import FinanceInvesting from './src/Screens/Home/CategorieScreens/FinanceInvesting';
import Education_Academics from './src/Screens/Home/CategorieScreens/Education_Academics';
import PersonalDevelopment from './src/Screens/Home/CategorieScreens/PersonalDevelopment';
import Entrepreneurship from './src/Screens/Home/CategorieScreens/Entrepreneurship';
import LeadershipManagement from './src/Screens/Home/CategorieScreens/LeadershipManagement';
import Technology_Coding from './src/Screens/Home/CategorieScreens/Technology_Coding';
import Arts_Design from './src/Screens/Home/CategorieScreens/Arts_Design';
import Health_Wellness from './src/Screens/Home/CategorieScreens/Health_Wellness';
import PaymentScreen from './src/Screens/PaymentScreen';
import AppSetting from './src/Screens/AppSetting';
import AppSettingScreen from './src/Screens/AppSettingScreen';
import MeetingHistory from './src/Screens/MeetingHistory';
import NotificationScreen from './src/Screens/BookSlot';
import Account from './src/Screens/Account';
import Profilepage from './src/Screens/Profilepage';
import BookSlot from './src/Screens/BookSlot';
import BookConfirm from './src/Screens/BookConfirm';
import ChatScreen from './src/Screens/ChatScreen';
import Help_Support from './src/Screens/Help_Support';
import ProfileSetuppage from './src/Screens/ProfileSetuppage';
import Profilesetup1 from './src/Screens/Profilesetup1';
import ChatScreenFirst from './src/Screens/ChatScreenFirst';
import AboutusScreen from './src/Screens/AboutusScreen';
import NotificationFooter from './src/Screens/NotificationFooter';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlashSam">
        <Stack.Screen
          name="FlashSam"
          component={FlashSam}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homescreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Send"
          component={SendOtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Seemore"
          component={SeeMore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FinanceInvesting"
          component={FinanceInvesting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Education_Academics"
          component={Education_Academics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Health_Wellness"
          component={Health_Wellness}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Arts_Design"
          component={Arts_Design}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Technology_Coding"
          component={Technology_Coding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeadershipManagement"
          component={LeadershipManagement}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Entrepreneurship"
          component={Entrepreneurship}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalDevelopment"
          component={PersonalDevelopment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="appsetting"
          component={AppSetting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="appsettingScreen"
          component={AppSettingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mtHystory"
          component={MeetingHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="accountSetting"
          component={Account}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilePage"
          component={Profilepage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bookSlot"
          component={BookSlot}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="bookconfirm"
          component={BookConfirm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="chatScreen"
          component={ChatScreenFirst}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="helpSupport"
          component={Help_Support}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profilSetup"
          component={Profilesetup1}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="aboutUs"
          component={AboutusScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="notificationFooter"
          component={NotificationFooter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
