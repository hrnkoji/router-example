// @flow

import { defaultState } from "domain/store/state/main";
import type { State } from "domain/store/state/main";
import type { Action } from "domain/store/actions/main";
import { updateCurrentPage } from "domain/store/reduce/currentPage";
import { updateUsers } from "domain/store/reduce/users";

export function reduceApp(state : State = defaultState, action : Action ) : State {
  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return updateCurrentPage(state, action.page);

    case "UPDATE_USERS":
      return updateUsers(state, action.users);

    default:
      return state;
  }
}
