import { Alert, Button, StyleSheet, TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { StatusBar } from "expo-status-bar";
import Footer from "./components/Footer";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (value) => {
    setTodo(value);
  };

  const handlePress = () => {
    if (todo.length < 5) {
      Alert.alert("OOPS!", "Your todo must not be less than 5 chars", [{ text: "Understood" }]);
      return;
    }
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.push({
        todo,
        key: prevTodos.length + 1,
      });
      return newTodos;
    });

    setTodo("");
  };

  const handlePressDelete = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const handlePressClearAll = () => {
    setTodos([]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <View style={styles.formContainer}>
            <TextInput placeholder="new todo..." style={styles.input} value={todo} onChangeText={handleChange} />
            <Button color="coral" title="Add Todo" style={styles.button} onPress={handlePress} />
          </View>
          <Todos todos={todos} handlePress={handlePressDelete} />
        </View>
        <Footer todos={todos} handlePress={handlePressClearAll} />
        <StatusBar style="dark" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  body: {
    margin: 20,
    flex: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: "#666",
    width: "100%",
    padding: 8,
    textAlign: "center",
    marginBottom: 10,
    fontSize: 17,
  },

  button: {
    backgroundColor: "coral",
    color: "white",
    fontWeight: "bold",
  },
});
