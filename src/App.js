import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Users from './pages/Users';
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;