import "./App.css";
import Discover from "./components/DiscoverPage/Discover";
import Home from "./main/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
