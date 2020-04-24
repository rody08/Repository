import React, { Component } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";

const backgroundImage = require('/Users/elwjaramillo/Documents/GitHub/Repository/Repository-1/src/assets/images/pointer.png')


export default class SpinnerComponent extends Component{

  constructor() {
    super()
    this.animated = new Animated.Value(0);
  }

  animate() {
    this.animated.setValue(0)
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }
  
  render() {      

    const spin = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '4320deg']});

    const transform = [
      {rotate: spin},
      {perspective: 1000}]; 

    return (
      <View style={styles.container}>

        <Image
        source={require("../assets/images/SpinnerSimulator.png")}
        resizeMode="contain"
        style={styles.img}
            ></Image>
        <Animated.Image 
            source={backgroundImage}
            resizeMode='cover'
            style={{
                position: 'absolute',
                alignItems: "center",
                justifyContent: "center",
                top: 100,
                height: 300,
                width: 300,
                transform: [{
                    rotate: this.animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '4320deg'] })
                }]
            }}>
            </Animated.Image>         

           

        <TouchableOpacity 
            style={styles.circle}
            title="Spin" onPress={() => { this.animate() }}>
        </TouchableOpacity>
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
    top: 100,
    width: 300,
    height: 300,
    borderRadius: 300/2,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute'
  },
  img:
  {
      height:350,
      top:150

  },

});
