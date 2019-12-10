import React, { Component, createRef } from 'react'
import { View, Text, Switch, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
// import { Switch } from '@ant-design/react-native'
import { inject, observer } from 'mobx-react'
import { AsyncStorage } from 'react-native'

interface Props {
  switchStore?: any
}
interface State {
  hasPermission: boolean
  isClick: boolean,
  type: any
}

@inject('switchStore')
@observer
class Profile extends Component<Props, State> {
  // constructor(props) {
  //   super(props)
  //   this.camera = createRef()
  // }

  camera = null

  takePhoto = () => {
    this.setState({
      isClick: true
    })
  }

  takePicture = async () => {
    let photo = await this.camera.takePictureAsync()
    this.setState({
      isClick: false
    })
    alert(photo)
  }

  state: State = {
    hasPermission: false,
    isClick: false,
    type: Camera.Constants.Type.back
  }

  componentDidMount() {
    (async () => {
      // const { status } = await Camera.requestPermissionsAsync();
      this.setState({
        // hasPermission: status === 'granted'
        hasPermission: true
      })
    })();
  }

  render() {
    return (
      <>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>显示地图：</Text>
            <Switch 
              value={this.props.switchStore.show}
              onValueChange={show => {
                this.props.switchStore.changeShow(show)
                AsyncStorage.setItem('show', JSON.stringify(show))
              }}
            ></Switch>
          </View>
          <View>
            <TouchableOpacity
              onPress={this.takePhoto}
            >
              <View style={{
                borderStyle: 'solid', 
                borderColor: 'yellowgreen', 
                borderWidth: 1,
                width: 200,
                marginTop: 20,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text>点击拍照</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {
          this.state.isClick && (
            <View 
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}
            >
              <Camera 
                style={{ flex: 1 }} 
                type={this.state.type}
                ref={ref => {
                  this.camera = ref
                }}
              ></Camera>
              <TouchableOpacity
                onPress={this.takePicture}
              >
                <View
                  style={{
                    position: 'absolute',
                    bottom: 120,
                    borderRadius: 30,
                    width: 60,
                    height: 60,
                    backgroundColor: 'yellow',
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: '50%',
                    marginLeft: -30
                  }}
                >
                  <Text>拍</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }
        
      </>
    )
  }
}

export default Profile