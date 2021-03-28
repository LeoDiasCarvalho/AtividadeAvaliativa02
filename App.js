import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WebView} from 'react-native-webview';


const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="React" component={RN}></Tab.Screen>
        <Tab.Screen name="Java" component={Java}></Tab.Screen>
        <Tab.Screen name="PHP" component={PHP}></Tab.Screen>
        <Tab.Screen name="JavaScript" component={JS}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function RN(){
  return(
  <WebView style={{flex:1}} javaScriptEnabled={true} source={{uri:'https://youtu.be/_LWqxH8EHK0'}}></WebView>
  );
}

function Java(){
  return(
  <WebView style={{flex:1}} javaScriptEnabled={true} source={{uri:'https://youtu.be/Wo6bQ6HdU1s'}}></WebView>
  );
}

function PHP(){
  return(
    <WebView style={{flex:1}} javaScriptEnabled={true} source={{uri:'https://youtu.be/3tJII8D4Fs0'}}></WebView>
  );
}

function JS(){
  return(
    <WebView style={{flex:1}} javaScriptEnabled={true} source={{uri:'https://youtu.be/BXqUH86F-kA'}}></WebView>
  );
}