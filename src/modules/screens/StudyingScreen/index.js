import React, { Component, useEffect, useState } from "react";
import {View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,} from 'react-native';


export default  StudyingScreen=(props)=> {
    console.log("StudyingScreen is rendering !!!!")
	
    return (
        <View style={{flex:1}}>
        <SafeAreaView>
          <Text style={{fontSize:20, color:'black'}}>
            StudyingScreen
          </Text>
        </SafeAreaView> 
      </View>
    );

    
}
