import { SafeAreaView, StyleSheet } from "react-native";

import GameStart from "./src/screens/GameStart";
import Header from "./src/componets/Header";
import React from "react";
import StartGame from "./src/screens/StartGame";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StartGame />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
