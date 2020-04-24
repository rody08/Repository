import React, { Component,useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";

function SpinnerResults({navigation}) {

  /*var Red = useState(0);
  var Blue = useState(0);
  var Green = useState(0); 
  var Yellow = useState(0); 
  Red = navigation.getParam('r'); 
  Blue = navigation.getParam('b');
  Green = navigation.getParam('g'); 
  Yellow = navigation.getParam('y'); */
  return (
    <View style={styles.container}>

      {/*Back Butoon*/}
      <View style={styles.icon1Stack}>
            <Icon name="chevron-left" style={styles.icon1}></Icon>
            <TouchableOpacity
              onPress={() => navigation.navigate("Spinner")}
              style={styles.button2}
            ></TouchableOpacity>
        </View>
      
      <Text>
      
      </Text>
      
      

      {/*Play Again Button*/}
      <View style={styles.srButtonStack}>

        <CupertinoButtonDanger
          text1="Play Again"
          button1="Spinner"
          style={styles.srButton}
        ></CupertinoButtonDanger>

        <TouchableOpacity
          onPress={() => navigation.navigate("Spinner")}
          style={styles.sRonClick}
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

  
//Play Again Button Style
  srButton: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
  },

  sRonClick: {
    top: 0,
    left: 3,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },

  srButtonStack: {
    width: 212,
    height: 52,
    alignSelf: "center",
    top: 650
  },

  //Back Button Style 
  icon1Stack: {
    width: 43,
    height: 47
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

});

export default SpinnerResults;
