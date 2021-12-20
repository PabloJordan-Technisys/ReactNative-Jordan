import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import AppLoading from "expo-app-loading";
import GameStart from "./src/screens/GameStart";
import Header from "./src/componets/Header";
import StartGame from "./src/screens/StartGame";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={handlerStartGame} />;

  if (userNumber) content = <GameStart />;
  const [loaded] = useFonts({
    bakbak: require("./assets/font/BakbakOne-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;
  const booleano = true;
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Adivina el numero"} />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
