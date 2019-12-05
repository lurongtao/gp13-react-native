import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Header from './Header'
import Swiper from './Swiper'
import Top10 from './Top10'

interface Props {

}

interface State {
  
}


export default class Cookbook extends Component<Props, State> {
  state = {}

  render() {
    return (
      <View>
        <Header></Header>
        <Swiper></Swiper>
        <Top10></Top10>
      </View>
    )
  }
}
