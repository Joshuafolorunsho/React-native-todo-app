import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Todos = ({ todos, handlePress }) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.container}>
      <Text style={styles.text}>
        {index + 1}. {item.todo}
      </Text>
      <TouchableOpacity onPress={() => handlePress(item.key)}>
        <AntDesign name="delete" size={18} color="coral" />
      </TouchableOpacity>
    </View>
  );

  return <FlatList data={todos} renderItem={renderItem} keyExtractor={({ key }) => key.toString()} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 18,
  },
});

export default Todos;
