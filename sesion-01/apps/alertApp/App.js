import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, Button } from 'react-native';
import logo from "./assets/logo.jpg";


export default function App() {
  const [state, setState] = useState({name: "", email: ""});

  const handleChange = (atribute) => (text) => setState({
    ...state,
    [atribute]: text
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={logo}
        resizeMode="cover"
        style={styles.logo}
      >
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          value={state.name}
          onChangeText={handleChange("name")}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu email" 
          value={state.email}
          onChangeText={handleChange("email")}
        />
        <View style={styles.btnContainer}>
          <Button
            style={styles.button}
            title={"Presioname"}
            onPress={() => alert(state.name.concat(" ", state.email))}
            disabled={!(state.name.length > 0 && state.email.length > 0)}
          />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    width: 350,
    fontSize: 16,
    borderColor: "white",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
  },
  btnContainer: {
    alignItems: "center",
  }
});
