import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Slider, FlatList} from "react-native";
import Coin from "../components/Coin";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";
import Icon from "react-native-vector-icons/Entypo";


export default function CoinToss({ navigation }) {

    var [spinCount , setCount] = useState(0); //set the number of spins to 0 

    return (
   
    <View style={styles.container}>

      <View style={styles.icon1Stack}>
        <Icon name="chevron-left" style={styles.icon1}></Icon>
        <TouchableOpacity
          onPress={() => navigation.navigate("IntroScreen")}
          style={styles.button2}
        ></TouchableOpacity>
      </View>
      
      <View style={styles.coinStack}>
        <Coin 
          style={styles.coin}>
        </Coin>
      </View>

      <Text style={styles.NumberofSpins}>
        Number of Spins: {spinCount}      
      </Text> 

      <Slider style={styles.slider}
        value = {0}
        step = {1}
        maximumValue={99}
        thumbTintColor="rgba(248,132,81,1)"
        minimumTrackTintColor="rgba(57, 227, 48,1)"
        maximumTrackTintColor="rgb(255, 255, 255)"
        onValueChange = { (spinCount) => setCount (spinCount + 1)}>
      </Slider>  

      <View style={styles.cTflipStack}> 

        <CupertinoButtonDanger
          text1="Results"
          button1="CoinTossResults"
          style={styles.cTflip}
        ></CupertinoButtonDanger> 

        <TouchableOpacity 
          onPress = {() => navigation.navigate("CoinTossResults", { x:10 } ) }
          style={styles.fBonClick}>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(143, 216, 255,1)"
  },

  NumberofSpins:
  {
    fontSize: 20,
    top: 150,
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
  },

  coin: {
    top: 20,
    left: 21,
    width: 143,
    height: 143,
    position: "absolute"
  },

  coinStack: {
    width: 169,
    height: 171,
    marginTop: 0,
    marginLeft: 100
  },

  cTflip: {
    top: 220,
    left: 0,
    width: 209,
    height: 52,
    backgroundColor: "rgba(57, 227, 48,1)",
    position: "absolute",
    borderRadius: 100,
  },  
  
  cTflipStack: {
    width: 211,
    height: 52,
    marginTop: 160,
    marginLeft: 90
  },

  fBonClick: {
    top: 220,
    left: 2,
    width: 209,
    height: 52,
    backgroundColor: 'transparent',
    position: "absolute",
    opacity: 100
  },

  icon1Stack: {
    width: 43,
    height: 47
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

  sliderElements:{
    elevation: 10,
    width:350,
    alignSelf:"center",
    top : 500
  }
});
