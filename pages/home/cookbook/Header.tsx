import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

interface Props {
  
}
interface State {
  
}

class Header extends Component<Props, State> {
  state = {}

  render() {
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={styles.title}>美食大全</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 78,
    backgroundColor: '#ee742f',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 34,
    borderColor: '#ee742f'
  },

  title: {
    fontSize: 18,
    color: '#fff'
  }
})

export default Header
