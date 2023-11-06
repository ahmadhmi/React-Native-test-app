import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
