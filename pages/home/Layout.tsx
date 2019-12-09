import React, { Component } from 'react'
import LayoutUI from './LayoutUI'
import { StatusBar } from 'react-native'
import { inject, observer } from 'mobx-react'

interface Props {
  navigation?: any
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

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
        ></StatusBar>
        <LayoutUI onTitleChange={this.handleTitleChage} {...this.props}></LayoutUI>
      </>
    )
  }
}

export default App