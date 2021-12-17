import { StyleSheet, Text, View } from "react-native";

import React from "react";

export default function StartGame(props) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Comenzar Juego</Text>
      {props.children}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
    fontSize: 16,
  },
});
