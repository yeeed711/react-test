import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Homepages from "./components/Homepages";
import Docs from "./components/Docs";
import Tutorial from "./components/Tutorial";
import Community from "./components/Community";
import Blog from "./components/Blog";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
