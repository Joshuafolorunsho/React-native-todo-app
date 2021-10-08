import React from "react";
import { Button, View } from "react-native";

const Footer = ({ todos, handlePress }) => {
  return <View style={{ margin: 20, flex: 1 }}>{todos.length >= 2 && <Button title="Clear all todos" color="red" onPress={handlePress} />}</View>;
};

export default Footer;
