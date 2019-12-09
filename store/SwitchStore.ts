import { observable, action } from 'mobx'

class Store {
  @observable
  show: boolean = false

  @action
  changeShow(show): void {
    this.show = show
  }
}

export default new Store()