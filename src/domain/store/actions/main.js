// @flow

import type { Page, User } from "domain/store/state/main";

export type UpdateCurrentPageAction = {
  type: "UPDATE_CURRENT_PAGE",
  page: Page
}

export type UpdateUsersAction = {
  type: "UPDATE_USERS",
  users: Array<User>
}

export type Action = UpdateCurrentPageAction | UpdateUsersAction;

export function updateCurrentPageAction(page: Page) : UpdateCurrentPageAction {
  return { type: "UPDATE_CURRENT_PAGE", page };
}

export function updateUsersAction(users: Array<User>) {
  return { type: "UPDATE_USERS", users}
}
