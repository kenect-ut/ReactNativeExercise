import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Inbox = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello!</Text>
      <Text style={styles.text}>This is where we start</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    height: '100%'
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  header: {
    fontSize: 32,
    textAlign: 'center'
  },
  text: {
    textAlign: 'center'
  }
})

export default Inbox
