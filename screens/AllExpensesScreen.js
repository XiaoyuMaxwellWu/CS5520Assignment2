import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Styles from '../constants/Styles';
import ExpenseList from '../components/ExpenseList';
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../firebase/firebase-setup';

export default function AllExpensesScreen({ navigation }) {
  async function onItemPress(expense) {
    console.log('pressed');
    navigation.navigate('Edit Expense', { expense: expense });
  }

  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'expenses'), (querySnapshot) => {
      if (querySnapshot.empty) {
        setExpenses([]);
        return;
      }
      setExpenses(
        querySnapshot.docs.map((snapDoc) => {
          let data = snapDoc.data();
          data = { ...data, key: snapDoc.id };
          return data;
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={Styles.background}>
      <ExpenseList expenses={expenses} onItemPress={onItemPress}></ExpenseList>
    </View>
  );
}
