// @flow

import Logger from "js-logger";

// Initialise logger.
Logger.useDefaults();

// Export getLogger as an importable function
export function getLogger(name : string) : Logger {
  return Logger.get(name);
}
