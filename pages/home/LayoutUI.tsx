import React, { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

import Cookbook from './cookbook/Cookbook'
import Category from './category/Category'
import Map from './map/Map'
import Profile from './profile/Profile'

const cookbook = require('../../assets/images/cookbook.png')
const cookbookActive = require('../../assets/images/cookbook-active.png')
const location = require('../../assets/images/location.png')
const locationActive = require('../../assets/images/location-active.png')
const menu = require('../../assets/images/menu.png')
const menuActive = require('../../assets/images/menu-active.png')
const more = require('../../assets/images/more.png')
const moreActive = require('../../assets/images/more-active.png')

function LayoutUI (props) {
  let [selectedTab, changeTab] = useState('profile')
  return (
    <TabNavigator
      tabBarStyle={{
        paddingBottom: 34,
        height: 84
      }}
    >
      <TabNavigator.Item
        selectedTitleStyle={{color: '#000'}}
        selected={selectedTab === 'cookbook'}
        title="美食大全"
        renderIcon={() => <Image style={styles.tabImg} source={cookbook} />}
        renderSelectedIcon={() => <Image style={styles.tabImg} source={cookbookActive} />}
        onPress={() => {
          changeTab('cookbook')
          props.onTitleChange('美食大全')
        }}>
        {<Cookbook {...this.props}></Cookbook>}
      </TabNavigator.Item>
      <TabNavigator.Item
        selectedTitleStyle={{color: '#000'}}
        selected={selectedTab === 'category'}
        title="分类"
        renderIcon={() => <Image style={styles.tabImg} source={menu} />}
        renderSelectedIcon={() => <Image style={styles.tabImg} source={menuActive} />}
        onPress={() => {
          changeTab('category')
          props.onTitleChange('分类')
        }}>
        {<Category></Category>}
      </TabNavigator.Item>
      {
        props.show && (
          <TabNavigator.Item
            selectedTitleStyle={{color: '#000'}}
            selected={selectedTab === 'map'}
            title="地图"
            renderIcon={() => <Image style={styles.tabImg} source={location} />}
            renderSelectedIcon={() => <Image style={styles.tabImg} source={locationActive} />}
            onPress={() => {
              changeTab('map')
              props.onTitleChange('美食地图')
            }}>
            {<Map></Map>}
          </TabNavigator.Item>
        )
      }
      <TabNavigator.Item
        selectedTitleStyle={{color: '#000'}}
        selected={selectedTab === 'profile'}
        title="我的"
        renderIcon={() => <Image style={styles.tabImg} source={more} />}
        renderSelectedIcon={() => <Image style={styles.tabImg} source={moreActive} />}
        onPress={() => {
          changeTab('profile')
          props.onTitleChange('更多')
        }}>
        {<Profile></Profile>}
      </TabNavigator.Item>
    </TabNavigator>
  )
}

const styles = StyleSheet.create({
  tabImg: {
    width: 30,
    height: 30
  }
})

export default LayoutUI
