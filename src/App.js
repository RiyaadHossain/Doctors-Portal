import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Appointment from "./Components/Pages/Appointment/AppointmentMain";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/HomePage/Home/Home";
import LogIn from "./Components/Pages/Login/LogIn";
import PrivateAuth from "./Components/Pages/Login/PrivateAuth";
import Signup from "./Components/Pages/Login/Signup";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <PrivateAuth>
              <Appointment />
            </PrivateAuth>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Toast With Success Message */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
