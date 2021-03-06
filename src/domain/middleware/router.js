// @flow

import page from "page";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import { getUsers, onUsersFromNetwork } from "domain/middleware/network";
import { updateCurrentPageAction } from "domain/store/actions/main";

const logger = getLogger("Middleware/router");

type OnRoute = (ctx: Object) => void;

function usersRouter(onRoute : OnRoute) {
  page("/users/", onRoute );
}

function defaultRouter(onRoute : OnRoute) {
  page("*", onRoute );
}

export function startRouters() {

  usersRouter(() => {
    logger.debug("Users route");
    store.dispatch(updateCurrentPageAction({ name: "USERS_PAGE" }));
  });

  defaultRouter(() => {
    logger.debug("Default route");
    store.dispatch(updateCurrentPageAction({ name: "HOME_PAGE" }));
  });

  page();
}
