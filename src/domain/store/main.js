// @flow

import { createStore } from "redux";
import { reduceApp } from "domain/store/reduce/main";

// Create the store and make it an importable constant
export const store = createStore(reduceApp);
