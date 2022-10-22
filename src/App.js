import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home';
import Usuario from "./callApi";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/usuarios" exact element={<Usuario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;