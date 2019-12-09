import React, { Component } from 'react'
import { WebView } from 'react-native-webview'

interface Props {
  
}
interface State {
  
}

export default class Map extends Component<Props, State> {
  state = {}

  render() {
    return (
      <WebView source={{ uri: 'https://map.baidu.com' }} />
    )
  }
}
