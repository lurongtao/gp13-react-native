import { observable, action } from 'mobx'

class Store {
  @observable
  list: Array<object> = []

  @action
  loadData(list): void {
    this.list = list
  }
}

export default new Store()