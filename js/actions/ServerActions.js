import AppDispatcher from "../dispatcher/AppDispatcher";
import ActionTypes from "../constants/ActionTypes";

let ServerActions={
  receiveLinks(links){
    console.log("2. In ServerActions");

    AppDispatcher.dispatch({
      actionType : ActionTypes.RECEIVE_LINKS,
      links : links
    });
  }
}

export default ServerActions;
