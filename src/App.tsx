import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-svg';
import { IMAGESAPP, COLORS } from '../src/constants'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import { Routes } from './routes';


export function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: "#000"
  },
  logoApp: {
    width: 100,
    height: 100,
  }
});
