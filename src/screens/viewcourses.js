import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import courses from "../components/courses";
import { LinearGradient } from "expo-linear-gradient";
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";

import Logo from '../images/Logo.svg'
import SvgUri from 'react-native-svg-uri';

const styles = StyleSheet.create({
  course_style: {
    width: 147,
    height: 122,
    marginBottom: 16,
    marginLeft:16,
    backgroundColor: "#19232F",
    borderRadius: 16,
    borderBottomEndRadius: 0,
  },
  course_text_style: {
    fontFamily: "Roboto",
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    width: 115,
    height: 48,
    borderRadius: 10,
    margin: 16,
    marginTop: 0,
    marginBottom: 18,
    textAlign: "left",
    textAlignVertical: "bottom"
  },
  color_blob: {
    height: 24,
    width: 24,
    margin: 16,
    //borderColor: "transparent",
    borderRadius: 8,
    borderBottomRightRadius: 0,
  },
  logo_container: {
    marginLeft: 33,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#09121C"
  },
  greeting_container: {
    marginVertical: 43,
    marginHorizontal: 33,
  },
  greeting_text: {
    color: "white",
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  all_courses_container: {
    marginHorizontal: 33,

  },
  all_courses_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    color: "white"
  }
});

export default function Viewcourse(props) {
  const course_elements = courses.map(function(
    course,
    index,
    arr
  ) {
    return (
      <TouchableOpacity key={index + "arun"} style={styles.course_style} onPress={() => props.navigation.navigate(course.slug, {c_name:course.name})} >
        <View style = {{flex: 1, overflow: 'hidden', borderRadius:8, borderBottomEndRadius: 0}}>
          <LinearGradient style = {styles.color_blob} colors={['#4BC0C8', '#FEAC5E']}></LinearGradient>
        </View>
        <Text style={styles.course_text_style}>{course.name}</Text>
      </TouchableOpacity>
    );
  });
  return (
      <ScrollView style = {{backgroundColor: "#09121C"}}>
        <View style = {styles.logo_container}>
          <SvgUri width = "66" height = "66" source = {Logo} />
          <View style = {styles.greeting_container}>
            <Text style = {styles.greeting_text}>Hello,</Text>
            <Text style = {styles.greeting_text}>Samantha!</Text>
          </View>
          <View style = {styles.all_courses_container}>
            <Text style = {styles.all_courses_text}>All courses</Text>
          </View>
        </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop:20,
          backgroundColor: "#09121C"
        }}
      >
        {course_elements}
      </View>
      </ScrollView>
  );
}

Viewcourse.navigationOptions = ({navigation})=>{
  return  {
      header: null,
  }
}