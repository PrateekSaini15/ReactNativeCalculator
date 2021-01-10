import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.calculation}></View>
      <View style={styles.result}></View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
      
        </View>
        <View style={styles.operations}>

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
  },
  result:{
    flex: 1,
    backgroundColor: 'yellow',
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
  }

});
