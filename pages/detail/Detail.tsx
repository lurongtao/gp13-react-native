import React, { Component } from 'react'
import { View, Text } from 'react-native'

interface Props {
  navigation?: any
}
interface State {
  
}

export default class Detail extends Component<Props, State> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  }
  
  state = {}

  render() {
    return (
      <View>
        <Text>detail</Text>
      </View>
    )
  }
}
