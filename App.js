import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Olá, seja bem vindo(a) ao FUEL GRAPH</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    alignItems: "center",
    justifyContent: "center",
  },
  textLogin: {
    fontSize: 15,
    fontWeight: "600",
    color: "#B6B6B6",
  },
});
