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
        <Card></Card>
      </StartGame>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { height: "100%", backgroundColor: "black" },
  containerInput: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
    marginTop: "3%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    width: "70%",
    color: "white",
  },
  containerItem: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: "3%",
    color: "white",
  },
  containerModal: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  infoContainer: {
    backgroundColor: "gray",
    width: "70%",
    height: "25%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "20%",
  },
  button: {
    width: "40%",
    height: "10%",
  },
});
