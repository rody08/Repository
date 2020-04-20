import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialHelperTextBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.text1 || "StackedLabel"}</Text>
      <TextInput
        placeholder="Input"
        blurOnSubmit={true}
        clearTextOnFocus={true}
        style={styles.textInput}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  label: {
    color: "rgba(66,66,66,1)",
    alignSelf: "center",
    paddingTop: 16,
    fontSize: 16,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  textInput: {
    width: 363,
    height: 58,
    color: "#000",
    alignSelf: "stretch",
    margin: 0,
    padding: 20,
    fontSize: 16,
    fontFamily: "aldrich-regular",
    lineHeight: 16
  }
});

export default MaterialHelperTextBox;
