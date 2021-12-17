import { StyleSheet, View } from "react-native";

import React from "react";

export default function Card(props) {
  return <View style={style.container}>{props.children}</View>;
}

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "white",
  },
});
