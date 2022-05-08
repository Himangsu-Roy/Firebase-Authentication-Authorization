import React from "react";
import { AuthContext } from "./context/Auth.context"


export default function Profile() {
  const currentUser = React.useContext(AuthContext);
  console.log(currentUser);
  return (
    <pre>{JSON.stringify(currentUser, null, 2)}</pre>
  )
}
