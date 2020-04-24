import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Slider, Animated } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";
import SpinnerComponent from "../components/SpinnerComponent";

function Spinner({ navigation }) {

  //Declare all of the variable to hold the color size 
  const [Red, setRed] = useState(0)

  return (
    <View style={styles.container}>
      
      {/*Spinner Attributes */}
      <View style={styles.spinnerStack}>
        <SpinnerComponent
          style={styles.spinner}>
        </SpinnerComponent>
      </View>
      
      {/* Back button */}
      <View style={styles.icon1Stack}>
        <Icon name="chevron-left" style={styles.icon1}></Icon>
        <TouchableOpacity
          onPress={() => navigation.navigate("IntroScreen")}
          style={styles.button2}
        ></TouchableOpacity>
      </View>

      {/* Spinner for the color red */}
      <Slider 
        style={styles.RedsliderElements}
        value = {0}
        step = {1}
        maximumValue={99}
        thumbTintColor= "rgb(255,0,0)"
        minimumTrackTintColor="rgb(128,0,0)"
        maximumTrackTintColor="rgb(255, 255, 255)"
        onValueChange = { (Red)=> setRed (Red + 1)}>
      </Slider>   
      <Text style={styles.NumberofSpins} >
        Number of Spins: {Red}
      </Text>

      {/* Results Button */}
      <View style={styles.cTflipStack}>
        <CupertinoButtonDanger
          text1="Results"
          style={styles.cTflip}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => navigation.navigate("SpinnerResults",{Red})}
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
  
  spinner: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    position: "absolute"
  },

  spinnerStack: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    position:"absolute",
    marginLeft: 100
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
    opacity: 0.25
  },

  //Slider Elements 
  RedsliderElements:{
    width:350,
    alignSelf:"center",
    top : 400,
  },
  BluesliderElements:{
    width:350,
    alignSelf:"center",
    top : 400,
  },
  GreensliderElements:{
    width:350,
    alignSelf:"center",
    top : 400,
  },
  YellowsliderElements:{
    width:350,
    alignSelf:"center",
    top : 400,
  },

  //slider text 
  NumberofSpins:
  {
      fontSize: 15,
      top: 345,
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      left: 20
  },

  //results button elements 
  cTflip: {
    top: 290,
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
    top: 290,
    left: 2,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },


});

export default Spinner;
