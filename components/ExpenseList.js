import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { writeToDB } from '../firebase/firestore';
import Expense from './Expense';

export default function ExpenseList({ expenses, onItemPress }) {
  return (
    <ScrollView>
      {expenses.map((expense) => {
        return (
          <Pressable
            key={expense.key}
            onPress={() => {
              onItemPress(expense);
            }}
            style={({ pressed }) => {
              return pressed && styles.pressedItem;
            }}
          >
            <Expense amount={expense.amount} description={expense.description}></Expense>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {},
  pressedItem: {
    backgroundColor: '#222',
    opacity: 0.5,
  },

  textContainer: {
    padding: 15,
    margin: 30,
    borderRadius: 5,
    backgroundColor: Colors.deepBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    borderRadius: 5,
    fontSize: 20,
  },
  amountContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30,
  },
});
