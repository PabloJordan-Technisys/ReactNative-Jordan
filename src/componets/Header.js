import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../Constants/Colors";
import React from "react";

export default function Header() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Titulo</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "800",
  },
});
