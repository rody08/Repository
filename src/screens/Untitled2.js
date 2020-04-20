import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialFixedLabelTextbox4 from "../components/MaterialFixedLabelTextbox4";
import MaterialMessageTextbox1 from "../components/MaterialMessageTextbox1";
import MaterialFixedLabelTextbox6 from "../components/MaterialFixedLabelTextbox6";
import MaterialFixedLabelTextbox7 from "../components/MaterialFixedLabelTextbox7";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.iconStackRow}>
          <View style={styles.iconStack}>
            <Icon name="chevron-left" style={styles.icon}></Icon>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
          </View>
          <Text style={styles.signUp}>SIGN-UP</Text>
        </View>
      </View>
      <MaterialFixedLabelTextbox3
        style={styles.materialFixedLabelTextbox3}
      ></MaterialFixedLabelTextbox3>
      <MaterialFixedLabelTextbox4
        style={styles.materialFixedLabelTextbox4}
      ></MaterialFixedLabelTextbox4>
      <MaterialMessageTextbox1
        style={styles.materialMessageTextbox1}
      ></MaterialMessageTextbox1>
      <MaterialFixedLabelTextbox6
        style={styles.materialFixedLabelTextbox6}
      ></MaterialFixedLabelTextbox6>
      <MaterialFixedLabelTextbox7
        style={styles.materialFixedLabelTextbox7}
      ></MaterialFixedLabelTextbox7>
      <MaterialRightIconTextbox
        style={styles.materialRightIconTextbox}
      ></MaterialRightIconTextbox>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled1")}
        style={styles.button}
      >
        <Text style={styles.createAnAccount}>CREATE AN ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 360,
    height: 73,
    backgroundColor: "rgba(248,132,81,1)",
    flexDirection: "row"
  },
  icon: {
    top: 5,
    left: 3,
    position: "absolute",
    color: "rgba(11,10,10,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  button2: {
    top: 0,
    left: 0,
    width: 43,
    height: 51,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0.25
  },
  iconStack: {
    width: 43,
    height: 51
  },
  signUp: {
    color: "#121212",
    fontSize: 27,
    fontFamily: "roboto-700",
    marginLeft: 8,
    marginTop: 12
  },
  iconStackRow: {
    height: 51,
    flexDirection: "row",
    flex: 1,
    marginRight: 188,
    marginLeft: 13,
    marginTop: 11
  },
  materialFixedLabelTextbox3: {
    width: 323,
    height: 43,
    marginTop: 93,
    marginLeft: 6
  },
  materialFixedLabelTextbox4: {
    width: 331,
    height: 43,
    marginTop: -114,
    marginLeft: 5
  },
  materialMessageTextbox1: {
    width: 323,
    height: 90,
    marginTop: 95,
    marginLeft: 13
  },
  materialFixedLabelTextbox6: {
    width: 324,
    height: 43,
    marginTop: 26,
    marginLeft: 5
  },
  materialFixedLabelTextbox7: {
    width: 331,
    height: 43,
    marginTop: 28,
    marginLeft: 6
  },
  materialRightIconTextbox: {
    width: 324,
    height: 43,
    marginTop: 21,
    marginLeft: 13
  },
  button: {
    width: 216,
    height: 48,
    backgroundColor: "rgba(246,87,87,1)",
    marginTop: 40,
    marginLeft: 72
  },
  createAnAccount: {
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    fontFamily: "roboto-regular",
    marginTop: 16,
    marginLeft: 23
  }
});

export default Untitled2;
