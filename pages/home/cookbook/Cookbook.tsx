import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import Header from './Header'
import Swiper from './Swiper'
import HotCate from './HotCate'
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
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 120
          }}
        >
          <Swiper></Swiper>
          <HotCate></HotCate>
          <Top10></Top10>
        </ScrollView>
      </View>
    )
  }
}
