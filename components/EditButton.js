import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
export default function EditButton({ text, width, marginTop }) {
  return (
    <View style={styles.container}>
      <View style={[styles.textContainer, { width: width, marginTop: marginTop }]}>
        <Text style={styles.text}>{text} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    backgroundColor: Colors.deepBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
