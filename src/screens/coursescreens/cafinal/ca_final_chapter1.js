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
import Ca_final_chapter2 from "./ca_final_chapter2";

import Logo from './Logo.svg'
import SvgUri from 'react-native-svg-uri';
import Background from './browsetopics2/bg.png'

const lecture_details = [
    {
      lecture_name: "Lecture One",
      video_link: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_2MB.mp4",
      thumbnail: "https://i1.ytimg.com/vi/1vrEljMfXYo/default.jpg",
      instructor: "Arun"
    },
  
    {
      lecture_name: "Lecture Two",
      video_link: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_1MB.mp4",
      thumbnail: "https://i1.ytimg.com/vi/87gWaABqGYs/default.jpg",
      instructor: "Arun"
    },
    {
      lecture_name: "Lecture Three",
      video_link: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_1MB.mp4",
      thumbnail: "https://i1.ytimg.com/vi/87gWaABqGYs/default.jpg",
      instructor: "Arun"
    },
    {
      lecture_name: "Lecture Four",
      video_link: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_1MB.mp4",
      thumbnail: "https://i1.ytimg.com/vi/87gWaABqGYs/default.jpg",
      instructor: "Arun"
    },
]



export default function Ca_final_chapter1(props) {

    const playlist = lecture_details.map(function(lecture, index, arr) {
        return (
          <TouchableOpacity key={index+'kumar'} onPress={() =>{props.navigation.navigate("play_video", {link:lecture.video_link, lecture:lecture.lecture_name})}} style={styles.course_item} >
            <Image source={{ uri: lecture.thumbnail }} style={styles.img_style} />
            <Text style={styles.course_name_style}> {lecture.lecture_name}</Text>
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
        textAlignVertical: "center"
      },
    
      course_name_style: {
        textAlign: "center",
        fontSize: 24,
        // fontWeight: "bold",
        textAlignVertical: "center",
        marginLeft: 30
      },
      scroll_view_style: {
        padding: 10,
        backgroundColor: "#09121C"
      },
      course_item: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        marginBottom: 10,
        backgroundColor: "#f1f3f4",
        height: 60,
        borderRadius: 5,
        alignItems: "center"
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
    });
    
    
    Ca_final_chapter1.navigationOptions = ({navigation})=>{
      return{
         // title:"CA Final: Chapter 1",
          header: null,
      }
    }

