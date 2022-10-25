import React, { Component, useEffect, useState } from "react";
import {View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,} from 'react-native';


export default function HomeScreen(props) {
    console.log("HomeScreen is rendering !!!!")
	
    return (
        <View style={{backgroundColor:'red',flex:1}}>
        <SafeAreaView>
          <Text>
            HomeScreen
          </Text>
        </SafeAreaView> 
      </View>
    );

    
}
