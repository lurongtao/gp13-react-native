import React, { Component } from 'react'
import { Grid } from '@ant-design/react-native'
import http from '../../../utils/http'

interface Props {
  
}
interface State {
  hotlist: object[]
}

class Top10 extends Component<Props, State> {
  state = {
    hotlist: []
  }

  async componentDidMount() {
    let result = await http.get('http://localhost:8888/api/hot')
    this.setState({
      hotlist: result['hot-category']
    })
  }

  render() {
    let data = this.state.hotlist.map(value => {
      return {
        icon: value.img,
        title: value.title
      }
    })
    return (
      <Grid
        data={data}
        columnNum={3}
        isCarousel
        onPress={(_el, index) => alert(index)}
      />
    )
  }
}

export default Top10
