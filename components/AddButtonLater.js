import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
export default function AddButtonLater({ text, left }) {
  return (
    <View style={[styles.textContainer, { marginLeft: left }]}>
      <Text style={styles.text}>{text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: 120,
    height: 40,
    borderRadius: 5,
    backgroundColor: Colors.deepBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});
