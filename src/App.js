import "./App.css";
import About from "./components/AboutPage/About";
import Discover from "./components/DiscoverPage/Discover";
import Emergency from "./components/Emergency/Emergency";

import GeneralPetCare from "./components/PetCare/GeneralPetCare";
import Home from "./main/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/about" element={<About />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/general" element={<GeneralPetCare />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
