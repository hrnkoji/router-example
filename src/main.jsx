// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";

import { getLogger } from "domain/logger";

import { store } from "domain/store/main";
import { startRouters } from "domain/middleware/router";
import type { State } from "domain/store/state/main";

import { App } from "components/app";

// import stylesheets
require("style/main.scss");

// Make logger available
const logger = getLogger("Main");

// This function is responsible for rendering the application
function render() : void {

  // Log the rendering start time
  logger.time("Render");

  // Retrieve the application state from the Store
  const state : State = store.getState();

  // Select your props from the state
  const text = "hello";
  const currentPageName = state.currentPage.name;

  // Pass all props to the App component, and render to the target DOM element.
  ReactDOM.render(
    <App text={text} currentPageName={currentPageName} />,
    document.getElementById("app")
  );

  // Log the rendering end time
  logger.timeEnd("Render");

}

// Subscribe to the store and to ensure it will re-render your app
// whenever there is a store update.
store.subscribe(render);

// Start routing
// @see domain/middleware/router.js
startRouters();

// Start hot module
if (module.hot) {
  module.hot.accept();
  render();
}
