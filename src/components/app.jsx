// @flow

import * as React from "react";

import Users from "components/users";
import Home from "components/home";

// Define App as an importable function
export function App({ currentPageName } :
                    { currentPageName: string } ) {

  // Define a 'content' variable which outputs content
  // according to the page routed to.
  const content = ((pageName) => {
    switch (pageName) {
      case "USERS_PAGE":
        return <Users />;
      default:
        return <Home />;
    }
  })(currentPageName);

  // Return the component structure in HTML
  return (
    <div>
      { content }
    </div>
  );
}
