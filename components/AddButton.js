import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
export default function AddButton({ navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Add Expense');
      }}
      style={({ pressed }) => {
        return pressed && Styles.pressedItem;
      }}
    >
      <Image style={{ width: 18, height: 18, tintColor: 'white', backgroundColor: Colors.deepBlue }} source={require('../assets/images/plus.png')}></Image>
    </Pressable>
  );
}
