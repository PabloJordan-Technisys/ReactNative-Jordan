import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { Colors } from "../Constants/Colors";
import Input from "./Input";

export default function Card(props) {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);

  const clean = () => {
    setValue("");
  };

  const handleConfirm = () => {
    const numberParser = parseInt(value);
    if (numberParser !== NaN || numberParser <= 0 || numberParser > 99) return;
    setConfirm(true);
    setValue("");
  };
  return (
    <View style={{ ...props.style, ...style.container }}>
      <Text>Elija un Numero</Text>
      <Input style={style.input} />
      <View style={style.containerButton}>
        <Button title={"Limpiar"} onPress={clean} color={Colors.accent} />
        <Button
          title={"Confirmar"}
          onPress={handleConfirm}
          color={Colors.primary}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    shadowRadius: 6,
    elevation: 5,
    shadowColor: "black",
    marginTop: 20,
    borderColor: "gray",
    borderWidth: "1px",
    borderRadius: 10,
    alignItems: "center",
  },
  containerButton: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    marginVertical: 20,
    width: 80,
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    textAlign: "center",
  },
});
