import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Carousel } from '@ant-design/react-native'
import { observer, inject } from 'mobx-react'
import http from '../../../utils/http'

const swiper1 = require('../../../assets/images/swiper-1.png')

interface Props {
  store: any
}

interface State {
  x: number
}

@inject('store')
@observer
class Swiper extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }
  
  state: State = {
    x: 0
  }

  async componentDidMount() {
    let result = await http.get('http://localhost:9000/api/list')
    this.props.store.loadData(result.data)
  }

  render() {
    return (
      <Carousel
        autoplay
        infinite
      >
        {
          this.props.store.list.slice(0, 5).map((value, index) => {
            return <Image key={value.id} style={styles.swiperImg} source={{uri: value.img}}></Image>
          })
        }
      </Carousel>
    )
  }
}

const styles = StyleSheet.create({
  swiperImg: {
    height: 0,
    paddingBottom: '66.66667%',
    width: '100%'
  }
})

export default Swiper
