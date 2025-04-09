import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

export default function FaleConosco() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
  return (
    <View style={styles.container}>
        <View style={styles.texto}>
            <Text>FALE CONOSCO</Text>
            <View style={styles.input}>
                <TextInput placeholder='Nome' value={nome} onChangeText={setNome}/>
                <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
                <TextInput placeholder='Mensagem' value={mensagem} onChangeText={setMensagem}/>
                <Text>Olá, {nome}, seu email é {email}, sua mensagem é {mensagem}.</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  texto: {
    flex: 1,
    justifyContent: 'center',
     alignItems: 'center',
  },

  img: {
    flex: 1,
    display: 'flex',
    widht: 100,
    height: 100
  },

  input: {
    borderColor: '#000000',
    borderWidth: 4
  }
});