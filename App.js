import {React, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
      label="Enter Todo"
      value={text}
      style={styles.TodoText}
      mode="outlined"
      onChangeText={text => setText(text)}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TodoText:{
    width: 350,
    height: 50,
    position: 'absolute',
    top: 200,
    left: 20,
  }
});
