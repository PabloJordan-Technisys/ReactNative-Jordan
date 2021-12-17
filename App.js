import { SafeAreaView, StyleSheet } from "react-native";

import AppLoading from "expo-app-loading";
import GameStart from "./src/screens/GameStart";
import Header from "./src/componets/Header";
import React from "react";
import StartGame from "./src/screens/StartGame";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    bakbak: require("./assets/font/BakbakOne-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;
  const booleano = true;
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {booleano ? <StartGame /> : <GameStart />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
