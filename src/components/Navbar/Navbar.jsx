import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Navbar({ title }) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: "100%",
    height: 100,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "teal",
  },
  text: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});
