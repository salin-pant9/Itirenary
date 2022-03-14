import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNotes from "./AddNotes";
import View from "./View";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/view" element={<View />} />
          <Route path="/add-notes" element={<AddNotes />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
