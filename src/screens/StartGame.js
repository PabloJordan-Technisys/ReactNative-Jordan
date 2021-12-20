import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Card from "../componets/Card";
import { Colors } from "../Constants/Colors";
import Input from "../componets/Input";
import { styleGeneral } from "../Constants/Styles";

export default function StartGame(props) {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [numberSelect, setNumberSelect] = useState("");

  const clean = () => {
    setValue("");
    setConfirm(false);
  };

  const handlerInput = (text) => {
    setValue(text.replace(/[^0-9]/g), "");
  };

  const handleConfirm = () => {
    const numberParser = parseInt(value);
    if (numberParser !== NaN || numberParser <= 0 || numberParser > 99) return;
    setConfirm(true);
    setNumberSelect(value);
    setValue("");
  };

  return (
    <View style={styleGeneral.containerScreen}>
      <Text style={style.title}>Comenzar Juego</Text>
      <Card style={style.card}>
        <Text style={{ fontFamily: "bakbak" }}>Elija un Numero</Text>
        <Input value={value} setValue={setValue} />
        <View style={style.containerButton}>
          <Button title={"Limpiar"} onPress={clean} color={Colors.accent} />
          <Button
            title={"Confirmar"}
            onPress={handleConfirm}
            color={Colors.primary}
          />
        </View>
      </Card>
      <Card style={style.card2}>
        <Text style={style.title}>Tu Seleccion</Text>
        <Text style={{ color: Colors.primary, fontSize: 20 }}>
          {numberSelect}
        </Text>
        <Button
          title={"Empezar Juego"}
          onPress={() => props.onStartGame(numberSelect)}
        />
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontSize: 16,
  },
  card: {
    minWidth: "60%",
    maxWidth: "80%",
    minHeight: "10%",
    maxHeight: "80%",
  },
  containerButton: {
    width: 300,

    flexDirection: "row",
    justifyContent: "space-around",
  },
  card2: {
    width: 250,
    height: 150,
  },
});
