import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Destination } from "./Destination/Destination";
import { Crew } from "./Crew/Crew";
import { Technology } from "./Technology/Technology";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
