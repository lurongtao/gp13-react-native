import React, { Component } from 'react'
import List from '../../../components/List'

interface Props {

}
interface State {
  
}

export default class Top10 extends Component<Props, State> {
  render() {
    return (
      <List
        listSize={10}
      ></List>
    )
  }
}
