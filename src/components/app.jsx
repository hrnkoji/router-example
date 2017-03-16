// @flow

import * as React from "react";

import { Users } from "components/users";

// Define App as an importable function
export function App({ text, currentPageName, users } :
                    { text: string,
                      currentPageName: string,
                      users : Array<{firstName: string, lastName: string}> } ) {

  // Define a 'content' variable which outputs content
  // according to the page routed to.
  const content = ((pageName) => {
    switch (pageName) {
      case "USERS_PAGE":
        return <Users users={users} />;
      default:
        return(
          <div>
            <p> text: {text} </p>
            <a href="/users">List of users</a>
          </div>
        );
    }
  })(currentPageName);

  // Return the component structure in HTML
  return (
    <div>
      { content }
    </div>
  );
}
