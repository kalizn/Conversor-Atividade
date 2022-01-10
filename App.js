import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './src/Home';
import { Euro } from './src/Euro';
import { Dolar } from './src/Dolar';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} 
           options={({ navigation }) => ({
            title: 'Conversor de Moedas do Antonio Pedrosa',
            headerTitleStyle: styles.headerTitle,
          })}/>
          <Stack.Screen name='Dolar' component={Dolar}  
          options={({ navigation }) => ({
            title: 'Conversor de Moedas do Antonio Pedrosa',
            headerTitleStyle: styles.headerTitle,
          })}/>
          <Stack.Screen name='Euro' component={Euro}  
            options={({ navigation }) => ({
            title: 'Conversor de Moedas do Antonio Pedrosa',
            headerTitleStyle: styles.headerTitle,
          })}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 15
  }
});

export default App;
