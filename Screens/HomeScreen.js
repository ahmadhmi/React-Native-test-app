import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import ToDoForm from '../Components/ToDoForm';
import ToDoList from '../Components/ToDoList';

export default function HomeScreen({navigation}) {
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
    <View>
        <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
        style={styles.button}
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BE5F7C',
        color: 'white',
        fontSize: 16,
        padding: 10,
        borderRadius: 5,
        margin: 10,
      },
})