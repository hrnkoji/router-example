// @flow

import axios from "axios";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import type { User } from "domain/store/state/main";
import { updateUsersAction } from "domain/store/actions/main";

const logger = getLogger("Middleware/network");

// Make getUsers a importable function
export function getUsers() {
  // Make the network call via ajax using axios
  return axios.get("http://reqres.in/api/users?page=2")
      // Whenever it is ready, it will resolve the event and set its result
       .then(response => {
         return response.data.data.map( (user) => {
           return {
             firstName: user.first_name,
             lastName: user.last_name
           };
         });
       })
       // Or it will throw an error
      .catch( err => {
        console.error(err);
      });
}

// Make onUsersFromNetwork a importable function
export function onUsersFromNetwork(users : Array<User>) {
  logger.debug("Users from network");
  // Dispatch an action ...
  store.dispatch(updateUsersAction(users));
}
