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
            PRODUTOS CADASTRADOS
        </View>
        <View style={styles.img}>
            <Image style={styles.img} source={{uri: 'https://70730.cdn.simplo7.net/static/70730/sku/natal-lembrancinha-de-natal-kit-3-velas-aromaticas-40g-rolha-e-caixa-2023-p-1698078847229.jpg'}}/>
            <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8j64K5Uf_41l2FvAxxBedyQpoDyq1cdMLw&s'}}/>
        </View>
        <View style={styles.textinho}>
        Velas Aromáticas de Laranja e algodão
        </View>
        <View style={styles.img}>
            <Image style={styles.img} source={{uri: 'https://d2r9epyceweg5n.cloudfront.net/stores/304/048/rte/IMAGENS%20PARA%20BLOG%20(8)1.png'}}/>
        </View>
        <View style={styles.textinho}>
            Velas aromáticas de seda, tandra e algodão
        </View>
        <View style={styles.img}>
            <Image style={styles.img} source={{uri: 'https://cdn.awsli.com.br/800x800/2455/2455036/produto/250159790/whatsapp-image-2024-01-18-at-17-35-02-p2z9e8dczm.jpeg'}}/>
            <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdULbWmU2Pfso9Ghft1e4yrn5YnIGS_3-BkguSjT4w_EElr4I8wh9HQDgPCiKV7o11gsE&usqp=CAU'}}/>
        </View>
        <View style={styles.textinho}>
            Vela aromática de flor de cerejeira
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
    justifyContent: 'end',
     alignItems: 'center',
     fontSize: 25,
     fontWeight: 'bold'
  },

  textinho: {
    flex: 1,
    justifyContent: 'center',
     alignItems: 'center',
     fontSize: 20
  },


  img: {
    flex: 1,
    display: 'flex',
    widht: 100,
    height: 100,
    flexDirection: 'row',
    gap: 20,
    padding: 20
    }
});