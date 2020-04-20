import React, { useState } from "react";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import CoinToss from "./src/screens/CoinToss";
import IntroScreen from "./src/screens/IntroScreen";
import Spinner from "./src/screens/Spinner";
import CoinTossResults from "./src/screens/CoinTossResults";
import SpinnerResults from "./src/screens/SpinnerResults";
import HomeScreen from "./src/screens/HomeScreen";
import LoginPage from "./src/screens/LoginPage";
import SignUpPage from "./src/screens/SignUpPage";


const DrawerNavigation = createDrawerNavigator({
  HomeScreen: HomeScreen,
  LoginPage: LoginPage,
  SignUpPage: SignUpPage,
  IntroScreen: IntroScreen,
  CoinToss: CoinToss,
  Spinner: Spinner,
  CoinTossResults: CoinTossResults,
  SpinnerResults: SpinnerResults
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    HomeScreen: HomeScreen,
    LoginPage: LoginPage,
    SignUpPage: SignUpPage,
    IntroScreen: IntroScreen,
    CoinToss: CoinToss,
    Spinner: Spinner,
    CoinTossResults: CoinTossResults,
    SpinnerResults: SpinnerResults
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "courier-regular": require("./src/assets/fonts/courier-regular.ttf"),
      "aldrich-regular": require("./src/assets/fonts/aldrich-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
