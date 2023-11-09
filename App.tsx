import React, {useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';

function App(): JSX.Element {

  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
