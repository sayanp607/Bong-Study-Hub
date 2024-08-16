import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Home2 from "./components/Home2";

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { GiTestTubes } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { MdLibraryBooks } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Refund from "./components/Refund";
import { FaRegHandshake } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { HiOutlineLogin } from "react-icons/hi";
import SearchBar from "./components/SearchBar";
import StudyMaterial from "./components/StudyMaterial";
import Test from "./components/Test";
import Submit from "./components/Submit";
import TestBank from "./components/TestBank";
import Books from "./components/Books";
import Saarthi from "./components/Saarthi";
import Mentor from "./components/Mentor";
import Login from "./components/Login";
import Mentorship from "./components/Mentorship";
import SignUp from "./components/SignUp";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/bong.jpg"
              alt="Bong Study Hub"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/home">
            <IoMdHome />
            Home
          </Link>
          <Link to="/mentorship">
            <FaRegHandshake />
            Mentorship
          </Link>
          <Link to="/test">
            <GiTestTubes />
            Test Series{" "}
          </Link>
          <Link to="/contact">
            <FaWhatsapp />
            Contact Us
          </Link>

          <Link to="/study">
            <MdLibraryBooks />
            Study Material
          </Link>
        </nav>

        <SearchBar />
        <div className="action_bar">
          <div className="action_container">
            <Link to="/signup">
              <button
                onClick={() =>
                  alert("If you already have an account , then go for Log In.")
                }
                type="button"
                class="btn btn-success"
              >
                <PiSignInBold />
                Sign Up
              </button>
            </Link>
          </div>

          <div className="action_container">
            <Link to="/login">
              <button type="button" class="btn btn-success">
                <HiOutlineLogin />
                Log In
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/study" element={<StudyMaterial />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testbank" element={<TestBank />} />
        <Route path="/saarthi" element={<Saarthi />} />
        <Route path="/contact" element={<Books />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/mentorship" element={<Mentor />} />
        <Route path="/mentorshipabout" element={<Mentorship />} />
      </Routes>
    </Router>
  );
};

export default App;
