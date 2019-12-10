import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Grid } from '@ant-design/react-native'
import http from '../../../utils/http'

import styles from './style-cookbook'

interface Props {
  navigation?: any
}
interface State {
  hotlist: object[]
}

class HotCate extends Component<Props, State> {
  state = {
    hotlist: []
  }

  async componentDidMount() {
    let result = await http.get('http://localhost:9000/api/hot')
    this.setState({
      hotlist: result['hot-category']
    })
  }

  render() {
    let renderItem = (item) => {
      return (
        <View style={styles.gridWrap}>
          <View>
            <Image style={styles.image} source={{uri: item.icon}}></Image>
          </View>
          <View>
            <Text>{item.title}</Text>
          </View>
        </View>
      )
    }

    let data = this.state.hotlist.map(value => {
      return {
        key: value.id,
        icon: value.img,
        title: value.title
      }
    })
    return (
      <Grid
        data={data}
        columnNum={3}
        onPress={(_el, index) => {
          console.log(_el)
          this.props.navigation.push('Details', {
            title: _el.title
          })
        }}
        renderItem={renderItem}
        hasLine={false}
      />
    )
  }
}

export default HotCate
