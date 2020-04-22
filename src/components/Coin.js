import React, { Component, useState } from "react";
import { Animated, Button, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import Svg, { Ellipse } from "react-native-svg";

export default class Coin extends Component{

  constructor() {
    super()
    this.animated = new Animated.Value(0);
    // translateY
    var snapshot = 50, radius = 100;
    var inputRange = [], outputRange = [];

    for (var i=0; i<=snapshot; ++i) {
        var value = i/snapshot;
        var move = Math.cos(value * Math.PI * 2) * radius;

        inputRange.push(value);
        outputRange.push(move);
    }
    this.translateY = this.animated.interpolate({ inputRange, outputRange });
  }

  animate() {
    this.animated.setValue(0)
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }
  
  render() {      

    const spin = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '1080deg']});

    const transform = [
      {translateY: this.translateY},
      {rotateX: spin},
      {perspective: 1000}]; 

    //const [count, setCount] = useState(0);
    //const onPress = () => setCount(prevCount => prevCount + 1);

    return (
      <View style={styles.container}>
        <Animated.View style={{transform}}>
         <TouchableOpacity 
            style={styles.circle}
            title="Flip" onPress={() => { this.animate() }}>
            <Text style = {styles.text}>$</Text>
         </TouchableOpacity>
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
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    borderWidth: 5,
    borderColor: 'orange',
    backgroundColor: 'gold',
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: 'black',
    fontSize: 40,
    fontWeight: "bold"
  }
});
