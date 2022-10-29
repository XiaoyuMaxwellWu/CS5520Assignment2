import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, BlurView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpensesScreen from './screens/AllExpensesScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import EditExpenseScreen from './screens/EditExpenseScreen';
import ImportantExpensesScreen from './screens/ImportantExpensesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './constants/Colors';
import React from 'react';
import AddButton from './components/AddButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  function Home() {
    return (
      <Tab.Navigator initialRouteName="All Expenses" screenOptions={{ tabBarShowLabel: false, tabBarStyle: { backgroundColor: Colors.deepBlue }, headerStyle: { backgroundColor: Colors.deepBlue }, headerTintColor: '#fff', headerTitleAlign: 'center' }}>
        <Tab.Screen
          name="All Expenses"
          component={AllExpensesScreen}
          options={({ navigation }) => ({
            // navigation.navigate('Add Expense');
            headerRight: () => {
              return (
                <View style={{ marginRight: 20 }}>
                  <AddButton navigation={navigation}></AddButton>
                </View>
              );
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ width: 40, height: 30, tintColor: focused ? Colors.allExpenseColor : 'grey' }} source={require('./assets/images/usDollar.png')}></Image>
                  <Text style={{ color: focused ? Colors.allExpenseColor : 'grey', fontSize: 12 }}>All Expenses</Text>
                </View>
              );
            },
          })}
        />
        <Tab.Screen
          name="Important Expenses"
          component={ImportantExpensesScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ width: 30, height: 25, tintColor: focused ? Colors.allExpenseColor : 'grey' }} source={require('./assets/images/importExpense.png')}></Image>
                  <Text style={{ top: 5, color: focused ? Colors.allExpenseColor : 'grey', fontSize: 12 }}>Important Expenses</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ tabBarShowLabel: false, headerStyle: { backgroundColor: Colors.deepBlue }, headerTintColor: '#fff', headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Edit Expense" component={EditExpenseScreen} />
        <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
