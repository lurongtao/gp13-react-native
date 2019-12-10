import { observable, action } from 'mobx'

class Store {
  @observable
  show: boolean = true

  @action.bound
  changeShow(show): void {
    this.show = show
  }
}

export default new Store()