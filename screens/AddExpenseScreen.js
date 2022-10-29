import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React from 'react';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import AddButtonLater from '../components/AddButtonLater';
export default function AddExpenseScreen() {
  const [amount, onChangeAmount] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  function onCancel() {
    console.log('cancel pressed');
  }
  function onSubmit() {
    console.log('submit pressed');
  }
  return (
    <View style={[Styles.background]}>
      <Text style={[{ marginTop: 100, textAlign: 'center' }, styles.bigText]}>Your Expense</Text>
      <Text style={[styles.smallText, { marginTop: 25, marginLeft: 20 }]}>Amount</Text>
      <TextInput style={[styles.input, { height: 40 }]} onChangeText={onChangeAmount} value={amount} />
      <Text style={[styles.smallText, { marginTop: 8, marginLeft: 20 }]}>Description</Text>
      <TextInput style={[styles.input, { height: 90 }]} onChangeText={onChangeDescription} value={description} />
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            onCancel();
          }}
          style={({ pressed }) => {
            return pressed && styles.pressedItem;
          }}
        >
          <AddButtonLater left={20} text={'Cancel'}></AddButtonLater>
        </Pressable>
        <Pressable
          onPress={() => {
            onSubmit();
          }}
          style={({ pressed }) => {
            return pressed && styles.pressedItem;
          }}
        >
          <AddButtonLater left={20} text={'Submit'}></AddButtonLater>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  bigText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  smallText: {
    color: Colors.textBlue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    margin: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.textInputColor,
    borderRadius: 10,
    borderWidth: 0,
  },
  pressedItem: {
    backgroundColor: '#222',
    opacity: 0.5,
  },
});
