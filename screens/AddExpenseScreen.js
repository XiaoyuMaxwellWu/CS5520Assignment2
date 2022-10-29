import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import React from 'react';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import AddButtonLater from '../components/AddButtonLater';
import { writeToDB } from '../firebase/firestore';
export default function AddExpenseScreen({ navigation }) {
  const [amount, onChangeAmount] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  function onCancel() {
    navigation.navigate('All Expenses');
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
          <AddButtonLater onAddFunction={onCancel} left={0} text={'Cancel'}></AddButtonLater>
          <AddButtonLater onAddFunction={onSubmit} left={20} text={'Submit'}></AddButtonLater>
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
