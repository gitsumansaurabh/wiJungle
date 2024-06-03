import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import List from "./components/List";

import Proto from "./components/Proto";
import Event from "./components/Event";
import Category from "./components/Category";
const Severity = React.lazy(() => import("./components/Severity"));

const SrcIp = React.lazy(() => import("./components/SrcIp"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <List>
          <Event></Event>
          <Proto></Proto>

          <Suspense fallback={<p>...</p>}>
            <div>
              <Severity></Severity>
            </div>

            <SrcIp></SrcIp>

            <Category></Category>
          </Suspense>
        </List>
      </>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
