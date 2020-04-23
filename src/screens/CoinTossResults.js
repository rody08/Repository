import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";
//import the coin toss data 


function CoinTossResults(props, {navigation}) {
 
  return (
    <View style={styles.container}>
          {/*Back button*/}
          <View style={styles.icon1Stack}>
            <Icon name="chevron-left" style={styles.icon1}></Icon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("CoinToss")}
              style={styles.button2}
            ></TouchableOpacity>
          </View>
      <Text> Number of Spins: {navigation.getParam('spinCount') } </Text>
      
      {/*Play again button*/}
      <View style={styles.ctrButtonStack}>
        <CupertinoButtonDanger
          text1="Play Again"
          button1="CoinToss"
          style={styles.ctrButton}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CoinToss")}
          style={styles.ctRonClick}
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
  
  ctrButton: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
  },

  ctRonClick: {
    top: 0,
    left: 7,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },
  ctrButtonStack: {
    width: 216,
    height: 52,
    top: 640,
    marginLeft: 90
  },

  

  //Back button 
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

export default CoinTossResults;
