import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CupertinoHeaderWithActionButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to IntroScreen")}
        style={styles.button}
      >
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon name="ios-arrow-back" style={styles.leftIcon2}></Icon>
          <Text style={styles.leftText}>{props.text1 || "Back"}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.buttonFiller}>
        <Text numberOfLines={1} style={styles.title}>
          {props.text2 || "Title"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8
  },
  button: {
    width: 67,
    height: 44,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 8
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon2: {
    color: "#007AFF",
    fontSize: 32,
    width: 12,
    height: 32
  },
  leftText: {
    width: 40,
    height: 17,
    color: "#007AFF",
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 17
  },
  title: {
    width: 187,
    height: 44,
    color: "#000",
    fontSize: 17,
    fontFamily: "roboto-regular",
    lineHeight: 17,
    textAlign: "center",
    marginTop: 22
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default CupertinoHeaderWithActionButton;
