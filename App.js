import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onAdd = () => {
    setList([
      ...list,
      { id: Math.floor(Math.random() * 100) + 1, value: textInput },
    ]);
  };

  const onHandlerModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };
  const onDelete = (id) => {
    setList(list.filter((item) => item.id != id));
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.containerModal}>
          <View style={styles.infoContainer}>
            <Text>Estas Seguro que deseas borrar {itemSelected.value}?</Text>
            <View style={styles.containerButton}>
              <Button
                style={styles.button}
                title="Si"
                onPress={() => onDelete(itemSelected.id)}
              />
              <Button
                style={styles.button}
                title="No"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Escribe Aqui"
          onChangeText={(text) => setTextInput(text)}
          style={styles.input}
        />
        <Button title="Agregar" onPress={() => onAdd()} />
      </View>
      {list.length > 0 ? (
        <FlatList
          data={list}
          renderItem={(data) => (
            <View style={styles.containerItem}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
              >
                {data.item.value}
              </Text>
              <Button onPress={() => onHandlerModal(data.item)} title="X" />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No hay tareas</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: "100%", backgroundColor: "black" },
  containerInput: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
    marginTop: "3%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    width: "70%",
    color: "white",
  },
  containerItem: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: "3%",
    color: "white",
  },
  containerModal: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  infoContainer: {
    backgroundColor: "gray",
    width: "70%",
    height: "25%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "20%",
  },
  button: {
    width: "40%",
    height: "10%",
  },
});
