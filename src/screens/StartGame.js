import { StyleSheet, View } from "react-native";

import React from "react";

export default function StartGame(props) {
  return <View style={style.container}>{props.children}</View>;
}

const style = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: "white",
    alignItems: "center",
  },
});
