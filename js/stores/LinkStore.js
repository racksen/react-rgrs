import AppDispatcher from "../dispatcher/AppDispatcher";
import ActionTypes from "../constants/ActionTypes";

import {EventEmitter} from "events";

let _links = [];
let CHANGE_EVENT = 'Change';

class LinkStore extends EventEmitter {

  constructor(props) {
    super(props);
    AppDispatcher.register(action=>{
      console.log("3. In LinkStore");
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          _links = action.links;
          this.emitChange();
          break;
        default:
          //no op
      }
    });
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT,callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT,callback);
  }

  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  getAll(){
    return _links;
  }
}

export default new LinkStore();
