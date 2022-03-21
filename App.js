import React, { useState } from "react";
import { View, ScrollView, FlatList, Text, StyleSheet } from "react-native";
import Navbar from "./src/components/Navbar/Navbar";
import AddTodo from "./src/components/AddTodo/AddTodo";
import Todo from "./src/components/Todo/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    // { id: "1", title: "test" },
    // { id: "2", title: "test" },
    // { id: "3", title: "test" },
    // { id: "4", title: "test" },
    // { id: "5", title: "test" },
    // { id: "6", title: "test" },
    // { id: "7", title: "test" },
    // { id: "8", title: "test" },
    // { id: "9", title: "test" },
    // { id: "10", title: "test" },
    // { id: "11", title: "test" },
    // { id: "12", title: "test" },
  ]);

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Navbar title="Todo App!" />

      <View style={styles.addTodo}>
        <AddTodo onSubmit={addTodo} />
      </View>

      <FlatList
        style={styles.todo}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        keyExtractor={(item) => item.id}
        
      />

      {/* <ScrollView style={styles.todo}>
        {todos.length > 0 &&
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ScrollView> */}
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
