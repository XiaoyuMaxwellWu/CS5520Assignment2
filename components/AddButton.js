import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
export default function AddButton({ navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Add Expense');
      }}
      style={({ pressed }) => {
        return pressed && styles.pressedItem;
      }}
    >
      <Image style={{ width: 18, height: 18, tintColor: 'white', backgroundColor: Colors.deepBlue }} source={require('../assets/images/plus.png')}></Image>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pressedItem: {
    backgroundColor: '#222',
    opacity: 0.5,
  },
});
