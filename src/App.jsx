import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Page from "./pages/Page";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Frontend from "../sub-components/services/Frontent/Frontend";
import WebDevelopment from "../sub-components/services/WebDevelopment/Web";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Page />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          {/* sub-components */}
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/development" element={<WebDevelopment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
