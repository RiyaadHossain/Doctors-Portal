import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/HomePage/Home/Home";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
