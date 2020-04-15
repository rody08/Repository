import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialCardWithoutImage1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.titleStyle}>{props.text1 || "Title goes here"}</Text>
      <Text style={styles.subtitleStyle}>{props.text2 || "Subtitle here"}</Text>
      <Text style={styles.bodyText}>{props.text3 || "BodyText"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  titleStyle: {
    width: 246,
    height: 65,
    color: "#000",
    margin: 11,
    paddingBottom: 0,
    fontSize: 35,
    fontFamily: "aldrich-regular"
  },
  subtitleStyle: {
    width: 339,
    height: 30,
    color: "#000",
    opacity: 0.75,
    margin: 0,
    padding: 6,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  bodyText: {
    width: 265,
    height: 25,
    color: "#424242",
    alignSelf: "flex-start",
    flexWrap: "wrap",
    margin: 6,
    padding: 0,
    fontSize: 18,
    fontFamily: "roboto-regular",
    lineHeight: 20
  }
});

export default MaterialCardWithoutImage1;
