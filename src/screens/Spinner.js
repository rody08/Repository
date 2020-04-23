import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity,Slider } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";

function Spinner(props) {
  //Declare all of the variable to hold the color size 
  const [Red, setRed] = useState(0)
  const [Blue, setBlue] = useState(0) 
  const [Green, setGreen] = useState(0)
  const [Yellow, setYellow ]= useState(0)
  return (
    <View style={styles.container}>
      
      <View style={styles.icon1Stack}>
            <Icon name="chevron-left" style={styles.icon1}></Icon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("IntroScreen")}
              style={styles.button2}
            ></TouchableOpacity>
     
      </View>
      {/* Spinner for the color red */}
      <Slider style={styles.RedsliderElements}
        value = {0}
        step = {1}
        maximumValue={99}
        thumbTintColor= "rgb(255,0,0)"
        minimumTrackTintColor="rgb(128,0,0)"
        maximumTrackTintColor="rgb(255, 255, 255)"
        onValueChange = { (Red)=> setRed (Red + 1)}>
      

      
      </Slider>        
      <Text style={styles.NumberofSpins} >
          Red: {Red} %
        </Text>
      {/* Spinner for the color blue */}
      <Slider style={styles.BluesliderElements}
        value = {0}
        step = {1}
        maximumValue={99}
        thumbTintColor= "rgb(0, 0, 255)"
        minimumTrackTintColor="0, 0, 255"
        maximumTrackTintColor="rgb(255, 255, 255)"
         onValueChange = { (Blue)=> setBlue (Blue + 1)}>
      

      
      </Slider>        
      <Text style={styles.NumberofSpins}  >
          Blue: {Blue} %
      </Text>
      {/* Spinner for the color green*/}
      <Slider style={styles.GreensliderElements}
        value = {0}
        step = {1}
        maximumValue={99}
        thumbTintColor= "rgb(0, 128, 0)"
        minimumTrackTintColor="rgba(57, 227, 48,1)"
        maximumTrackTintColor="rgb(255, 255, 255)"
         onValueChange = { (Green)=> setGreen (Green + 1)}>
      

      
      </Slider>       
        <Text style={styles.NumberofSpins} >
          Green: {Green} %
        </Text>
      {/* Spinner for the color yellow */}
      <Slider style={styles.YellowsliderElements}
        value = {0}
        step = {1}
        maximumValue={99}
        thumbTintColor= "rgb(255,255,0)"
        minimumTrackTintColor="rgb(255,255,51)"
        maximumTrackTintColor="rgb(255, 255, 255)"
         onValueChange = { (Yellow)=> setYellow (Yellow + 1)}>
      
        
      
      </Slider>
        <Text style={styles.NumberofSpins} >
          Yellow: {Yellow} %
        </Text>
      <View style={styles.cTflipStack}>
        <CupertinoButtonDanger
          text1="Results"
        
          style={styles.cTflip}
        ></CupertinoButtonDanger>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("SpinnerResults")}
          style={styles.fBonClick}
        ></TouchableOpacity>
      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(143, 216, 255,1)"
  },

  swipeInstructions: {
    color: "rgba(105,104,104,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -147,
    marginLeft: 102
  },

  sButton: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
   
  },

  sBonClick: {
    top: 200,
    left: 3,
    width: 209,
    height: 52,
    backgroundColor: 'white',
    position: "absolute",
    opacity: 0
  },
  
  sButtonStack: {
    width: 212,
    height: 52,
    marginTop: 165,
    marginLeft: 90
  },
  icon1: {
    top: 50,
    left: 10,
    position: "absolute",
    color: "rgba(9,8,8,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  button2: {
    top: 50,
    left: 10,
    width: 43,
    height: 47,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0.25
  },
  //Slider Elements 
  RedsliderElements:{
    width:350,
    alignSelf:"center",
    top : 500,
  },
  BluesliderElements:{
    width:350,
    alignSelf:"center",
    top : 500,
  },
  GreensliderElements:{
    width:350,
    alignSelf:"center",
    top : 500,
  },
  YellowsliderElements:{
    width:350,
    alignSelf:"center",
    top : 500,
  },
  //slider text 
  NumberofSpins:
  {
      fontSize: 15,
      top: - 9,
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
  },
  //results button elements 
  cTflip: {
    top: 390,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
    
  },

  cTflipStack: {
    width: 211,
    height: 52,
    marginTop: 160,
    marginLeft: 90
  },

  fBonClick: {
    top: 390,
    left: 2,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },

});

export default Spinner;
