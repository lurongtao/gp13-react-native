import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'
// import { Switch } from '@ant-design/react-native'
import { inject, observer } from 'mobx-react'

interface Props {
  switchStore?: any
}
interface State {
  show: boolean
}

@inject('switchStore')
@observer
class Profile extends Component<Props, State> {
  render() {
    return (
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>显示地图：</Text>
          <Switch 
            value={this.props.switchStore.show}
            onValueChange={show => {
              this.props.switchStore.changeShow(show)
            }}
          ></Switch>
        </View>
      </View>
    )
  }
}

export default Profile