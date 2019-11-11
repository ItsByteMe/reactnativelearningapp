import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LinearGradient } from "expo-linear-gradient";

import Logo from '../images/login/Logo.svg'
import Mail from '../images/login/Mail.svg'
import Key from '../images/login/Key.svg'
import Background from '../images/login/bg.png'
import SvgUri from 'react-native-svg-uri';


const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ImageBackground source={Background} style = { styles.background_image }>
        <View style={styles.container}>

            <View style = {styles.title_container}>
              <SvgUri width = "250" height = "67" source = {Logo} />
            </View>

            <View style = {styles.motto_container}>
              <Text style = {styles.motto_text_style}> Be a New you.</Text>
              <Text style = {styles.motto_text_style}> Be World class.</Text> 
            </View>
          
            <View style = {{flex: 1, flexDirection: "row", }}>
            <SvgUri style = {{ zIndex: 0, position: "absolute", paddingTop: 23, paddingLeft: 23 }} width = "13" height = "13" source = {Mail} />
            <TextInput placeholder="                Email" style={styles.input_field} />
            </View>

            <View style = {{flex: 1, flexDirection: "row"}}>
            <SvgUri style = {{ zIndex: 0, position: "absolute", paddingTop: 23, paddingLeft: 23 }} width = "13" height = "13" source = {Key} />
            <TextInput placeholder="                Password" style={styles.input_field} />
            </View>

            <TouchableOpacity style={styles.login_button_style} onPress={() => this.props.navigation.navigate("view_courses")} >
              <Text style={styles.button_text_style}> Login </Text>
            </TouchableOpacity>

            <View style={{flex: 1}}>
              <Text style={styles.forgot_pass}>Forgot password?</Text>
            </View>

            <TouchableOpacity style={styles.register_button_style} onPress={() => this.props.navigation.navigate("register")} >
              <Text style={styles.button_text_style}> Register new Account </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.sbumit_button_style} onPress={() => this.props.navigation.navigate("view_courses")} >
              <Text style={styles.text_style}> View courses </Text>
            </TouchableOpacity> */}

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background_image: {
    width: '100%',
    height: '100%',
    flex: 1 
  },

  container: {
    flex: 1,
    //justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#09121C",
    width: "91%",
    height: "91%",
    borderBottomRightRadius: 24,
  },
  
  title_container: {
    marginLeft: 15,
    marginTop: 50,
    marginBottom: 50,
    alignSelf: "flex-start",
  },

  motto_text_style: {
    // width: 195,
    // height: 68,
    fontSize: 27,
    color: "white",
    fontFamily: "serif",
  },

  motto_container: {
    alignSelf: "flex-start",
    // width: "50%",
    // height: "25%",
    marginBottom: 75,
    marginLeft: 40,
  },

  login_button_style: {
    backgroundColor: "#3369FF",
    elevation: 10,
    shadowColor: "#336996",
    width: 276,
    height: 51,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "#3369FF",
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 10,
  },

  register_button_style: {
    backgroundColor: "#FF334B",
    elevation: 10,
    shadowColor: "#FF334B",
    width: 276,
    height: 51,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "#FF334B",
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 20
  },

  button_text_style: {
    textAlign: "center",
    //marginTop: 12,
    color: "white",
    fontFamily: "Roboto",
    //fontStyle: "Normal",
    fontSize: 16,
  },

  text_input_style: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderBottomWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 16,
    borderBottomColor: "gray",
    marginBottom: 30
  },

  input_field: {
    width: 276,
    height: 58,
    //backgroundColor: "#09121C",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 16,
    borderBottomEndRadius: 0,
    fontFamily: "Roboto",
    fontSize: 14,
    marginBottom: 16,
    color: "white"
  },

  forgot_pass: {
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: 24,
    textDecorationLine: "underline",
    color: "#898F97"
  }
});
