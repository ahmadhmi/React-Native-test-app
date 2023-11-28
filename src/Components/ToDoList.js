import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ToDoList({tasks}) {
  return (
    <ScrollView>
      {tasks.map(task => (
        <Pressable
          style={({pressed}) => [styles.task, pressed && styles.taskDone]}>
          <Text style={styles.text}>{task}</Text>
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
    backgroundColor: '#BE5F7C',
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
