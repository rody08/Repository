import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Coin from "../components/Coin";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";



function CoinToss(props) {
  return (
    <View style={styles.container}>
    
      
          <View style={styles.icon1Stack}>
            <Icon name="chevron-left" style={styles.icon1}></Icon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("IntroScreen")}
              style={styles.button2}
            ></TouchableOpacity>
          </View>
          
        
      <View style={styles.coin2Stack}>
        <Coin style={styles.coin2}></Coin>
        <Text style={styles.coin3}>$</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CoinTossResults")}
          style={styles.cashonClick}
        ></TouchableOpacity>
      </View>

      <MaterialHelperTextBox
        text1="How many flips?"
        style={styles.flipInput}
      ></MaterialHelperTextBox>

      <Text style={styles.swipe}>Swipe or press the button</Text>

      <View style={styles.cTflipStack}>
        <CupertinoButtonDanger
          text1="Flip"
          button1="CoinTossResults"
          style={styles.cTflip}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CoinTossResults")}
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

  coin2: {
    top: 20,
    left: 21,
    width: 143,
    height: 143,
    position: "absolute"
  },

  coin3: {
    top: 45,
    left: 75,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 70,
    fontFamily: "roboto-regular"
  },

  cashonClick: {
    top: 0,
    left: 0,
    width: 169,
    height: 171,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },

  coin2Stack: {
    width: 169,
    height: 171,
    marginTop: 131,
    marginLeft: 100
  },

  flipInput: {
    width: 147,
    height: 85,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: "rgba(255, 151, 0,1)",
    borderWidth: 3,
    shadowOffset: {
      height: 20,
      width: 20
    },
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    marginTop: 197,
    marginLeft: 115
  },

  swipe: {
    color: "rgba(105,104,104,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: -153,
    alignSelf: "center"
  },

  cTflip: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
    shadowOffset: {
      height: 20,
      width: 20
    },
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1
  },

  fBonClick: {
    top: 0,
    left: 2,
    width: 209,
    height: 52,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0
  },

  cTflipStack: {
    width: 211,
    height: 52,
    marginTop: 160,
    marginLeft: 90
  },
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

export default CoinToss;
