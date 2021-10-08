import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    alignItems: "center",
  },

  text: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold",
  },
});

export default Header;
