import { StyleSheet, View } from "react-native";

import React from "react";

export default function Card(props) {
  return <View style={style.container}></View>;
}

const style = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    shadowRadius: 6,
    elevation: 5,
    shadowColor: "black",
    marginTop: 50,
    borderColor: "gray",
    borderWidth: "1px",
    borderRadius: 10,
  },
});
