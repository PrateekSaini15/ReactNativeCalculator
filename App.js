import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';



export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.calculation}>
      <Text style={styles.calculationText}>{calculationText}</Text>
    </View>
      <View style={styles.result}>
      <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.operations}>
        <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacButton}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculation: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  result:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  buttons:{
    flex: 5,
    flexDirection: 'row',
  },
  numbers:{
    flex: 3,
    backgroundColor: 'green',
  },
  operations:{
    flex:1,
    backgroundColor: 'orange',
    justifyContent: 'space-around'
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  opacButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 30
  },
  resultText: {
    fontSize: 30,
  },
  calculationText: {
    fontSize: 30,
  }
});
