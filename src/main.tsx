import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { reactRouter } from "./react-router/router";

// import { createRouter, RouterProvider } from "@tanstack/react-router";
// import { routeTree } from "./routeTree.gen";

// const tanstackRouter = createRouter({ routeTree });

// Register the router instance for type safety
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof tanstackRouter;
//   }
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={reactRouter} />
    {/* <RouterProvider router={tanstackRouter} /> */}
  </React.StrictMode>
);
