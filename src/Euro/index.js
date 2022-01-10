import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export function Euro({navigation}){

    const [input, setInput] = useState('');
    const [euro, setEuro] = useState(6.40);
    const [result, setResult] = useState(0);
    function calcEuro(){
        
        if (input === ''){
            alert('Digite um valor válido!');
        } else {
            setResult(input * euro)
        }
    }

  return(
    <SafeAreaView style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Entre com o valor em Real'
      value={input}
      keyboardType='numeric'
      onChangeText={ (input) => setInput(input)}
      />
      <TouchableOpacity 
        onPress={ calcEuro } 
        style={styles.head} >
            <Text style={styles.subtitle}> Real para Euro</Text>
        </TouchableOpacity>

        {result > 0 ?
            <View style={styles.input}>
                <Text>€ { parseFloat(result).toFixed(2) } </Text>
            </View>
        : null}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#FFF',
    padding:9,
    height: 45,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  head:{
    marginLeft:10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#DDD',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'orange'
  },
  container:{
    flex:1,
    backgroundColor: '#eeeeee',
  },
  title:{
    marginTop: 10,
    paddingBottom: 0,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  subtitle:{
    marginTop: 10,
    paddingBottom: 0,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
  resultado:{
    marginTop:30,
    backgroundColor: '#EEE',
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})