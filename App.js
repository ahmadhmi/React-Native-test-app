import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';

function App() {

  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={ToDoList} />
        <stack.Screen name="About" component={ToDoForm} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
