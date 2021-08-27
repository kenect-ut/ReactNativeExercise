import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Inbox from './Inbox'

const Stack = createStackNavigator()

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Inbox' component={Inbox} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    height: '100%'
  }
})

export default App
