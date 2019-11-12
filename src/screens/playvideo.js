import React, { Component, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Video } from "expo-av";

import Background from '../images/podcast/BG.png'
import Author1 from '../images/podcast/Author1.png'
import Author2 from '../images/podcast/Author2.png'
import Pause from '../images/podcast/Pause.svg'
import Back from '../images/podcast/Back.svg'
import Forward from '../images/podcast/Forward.svg'

import Timeline from '../images/podcast/Timeline.svg'
import Like from '../images/podcast/Like.svg'
import Unlike from '../images/podcast/Unlike.svg'
import Episode from '../images/podcast/Episode.svg'
import Download from '../images/podcast/Download.svg'
import Play from '../images/podcast/Play.svg'
import Seperator from '../images/podcast/Seperator.svg'

import { ScrollView } from "react-native-gesture-handler";
import SvgUri from 'react-native-svg-uri';

export default function VideoPlayBack(props) {

    const [video_link, setLink]= useState(props.navigation.state.params.link)

    
  return (
    <ScrollView style = {{backgroundColor: '#19232F'}}>
      <View style = {{backgroundColor: '#09121C'}}>
        <ImageBackground source={Background} style = {styles.image_background}>
          <Text style = {styles.title_text}>About Flow and our motivations</Text>
          <Text style = {styles.authors_text}>John Doe and Amanda Smith</Text>
            <TouchableOpacity>
              <SvgUri width = "18" height = "18" source = {Back} style = {{position: "absolute", top: 270, left: 112}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgUri width = "51" height = "51" source = {Pause} style = {{position: "absolute", top: 254, left: 162}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgUri width = "18" height = "18" source = {Forward} style = {{position: "absolute", top: 270, left: 245}}/>
            </TouchableOpacity>
          <View style={styles.author_container}>
            <Image source = {Author1} style = {styles.author_style}></Image>
            <Image source = {Author2} style = {styles.author_style}></Image>
          </View>
        </ImageBackground>
        
        {/* <Video
          useNativeControls={true}
          source={{ uri: video_link }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: "100%", height: 400, backgroundColor: '#09121C' }}
        /> */}
      </View>
      <View style = {styles.bottom_container}>
        <SvgUri width = "375" height = "17" source = {Timeline} style = {{position: "absolute", top: 24, alignSelf: "center"}} />
        <View style = {styles.info_container}>
        
          <View style = {{display: "flex", flexDirection: "row"}}>
            <SvgUri width = "31" height = "31" source = {Like} />
            <Text style = {{fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: 12, color: "white", paddingTop: 5, marginLeft: 9}}>37 501</Text>
            <Text style = {{position: "absolute",  left: 135, paddingTop: 5, color: "white", fontSize: 14, fontWeight: "500"}}>24:15:05</Text>
            <Text style = {{position: "absolute", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: 12, color: "#898F97", paddingTop: 5, left: 265}}>37 501</Text>
            {/* <SvgUri width = "31" height = "31" source = {Unlike} style = {{position: "absolute", left: 310}} /> */}
          </View>
            
        </View>

        <SvgUri width = "309" height = "1" source = {Seperator} style = {{position: "absolute", top: 113, left: 33}} />

        <SvgUri width = "31" height = "31" source = {Episode} style = {{position: "absolute", top: 142, left: 33}} />
        <Text style = {{position: "absolute", left: 76, top: 148, color: "white", fontSize: 12, }}>Lecture 2</Text>

        <Text style={{width: 312, height: 88, position: "absolute", left: 33, top: 207, fontSize: 13, color: "#898F97"}}>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</Text>

        <Text style = {{color: "white", fontSize: 16, fontWeight: "500", position: "absolute", left: 33, top: 332}}>Episodes (10)</Text>

        <View style = {{backgroundColor: "#070D15", width: 310, height: 64, top: 369, left: 33, borderRadius: 8, borderBottomEndRadius: 0, marginBottom: 8}}>
          <TouchableOpacity style = {{position: "absolute", top: 16, left: 16}}>
            <SvgUri width = "32" height = "32" source = {Play} />
          </TouchableOpacity>
          <Text style = {{color: "white", fontSize: 14, left: "21%", top: "17%"}}>Episode 1</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", left: "21%", bottom: "17%"}}>23 May 2019</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "50%", alignItems: "center", textAlign: "right"}}>10:15:00</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "17%", alignItems: "center", textAlign: "right"}}>10mb</Text>
          <TouchableOpacity style = {{position: "absolute", top: 16, right: 16}}>
            <SvgUri width = "32" height = "32" source = {Download} />
          </TouchableOpacity>
        </View>

        <View style = {{backgroundColor: "#070D15", width: 310, height: 64, top: 369, left: 33, borderRadius: 8, borderBottomEndRadius: 0, marginBottom: 8}}>
          <TouchableOpacity style = {{position: "absolute", top: 16, left: 16}}>
            <SvgUri width = "32" height = "32" source = {Play} />
          </TouchableOpacity>
          <Text style = {{color: "white", fontSize: 14, left: "21%", top: "17%"}}>Episode 2</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", left: "21%", bottom: "17%"}}>23 May 2019</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "50%", alignItems: "center", textAlign: "right"}}>10:15:00</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "17%", alignItems: "center", textAlign: "right"}}>10mb</Text>
          <TouchableOpacity style = {{position: "absolute", top: 16, right: 16}}>
            <SvgUri width = "32" height = "32" source = {Download} />
          </TouchableOpacity>
        </View>

        <View style = {{backgroundColor: "#070D15", width: 310, height: 64, top: 369, left: 33, borderRadius: 8, borderBottomEndRadius: 0, marginBottom: 8}}>
          <TouchableOpacity style = {{position: "absolute", top: 16, left: 16}}>
            <SvgUri width = "32" height = "32" source = {Play} />
          </TouchableOpacity>
          <Text style = {{color: "white", fontSize: 14, left: "21%", top: "17%"}}>Episode 3</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", left: "21%", bottom: "17%"}}>23 May 2019</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "50%", alignItems: "center", textAlign: "right"}}>21:37:00</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "17%", alignItems: "center", textAlign: "right"}}>16mb</Text>
          <TouchableOpacity style = {{position: "absolute", top: 16, right: 16}}>
            <SvgUri width = "32" height = "32" source = {Download} />
          </TouchableOpacity>
        </View>

        <View style = {{backgroundColor: "#070D15", width: 310, height: 64, top: 369, left: 33, borderRadius: 8, borderBottomEndRadius: 0, marginBottom: 8}}>
          <TouchableOpacity style = {{position: "absolute", top: 16, left: 16}}>
            <SvgUri width = "32" height = "32" source = {Play} />
          </TouchableOpacity>
          <Text style = {{color: "white", fontSize: 14, left: "21%", top: "17%"}}>Episode 4</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", left: "21%", bottom: "17%"}}>23 May 2019</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "50%", alignItems: "center", textAlign: "right"}}>21:37:00</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "17%", alignItems: "center", textAlign: "right"}}>16mb</Text>
          <TouchableOpacity style = {{position: "absolute", top: 16, right: 16}}>
            <SvgUri width = "32" height = "32" source = {Download} />
          </TouchableOpacity>
        </View>

        <View style = {{backgroundColor: "#070D15", width: 310, height: 64, top: 369, left: 33, borderRadius: 8, borderBottomEndRadius: 0}}>
          <TouchableOpacity style = {{position: "absolute", top: 16, left: 16}}>
            <SvgUri width = "32" height = "32" source = {Play} />
          </TouchableOpacity>
          <Text style = {{color: "white", fontSize: 14, left: "21%", top: "17%"}}>Episode 5</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", left: "21%", bottom: "17%"}}>23 May 2019</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "50%", alignItems: "center", textAlign: "right"}}>15:33:00</Text>
          <Text style = {{color: "#898F97", fontSize: 12, position: "absolute", right: "21%", bottom: "17%", alignItems: "center", textAlign: "right"}}>13mb</Text>
          <TouchableOpacity style = {{position: "absolute", top: 16, right: 16}}>
            <SvgUri width = "32" height = "32" source = {Download} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image_background: {
    display: "flex",
    flexDirection: "column",
    height: 375,
    width: "100%",
  },
  title_text: {
    width: 236,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 30,
    textAlign: "center",
    color: "white",
    alignSelf: "center",
    zIndex: 10,
    position: "absolute",
    top: 130,
  },
  authors_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
    color: "#898F97",
    position: "absolute",
    top: 202,
    alignSelf: "center",
  },
  author_style: {
    width: 95,
  },
  author_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between", 
    marginTop: 214
  },
  bottom_container: {
    borderRadius: 24, 
    borderBottomStartRadius: 0, 
    borderBottomEndRadius: 0, 
    backgroundColor: '#09121C', 
    height: 737, 
    width: "100%"
  },
  info_container: {
    position: "absolute",
    width: 309,
    height: 31,
    left: 33,
    top: 59,
    backgroundColor: '#09121C', 
  },
});

VideoPlayBack.navigationOptions = ({navigation})=>{
    return{
        // title:navigation.getParam('lecture', 'Lecture name'),
        headerTransparent: true,
        headerTintColor: "white"
    }
}
