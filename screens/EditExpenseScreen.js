import { View, Alert } from 'react-native';
import React from 'react';
import Styles from '../constants/Styles';
import EditButton from '../components/EditButton';
import { deleteFromDB, updateToDB } from '../firebase/firestore';
export default function EditExpenseScreen({ route, navigation }) {
  async function onMarkImportant() {
    Alert.alert('Important', 'Are you sure you want to mark this as important?', [
      {
        text: 'No',
        onPress: () => {
          navigation.navigate('All Expenses');
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          let expense = route.params.expense;
          expense.important = true;
          await updateToDB(expense);
          navigation.navigate('All Expenses');
        },
      },
    ]);
  }
  async function onMarkDelete() {
    Alert.alert('Delete', 'Are you sure you want to delete this?', [
      {
        text: 'No',
        onPress: () => {
          navigation.navigate('All Expenses');
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await deleteFromDB(route.params.expense.key);
          navigation.navigate('All Expenses');
        },
      },
    ]);
  }
  return (
    <View style={Styles.background}>
      {route.params.expense.important === false && <EditButton editFunction={onMarkImportant} text={'Mark as important'} width={200} marginTop={40}></EditButton>}
      <EditButton editFunction={onMarkDelete} text={'Delete'} width={180} marginTop={25}></EditButton>
    </View>
  );
}
