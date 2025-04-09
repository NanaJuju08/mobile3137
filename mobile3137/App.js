import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Estoque from './estoque';
import FaleConosco from './faleconosco';

export default function App() {
  return(
    Estoque()
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  input: {
    borderColor: '#000000',
    borderWidth: 1,
    width: 300,
  },

  texto: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

/*   return (
    <View style={styles.container}>
      <View style={styles.texto}>
        BEM-VINDO AO LOGIN
      </View>
      <View style={styles.input}>
      <TextInput placeholder='EMAIL'/>
      </View> 
      <View style={styles.input}>
      <TextInput placeholder='SENHA'/>
      </View>
      <TouchableOpacity style={styles.button}>
          <Text>CLIQUE AQUI</Text>
      </TouchableOpacity>
    </View>
  ) */