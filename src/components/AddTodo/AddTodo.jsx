import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function addTodo({ onSubmit }) {
  const [todo, setTodo] = useState("");

  const pressHandler = () => {
    if (todo.trim()) {
      onSubmit(todo);
      setTodo("");
    } else {
      Alert.alert("Empty Todo is not allowed");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.textInput}
        // onChangeText={(text) => setTodo(text)} ниже корткий вариант записи
        onChangeText={setTodo}
        value={todo}
        placeholder="add some todo here"
        // autoFocus
        // autoCorrect={false}
        // autoCapitalize="none"
        // keyboardType="numeric"
      />
      <Button
        title="+"
        style={styles.button}
        onPress={pressHandler}
        // disabled={todo === "" ? true : false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "80%",
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 3,
  },
  button: {
    marginLeft: 5,
    paddingLeft: 15,
    backgroundColor: "teal",
  },
});
