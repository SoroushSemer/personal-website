import { Component, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import Socials from "./components/socials/socials.components";
import Footer from "./components/footer/footer.components";
import HomePage from "./pages/homepage/homepage.component";
import ProjectsPage from "./pages/projectspage/projectspage.component";
import ExperiencePage from "./pages/experiencepage/experiencepage.component";
import DocumentsPage from "./pages/documentspage/documentspage.components";

import "./App.scss";

import { getProjects } from "./utils/firebase/firebase.utils";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/experience" element={<ExperiencePage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/documents" element={<DocumentsPage />} />
      </Routes>
      <Socials />
      <Footer />
    </div>
  );
};

export default App;
