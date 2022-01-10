import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';


export function Home({navigation}){

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('Dolar') } 
        style={styles.head} >
            <Text style={styles.subtitle}> Real para Dólar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={ () => navigation.navigate('Euro') } 
        style={styles.head} >
            <Text style={styles.subtitle}> Real para Euro</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  head:{
    marginLeft:10,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#DDD',
    alignSelf: 'center',
    textAlignVertical: 'center',
    borderRadius: 7,
    backgroundColor: '#Fac123'
  },
  container:{
    flex:1,
    backgroundColor: '#DDD',
  },
  subtitle:{
    marginTop: 10,
    paddingBottom: 0,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  
})