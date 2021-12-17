import { Button, StyleSheet, Text, View } from "react-native";

import Card from "../componets/Card";
import { Colors } from "../Constants/Colors";
import React from "react";
import { styleGeneral } from "../Constants/Styles";

export default function GameStart() {
  return (
    <View style={styleGeneral.containerScreen}>
      <Text style={{ marginTop: 20 }}>La suposición del oponente</Text>
      <Text style={style.number}>50</Text>
      <Card style={style.containerButtons}>
        <Button title={"Menor"} onPress={() => {}} />
        <Button title={"Mayor"} onPress={() => {}} />
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  containerButtons: {
    minWidth: 250,
    height: 50,
  },
  number: {
    color: Colors.primary,
    fontSize: 22,
  },
});
