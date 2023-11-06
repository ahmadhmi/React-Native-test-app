import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ToDoForm() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Add a new task" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#D4886A',
    borderRadius: 5,
    padding: 10,
    width: 100,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderBottomColor: '#ccc',
    flex: 1,
    marginRight: 10,
  },
});
