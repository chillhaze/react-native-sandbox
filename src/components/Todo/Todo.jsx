import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Todo({ todo }) {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
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
