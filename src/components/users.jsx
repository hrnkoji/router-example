// @flow

import * as React from "react";

// Exports Users as a importable function
export function Users( { users } :
                       { users: Array<{firstName: string, lastName: string}> }) {

  const content = users.map( (user, index) => {
    if (user === undefined) {
      return '';
    }

    return (
      <li key={index}>
        {`First name: ${user.firstName}, last name: ${user.lastName}`}
      </li>
    );
  });

  // Return the component structure in HTML
  return(
    <div>
      <p>List of users</p>
      <ul>
        { content }
      </ul>
    </div>
  );
}
