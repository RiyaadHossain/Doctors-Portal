import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Appointment from "./Components/Pages/Appointment/Appointment";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/HomePage/Home/Home";
import LogIn from "./Components/Pages/LogIn/LogIn";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
