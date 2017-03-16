// @flow

import { Map } from "immutable";
import { getLogger } from "domain/logger";
import type { State, User } from "domain/store/state/main";

const logger = getLogger("Reduce/users");

export function updateUsers(state : State, users: Array<User>) : State {
  logger.debug(`Update users ${users.map((user) => user.firstName).toString()}`);
  return new Map(state).set("users", users).toJS();
}
