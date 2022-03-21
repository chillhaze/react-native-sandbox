import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Todo({ todo, onRemove }) {
  const longPressHandler = () => {
    onRemove(todo.id);
  };

  return (
    <TouchableOpacity
      // default activeOpacity={0.2}
      activeOpacity={0.1}
      onPress={() => console.log("Pressed", todo.id)}
      onLongPress={longPressHandler}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
  },
  text: {},
});
