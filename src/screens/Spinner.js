import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";

function Spinner(props) {
  return (
    <View style={styles.container}>
      
        <View style={styles.icon1Stack}>
            <Icon name="chevron-left" style={styles.icon1}></Icon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("IntroScreen")}
              style={styles.button2}
            ></TouchableOpacity>
        </View>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 229.00 229.00" style={styles.ellipse}>

          <Ellipse
            strokeWidth={1}
            fill="rgba(255, 187, 0,1)"
            stroke="rgba(230, 230, 230,1)"
            cx={115}
            cy={115}
            rx={114}
            ry={114}
          ></Ellipse>

        </Svg>
        <Text style={styles.futureSpinner}>
          Spinner goes here{"\n"}Work in Progress!
        </Text>
      </View>
      <View style={styles.divisionInputRow}>
        <MaterialHelperTextBox
          text1="Divisions"
          style={styles.divisionInput}
        ></MaterialHelperTextBox>
        <MaterialHelperTextBox
          text1="Spins "
          style={styles.spinInput}
        ></MaterialHelperTextBox>
      </View>
      <Text style={styles.swipeInstructions}>Swipe or press the button</Text>
      <View style={styles.sButtonStack}>
        <CupertinoButtonDanger
          text1="Spin"
          button1="SpinnerResults"
          style={styles.sButton}
        ></CupertinoButtonDanger>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SpinnerResults")}
          style={styles.sBonClick}
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

  ellipse: {
    top: 0,
    left: 0,
    width: 229,
    height: 229,
    position: "absolute"
  },

  futureSpinner: {
    top: 95,
    left: 33,
    color: 'white',
    position: "absolute",
    fontSize: 20,
    fontFamily: "courier-regular"
  },

  ellipseStack: {
    width: 229,
    height: 229,
    marginTop: 106,
    marginLeft: 75
  },

  divisionInput: {
    width: 81,
    height: 85,
    backgroundColor: 'white',
    borderRadius: 21,
    borderColor: "rgba(255, 151, 0,1)",
    borderWidth: 3,
    shadowOffset: {
      height: 20,
      width: 20
    },
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1
  },

  spinInput: {
    width: 80,
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
    marginLeft: 45
  },
  
  divisionInputRow: {
    height: 85,
    flexDirection: "row",
    marginTop: 160,
    marginLeft: 90,
    marginRight: 90
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
    shadowOffset: {
      height: 20,
      width: 20
    },
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1
  },

  sBonClick: {
    top: 0,
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

});

export default Spinner;
