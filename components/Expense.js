import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
export default function Expense({ amount, description }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{description} </Text>
      <View style={styles.amountContainer}>
        <Text>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
  },
  amountContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30,
  },
  textContainer: {
    padding: 15,
    margin: 30,
    borderRadius: 5,
    backgroundColor: Colors.deepBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
