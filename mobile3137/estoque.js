import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

export default function Estoque() {

  return (
    <View style={styles.container}>
        <View style={styles.texto}>
            <Text>PRODUTOS CADASTRADOS</Text>
        </View>
        <View style={styles.img}>
            <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYPF2CEEQGR18HTsCkM-Uq6euwqANzdbyPQ&s'}}/>
            <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYPF2CEEQGR18HTsCkM-Uq6euwqANzdbyPQ&s'}}/>
        </View>
        <View style={styles.img}>
            <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYPF2CEEQGR18HTsCkM-Uq6euwqANzdbyPQ&s'}}/>
            <Text>Vela Aromática</Text>
        </View>
        <View style={styles.img}>
            <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYPF2CEEQGR18HTsCkM-Uq6euwqANzdbyPQ&s'}}/>
            <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYPF2CEEQGR18HTsCkM-Uq6euwqANzdbyPQ&s'}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  texto: {
    flex: 1,
    backgroundColor: '#f194ff',
    justifyContent: 'center',
     alignItems: 'center',
     fontSize: 50
  },

  img: {
    flex: 1,
    display: 'flex',
    widht: 100,
    height: 100,
    flexDirection: 'row',
    }
});