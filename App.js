import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "./src/components/Navbar/Navbar";
import AddTodo from "./src/components/AddTodo/AddTodo";
import Todo from "./src/components/Todo/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Navbar title="Todo App!" />

      <View style={styles.addTodo}>
        <AddTodo onSubmit={addTodo} />
      </View>

      <View style={styles.todo}>
        {todos.length > 0 &&
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  addTodo: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  todo: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  basic: {},
});
