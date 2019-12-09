import React, { Component } from 'react'
import List from '../../../components/List'
import Header from '../cookbook/Header'

interface Props {

}
interface State {
  
}

export default class Top10 extends Component<Props, State> {
  render() {
    return (
      <>
        <Header></Header>
        <List
          listSize={20}
        ></List>
      </>
    )
  }
}