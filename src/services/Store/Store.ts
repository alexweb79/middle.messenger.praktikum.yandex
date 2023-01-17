import {EventBus} from "../EventBus";
import {set} from '../helpers';

export enum StoreEvents {
  Updated = 'updated',
}

type Indexed<T = unknown> = {
  [key in string]: T;
};

class Store extends EventBus {
  private state: Indexed = {};

  public setState(path: string, value: unknown) {
    set(this.state, path, value);

    // метод EventBus
    // this.emit(StoreEvents.Updated, this.getState());
    this.emit(StoreEvents.Updated);
  }

  public getState() {
    return this.state;
  }

  public clearState() {
    this.state = {};
  }
}

export default new Store();
