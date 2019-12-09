import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

import Cookbook from './cookbook/Cookbook'
import Category from './category/Category'

const cookbook = require('../../assets/images/cookbook.png')
const cookbookActive = require('../../assets/images/cookbook-active.png')
const location = require('../../assets/images/location.png')
const locationActive = require('../../assets/images/location-active.png')
const menu = require('../../assets/images/menu.png')
const menuActive = require('../../assets/images/menu-active.png')
const more = require('../../assets/images/more.png')
const moreActive = require('../../assets/images/more-active.png')

interface Props {

}

interface State {
  selectedTab: string
}

export default class App extends Component<Props, State> {
  state: State = {
    selectedTab: 'cookbook'
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <TabNavigator
        tabBarStyle={{
          paddingBottom: 34,
          height: 84
        }}
      >
        <TabNavigator.Item
          selectedTitleStyle={{color: '#000'}}
          selected={this.state.selectedTab === 'cookbook'}
          title="美食大全"
          renderIcon={() => <Image style={styles.tabImg} source={cookbook} />}
          renderSelectedIcon={() => <Image style={styles.tabImg} source={cookbookActive} />}
          onPress={() => this.setState({ selectedTab: 'cookbook' })}>
          {<Cookbook></Cookbook>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selectedTitleStyle={{color: '#000'}}
          selected={this.state.selectedTab === 'category'}
          title="分类"
          renderIcon={() => <Image style={styles.tabImg} source={menu} />}
          renderSelectedIcon={() => <Image style={styles.tabImg} source={menuActive} />}
          onPress={() => this.setState({ selectedTab: 'category' })}>
          {<Category></Category>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selectedTitleStyle={{color: '#000'}}
          selected={this.state.selectedTab === 'map'}
          title="地图"
          renderIcon={() => <Image style={styles.tabImg} source={location} />}
          renderSelectedIcon={() => <Image style={styles.tabImg} source={locationActive} />}
          onPress={() => this.setState({ selectedTab: 'map' })}>
          {<Category></Category>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selectedTitleStyle={{color: '#000'}}
          selected={this.state.selectedTab === 'profile'}
          title="我的"
          renderIcon={() => <Image style={styles.tabImg} source={more} />}
          renderSelectedIcon={() => <Image style={styles.tabImg} source={moreActive} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {<Category></Category>}
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  tabImg: {
    width: 30,
    height: 30
  }
})
