import React, { Component } from 'react'
import LayoutUI from './LayoutUI'
import { StatusBar } from 'react-native'
import { inject, observer } from 'mobx-react'
import { AsyncStorage } from 'react-native'

interface Props {
  navigation?: any,
  switchStore?: any
}

interface State {
  selectedTab: string
}

@inject('switchStore')
@observer
class App extends Component<Props, State> {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title') || '美食大全'
    }
  }
  
  state: State = {
    selectedTab: 'cookbook'
  }

  constructor(props: Props) {
    super(props)
  }

  handleTitleChage = title => {
    this.props.navigation.setParams({
      title
    })
  }

  async componentDidMount() {
    let result = await AsyncStorage.getItem('show')
    let show = result === null ? true : JSON.parse(result)
    this.props.switchStore.changeShow(show)
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
        ></StatusBar>
        <LayoutUI 
          onTitleChange={this.handleTitleChage}
          show={this.props.switchStore.show}
        ></LayoutUI>
      </>
    )
  }
}

export default App