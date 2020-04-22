import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

function LoginSucces(props) {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LoginPage")}
          style={styles.button}
        >
          <Text style={styles.logIn}>LOG-IN</Text>
        </TouchableOpacity>

        
        <Image
          source={require("../assets/images/sucess.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
  
          
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "rgba(143, 216, 255,1)"
    },
    
    button: {
      width: 226,
      height: 45,
      backgroundColor: "rgba(225,137,91,1)",
      alignSelf:"center",
      marginTop: 600
      
    },
    
    logIn: {
      color: "#121212",
      fontSize: 25,
      fontFamily: "roboto-regular",
      marginTop: 11,
      alignSelf:"center"
      
    },
    
    image: {
      width: 200,
      height: 200,
      marginTop: -368,
      alignSelf: "center"
    }
  });
  
  export default LoginSucces; 
  