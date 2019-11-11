import React, { Component, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Logo from './Logo.svg'
import Mic from './browsetopics1/Mic.svg'
import SvgUri from 'react-native-svg-uri';
import Background from './browsetopics1/bg.png'

const course_details = [
  {
    chapter_name: "Chapter 1",
    chapter_link: "ca_final_chapter1",
  },

  {
    chapter_name: "Chapter 2",
    chapter_link: "ca_final_chapter2",
  },
  {
    chapter_name: "Chapter 3",
    chapter_link: "ca_final_chaper3",
  },
  {
    chapter_name: "Chapter 4",
    chapter_link: "ca_final_chapter4",
   
  },
  {
    chapter_name: "Chapter 5",
    chapter_link: "ca_final_chapter5",
  },

];

export default function CaFinal(props) {

  const playlist = course_details.map(function(chapter, index, arr) {
    return (
      
        <TouchableOpacity key={index+'kumar'} onPress={() =>{props.navigation.navigate(chapter.chapter_link, {link:chapter.chapter_link, chapter:chapter.chapter_name})}} style={styles.course_item} >
          <ImageBackground source={Background} style = { styles.background_image }>
            <Text style={styles.course_name_style}> {chapter.chapter_name}</Text>
            <View style = {styles.chapter_stats}>
              <SvgUri style = {{}} width = "12" height = "16" source = {Mic} />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      
    );
  });

  return (
    <ScrollView style={styles.scroll_view_style}>
      <View style = {styles.logo_container}>
          <SvgUri width = "66" height = "66" source = {Logo} />
      </View>
      {playlist}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title_style: {
    textAlign: "center",
    color: "purple",
    fontSize: 22,
    fontWeight: "bold",
    textAlignVertical: "center",
    backgroundColor: "#09121C"
  },

  course_name_style: {
    fontFamily: "Roboto",
    color: "white",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "right",
    // marginLeft: 32,
    // marginTop: 24,
    justifyContent: "center"
  },
  scroll_view_style: {
    padding: 10,
    backgroundColor: "#09121C"
  },
  course_item: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginBottom: 19,
    backgroundColor: "transparent",
    height: 145,
    width: 308,
    borderRadius: 24,
    borderBottomEndRadius: 0,
    alignItems: "center",
    justifyContent:'center',
    marginHorizontal: 33,
  },
  img_style: {
    width: 50,
    height: 50,
    marginLeft: 10
  }, 
  logo_container: {
    marginLeft: 33,
    marginTop: 50, 
    marginBottom: 50,
    backgroundColor: "#09121C"
  },
  background_image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  chapter_stats: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    //alignSelf: "flex-end"
    left: 152,
    top: 102
  }
});



CaFinal.navigationOptions = ({navigation})=>{
  return{
      // title:"CA Final chapter list"
      header: null,
  }
}