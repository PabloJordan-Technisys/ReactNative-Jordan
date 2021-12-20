import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Card from "../componets/Card";
import { Colors } from "../Constants/Colors";
import { styleGeneral } from "../Constants/Styles";

export default function GameStart(props) {
  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
    else return rndNum;
  };
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userOption)
  );
  return (
    <View style={styleGeneral.containerScreen}>
      <Text style={{ marginTop: 25 }}>La suposición del oponente</Text>
      <Text style={style.number}>{currentGuess}</Text>
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
