import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import MainLayout from '../layouts/MainLayout';

export default function AboutScreen() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View>
        <Text>Todo App</Text>
        <Text>Author: Ahmad Heshmati</Text>
        <Text>Date: {currentDate}</Text>
        <button
          style={styles.button}
          onClick={() => navigation.navigate('Home')}>
          Go to Home
        </button>
      </View>
    </MainLayout>
  );
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
});
