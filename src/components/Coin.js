import React, { Component } from "react";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import Svg, { Ellipse } from "react-native-svg";

export default class Coin extends Component{

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start()
  }
  
  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rad', '10rad'],
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Spinner</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFF"
  }
});

//AppRegistry.registerComponent('animatedbasic', () => animatedbasic);