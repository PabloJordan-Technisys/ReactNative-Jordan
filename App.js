import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import Card from "./src/componets/Card";
import Header from "./src/componets/Header";
import StartGame from "./src/screens/StartGame";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StartGame>
        <Card style={styles.card} />
      </StartGame>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  card: {
    width: 300,
    height: 200,
  },
});
