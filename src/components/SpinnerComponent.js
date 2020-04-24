import React, { Component } from "react";
import { Animated, StyleSheet, Image, TouchableOpacity, View } from "react-native";

const backgroundImage = require('C:/Users/Administrator/Documents/Repository/src/assets/images/SpinnerSimulator1.2.0.png')
const arrow = require('C:/Users/Administrator/Documents/Repository/src/assets/images/arrow.jpeg')

export default class SpinnerComponent extends Component{

  constructor() {
    super()
    this.animated = new Animated.Value(0);
  }

  animate() {
    this.animated.setValue(0)
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }
  
  render() {      

    return (
      <View style={styles.container}>

        <Image
            source={require("../assets/images/pointer.png")}
            resizeMode="contain"
            style={styles.arrow}
        ></Image>

        <Animated.Image 
            source={ backgroundImage }
            resizeMode='cover'
            style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                top: 10,
                height: 300,
                width: 300,
                transform: [{
                    rotate: this.animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '4000deg'] })
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

  arrow: {
    top:220,
    height:350,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute'
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
