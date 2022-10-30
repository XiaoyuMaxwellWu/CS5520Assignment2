import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
export default function Expense({ amount, description }) {
  return (
    <View style={styles.descContainer}>
      <Text style={Styles.text}>{description} </Text>
      <View style={styles.amountContainer}>
        <Text>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amountContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30,
  },
  descContainer: {
    padding: 15,
    margin: 30,
    borderRadius: 5,
    backgroundColor: Colors.deepBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
