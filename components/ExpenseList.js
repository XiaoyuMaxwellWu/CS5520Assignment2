import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { writeToDB } from '../firebase/firestore';
import Expense from './Expense';
import Styles from '../constants/Styles';
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
              return pressed && Styles.pressedItem;
            }}
          >
            <Expense amount={expense.amount} description={expense.description}></Expense>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
