import React from "react";
import { InitializeFirebaseApp } from "./src/firebase";
export { wrapRootElement } from "./src/misc/wrap-root-element";

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
}

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }