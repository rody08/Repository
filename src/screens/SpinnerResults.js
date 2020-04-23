import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";

function SpinnerResults(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon1Stack}>
            <Icon name="chevron-left" style={styles.icon1}></Icon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Spinner")}
              style={styles.button2}
            ></TouchableOpacity>
        </View>
      <View style={styles.redRow}>

        <Text style={styles.red}>Red</Text>
        <Text style={styles.blue}>Blue</Text>
        <Text style={styles.green}>Green</Text>
        <Text style={styles.yellow}>Yellow</Text>

      </View>

      <View style={styles.rectRedRow}>

        <View style={styles.rectRed}></View>
        <View style={styles.rectBlue}></View>
        <View style={styles.rectGreen}></View>
        <View style={styles.rectYellow}></View>

      </View>

      <View style={styles.srButtonStack}>

        <CupertinoButtonDanger
          text1="Play Again"
          button1="Spinner"
          style={styles.srButton}
        ></CupertinoButtonDanger>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Spinner")}
          style={styles.sRonClick}
        ></TouchableOpacity>

      </View>

      <View style={styles.rect1}>
        <Text style={styles.loremIpsum1}>

          The results are:
          {"\n"} 
          {"\n"} 25% Red
          {"\n"} 25% Blue
          {"\n"} 25% Green
          {"\n"} 25% Yellow

        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(143, 216, 255,1)"
  },

  red: {
    color: "rgba(66,66,66,1)",
    fontSize: 14,
    fontFamily: "aldrich-regular"
  },

  blue: {
    color: "rgba(66,66,66,1)",
    fontSize: 14,
    fontFamily: "aldrich-regular",
    marginLeft: 37
  },

  green: {
    color: "rgba(66,66,66,1)",
    fontSize: 14,
    fontFamily: "aldrich-regular",
    marginLeft: 23
  },

  yellow: {
    color: "rgba(66,66,66,1)",
    fontSize: 14,
    fontFamily: "aldrich-regular",
    marginLeft: 15
  },

  redRow: {
    height: 14,
    flexDirection: "row",
    marginTop: 78,
    marginLeft: 76,
    marginRight: 64
  },

  rectRed: {
    width: 30,
    height: 116,
    backgroundColor: "rgba(255,0,0,1)",
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    elevation: 10
  },

  rectBlue: {
    width: 30,
    height: 116,
    backgroundColor: "rgba(29,15,181,1)",
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    elevation: 10,
    marginLeft: 35

  },
  rectGreen: {
    width: 30,
    height: 116,
    backgroundColor: "rgba(77,140,5,1)",
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    elevation: 10,
    marginLeft: 35
  },
  rectYellow: {
    width: 30,
    height: 116,
    backgroundColor: "rgba(248,231,28,1)",
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    elevation: 10,
    marginLeft: 35
  },

  rectRedRow: {
    height: 116,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 75,
    marginRight: 68
  },

  srButton: {
    top: 0,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    elevation: 10
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
    marginTop: 398,
    marginLeft: 90
  },

  rect1: {
    width: 260,
    height: 227,
    backgroundColor: 'white',
    borderRadius: 33,
    borderColor: "rgba(255, 151, 0,1)",
    borderWidth: 4,
    shadowOffset: {
      height: 10,
      width: 10
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    elevation: 10,
    marginTop: -370,
    marginLeft: 55
  },

  loremIpsum1: {
    color: "rgba(66,66,66,1)",
    fontSize: 26,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 40
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
