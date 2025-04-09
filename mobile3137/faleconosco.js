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
        <View style={styles.img}>
            <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYPF2CEEQGR18HTsCkM-Uq6euwqANzdbyPQ&s'}}/>
        </View>
        <View style={styles.texto}>
            FALE CONOSCO
        </View>
            <View style={styles.input}>
                <TextInput placeholder='Nome' value={nome} onChangeText={setNome}/>
            </View>
            <View style={styles.input}>
                <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
            </View>
            <View style={styles.input}>
                <TextInput placeholder='Mensagem' value={mensagem} onChangeText={setMensagem}/>
            </View>
                <Text>Olá, {nome}, seu email é {email}, sua mensagem é {mensagem}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
      },

  texto: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },

  img: {
    display: 'flex',
    widht: 100,
    height: 100,
    flexDirection: 'row',
    },

  input: {
    borderColor: '#000000',
    borderWidth: 1,
    width: 300,
  },
});