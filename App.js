import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [plate, setPlate] = useState("");
  console.log(plate);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require("./assets/logo.png")} />
      <Text style={styles.textLogin}>Olá, seja bem vindo(a) ao FUEL GRAPH</Text>
      <SafeAreaView>
        <Text style={styles.label}>Placa do veículo</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a placa do veículo"
          placeholderTextColor={"#7E7E7E"}
          onChangeText={(text) => setPlate(text)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.footerLogin}>
        <Text style={styles.developer}>Desenvolvido por: Tales Ferreira</Text>
        <Text style={styles.rights}>2023 - Todos os Direitos Reservados</Text>
        <Text style={styles.version}>Versão 1.0.1</Text>
      </SafeAreaView>
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
    paddingBottom: 40,
    paddingTop: 10,
  },
  label: {
    color: "#B6B6B6",
    paddingHorizontal: 15,
    marginBottom: -7,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: "#3D3D3D",
    display: "flex",
    width: 345,
    height: 50,
    padding: 10,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: "#00AF1C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 345,
    height: 50,
    padding: 10,
  },
  textButton: {
    color: "#FAFAFA",
    fontSize: 18,
    fontWeight: "400",
  },
  footerLogin: {
    display: "flex",
    alignItems: "center",
    marginTop: 90,
    marginBottom: -150,
  },
  developer: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
  rights: {
    color: "#ABABAB",
    fontSize: 14,
  },
  version: {
    color: "#ABABAB",
    fontSize: 14,
  },
});
