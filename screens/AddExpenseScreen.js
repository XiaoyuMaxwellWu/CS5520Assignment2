import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Alert, Keyboard } from 'react-native';
import React from 'react';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import AddButtonLater from '../components/AddButtonLater';
import { writeToDB } from '../firebase/firestore';
export default function AddExpenseScreen({ navigation }) {
  const [amount, onChangeAmount] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  function onCancel() {
    console.log('cancel pressed');
  }
  async function onSubmit() {
    if (!amount || !description || isNaN(amount)) {
      Alert.alert('invalid output', 'Please check your input values', [{ text: 'OK', style: 'destructive' }]);
      return;
    }
    const expense = { amount: amount, description: description, important: false };
    await writeToDB(expense);
    navigation.navigate('All Expenses');
  }
  return (
    <View style={[Styles.background]}>
      <ScrollView>
        <Text style={[{ marginTop: 100, textAlign: 'center' }, styles.bigText]}>Your Expense</Text>
        <Text style={[styles.smallText, { marginTop: 25, marginLeft: 20 }]}>Amount</Text>
        <TextInput style={[styles.input, { height: 40 }]} onChangeText={onChangeAmount} value={amount} />
        <Text style={[styles.smallText, { marginTop: 8, marginLeft: 20 }]}>Description</Text>
        <TextInput multiline={true} style={[styles.input, { height: 90, textAlignVertical: 'top' }]} onChangeText={onChangeDescription} value={description} />
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => {
              onCancel();
            }}
            style={({ pressed }) => {
              return pressed && Styles.pressedItem;
            }}
            android_ripple={{ color: '#223355', foreground: true }}
          >
            <AddButtonLater left={0} text={'Cancel'}></AddButtonLater>
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
      </ScrollView>
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
});
