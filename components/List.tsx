import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { inject, observer } from 'mobx-react'
import { FlatList } from 'react-native'

import styles from './styleList'

interface Props {
  store?: any,
  listSize: number
}
interface State {
  refreshing: boolean,
  pageNo: number
}

@inject('store')
@observer
class List extends Component<Props, State> {
  state: State = {
    refreshing: false,
    pageNo: 0
  }

  _onRefresh = () => {
    this.setState({
      refreshing: true
    })

    setTimeout(() => {
      this.setState({
        refreshing: false
      })
    }, 3000)
  }
  
  _onEndReached = () => {
    this.setState((state) => {
      return {
        pageNo: state.pageNo + 1
      }
    })
  }

  render() {
    let data = this.props.store.list.slice(0, this.props.listSize * (this.state.pageNo + 1)).map(value => {
      return {
        key: value.id,
        icon: value.img,
        name: value.name,
        all_click: value.all_click,
        favorites: value.favorites
      }
    })

    let renderItem = ({item}) => {
      return (
        <View style={styles.hotcateWrap}>
          <View style={styles.hotcateImageWrap}>
            <Image style={styles.hotcateImage} source={{uri: item.icon}}></Image>
          </View>
          <View style={styles.hotcateTitlewrap}>
            <Text>{item.name}</Text>
          </View>
        </View>
      )
    }
    
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0}
      ></FlatList>
    )
  }
}

export default List