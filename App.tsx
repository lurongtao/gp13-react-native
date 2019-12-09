import React, { Component } from 'react'

import { Provider } from 'mobx-react'

import { View, Text } from 'react-native'

import Home from './pages/home/Layout'
import Details from './pages/detail/Detail'

import store from './store/Store'
import switchStore from './store/SwitchStore'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home,
    Details,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ee742f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  state = {
    title: ''
  }

  handleTitleChange = title => {
    this.setState({
      title
    })
  }

  render() {
    return (
      <Provider store={store} switchStore={switchStore}>
        <AppContainer></AppContainer>
      </Provider>
    )
  }
}
