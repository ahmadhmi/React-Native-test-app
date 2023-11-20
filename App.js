import React, {useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';

function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = task => {
    if (tasks.includes(task)) {
      return;
    }
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
