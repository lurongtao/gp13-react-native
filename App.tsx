import React, { Component } from 'react'
import Layout from './pages/home/Layout'

import { Provider } from 'mobx-react'

import store from './store/Store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    )
  }
}
