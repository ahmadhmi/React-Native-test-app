import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ToDoList() {
  const todos = [
    {
      task: 'Learn React Native',
      done: false,
      key: '1',
    },
    {
      task: 'Learn Redux',
      done: true,
      key: '2',
    },
    {
      task: 'Learn React Navigation',
      done: false,
      key: '3',
    },
    {
      task: 'Learn React Native Paper',
      done: false,
      key: '4',
    },
    {
      task: 'Learn React Native Elements',
      done: false,
      key: '5',
    },
    {
      task: 'Learn React Native Vector Icons',
      done: false,
      key: '6',
    },
  ];
  return (
    <ScrollView>
      {todos.map(todo => (
        <Pressable
          style={[styles.task, todo.done && styles.taskDone]}
          key={todo.key}>
          <Text style={styles.text}>{todo.task}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#BE5F7C'
  },
  taskDone: {
    backgroundColor: '#499273',
    color: '#ccc',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
