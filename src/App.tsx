import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index/>
          <Route path="s"/>
          <Route path="t"/>
          <Route path="a"/>
          <Route path="r"/>
          <Route path="t2"/>
          <Route path="s2"/>
          <Route path="e"/>
          <Route path="v"/>
          <Route path="login"/>
          <Route path="call"/>
          <Route path="info"/>
        </Route>
      </Routes>
    </>
  ); 
}

export default App;
