import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.components";
import HomePage from "./pages/homepage/homepage.component";
import ProjectsPage from "./pages/projectspage/projectspage.component";
import AboutMePage from "./pages/aboutmepage/aboutmepage.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Soroush Semerkant",
    };
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutMePage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/documents" element={<ProjectsPage />} />
        </Routes>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
