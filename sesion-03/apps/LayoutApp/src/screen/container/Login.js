import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import React from 'react'

import BeduLogo from "../../../assets/bedu.png";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{flex: 1, width: "75%", resizeMode: "contain"}} source={BeduLogo} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentItem}>
          <TextInput
            style={{fontSize: 20,}}
            placeholder="Email"
          />
        </View>
        <View style={styles.contentItem}>
          <TextInput
            style={{fontSize: 20,}}
            placeholder="Contraseña"
            textContentType={"password"}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.contentItem}>
          <Button
            title="Iniciar Sesión"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{fontWeight: "bold", fontSize: 20,}}>React Native</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  }, content: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 35,
  },
  contentItem: {
    fontSize: 20,
    marginBottom: 10,
  },
  footer: {
    flex: 1,
    alignItems: "center",
  }
});