import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
export default function AddButtonLater({ text, left, onAddFunction }) {
  return (
    <Pressable
      onPress={() => {
        onAddFunction();
      }}
      style={({ pressed }) => {
        return pressed && Styles.pressedItem;
      }}
      android_ripple={{ color: '#223355', foreground: true }}
    >
      <View style={[styles.textContainer, { marginLeft: left }]}>
        <Text style={styles.text}>{text} </Text>
      </View>
    </Pressable>
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
