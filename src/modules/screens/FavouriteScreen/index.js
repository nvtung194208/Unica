import React, { Component, useEffect, useState } from "react";
import {View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,} from 'react-native';


export default function FavouriteScreen(props) {
    console.log("FavouriteScreen is rendering !!!!")
	
    return (
      
        <SafeAreaView>
          <Text style={{fontSize:20, color:'black'}}>
            FavouriteScreen
          </Text>
        </SafeAreaView> 
      
    );

    
}
