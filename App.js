
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView } from 'react-native';
import Field from 'Field.js';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://pbs.twimg.com/profile_images/1741493705884749825/tFPuUQW-_400x400.jpg" }}
      /><Text>Bem vindo</Text>
      <View style={styles.btns}>
        <Button title='Entrar2 ' />
        <Button title='Entrar 1' />
      </View>
      
      <Field></Field>


      <Button title='Entrar' onPress={() => alert('Você entrou!')} color='blue' />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
  },
  image: {
    height: 50,
    width: 50,
    marginTop: 100,
  },
  SafeArea: {
    flex: 1
  },
  btns: {
    flexDirection: 'row',
    color: 'black'

  }
});