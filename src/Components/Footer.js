import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footer: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        backgroundColor: '#BE5F7C',
        color: 'white',
        textAlign: 'center',
    },
})