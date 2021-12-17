import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input(props) {
  const [value, setValue] = useState("");
  const handlerInput = (text) => {
    setValue(text.replace(/[^0-9]/g), "");
  };

  return (
    <TextInput
      style={props.style}
      value={value}
      onChangeText={handlerInput}
      keyboardType={"numeric"}
      maxLength={2}
    />
  );
}
