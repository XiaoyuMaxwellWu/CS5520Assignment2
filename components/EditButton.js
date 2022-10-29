import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
export default function EditButton({ text, width, marginTop, editFunction }) {
  return (
    <Pressable
      onPress={() => {
        editFunction();
      }}
      style={({ pressed }) => {
        return pressed && Styles.pressedItem;
      }}
    >
      <View style={styles.container}>
        <View style={[styles.textContainer, { width: width, marginTop: marginTop }]}>
          <Text style={styles.text}>{text} </Text>
        </View>
      </View>
    </Pressable>
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
