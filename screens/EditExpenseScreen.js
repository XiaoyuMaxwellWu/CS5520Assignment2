import { View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import EditButton from '../components/EditButton';
import { deleteFromDB, updateToDB } from '../firebase/firestore';
export default function EditExpenseScreen({ route, navigation }) {
  async function onMarkImportant() {
    let expense = route.params.expense;
    expense.important = true;
    await updateToDB(expense);
    navigation.navigate('All Expenses');
  }
  async function onMarkDelete() {
    await deleteFromDB(route.params.expense.key);
    navigation.navigate('All Expenses');
  }
  return (
    <View style={Styles.background}>
      <Pressable
        onPress={() => {
          onMarkImportant();
        }}
        style={({ pressed }) => {
          return pressed && Styles.pressedItem;
        }}
      >
        <EditButton text={'Mark as important'} width={200} marginTop={40}></EditButton>
      </Pressable>
      <Pressable
        onPress={() => {
          onMarkDelete();
        }}
        style={({ pressed }) => {
          return pressed && Styles.pressedItem;
        }}
      >
        <EditButton text={'Delete'} width={180} marginTop={25}></EditButton>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    margin: 30,
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
