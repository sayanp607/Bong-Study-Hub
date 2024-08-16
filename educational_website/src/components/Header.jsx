// import { IoPersonCircle } from "react-icons/io5";
// import { FaHeartCirclePlus } from "react-icons/fa6";
// import { IoBagCheckSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdHome } from "react-icons/io";
import { GiTestTubes } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { MdLibraryBooks } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { HiOutlineLogin } from "react-icons/hi";
// import SearchBar from "./SearchBar";
// const Header = () => {
//   const bag = useSelector((store) => store.bag);
return (
  <>
    {/* <header> */}
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
      {/* <Link to="/courses">
            <FaGraduationCap />
            Courses
          </Link> */}
      <Link to="/study">
        <MdLibraryBooks />
        Study Material
      </Link>
      <Link to="/test">
        <GiTestTubes />
        Test Series{" "}
      </Link>
      <Link to="/books">
        <FaWhatsappSquare />
        Contact Us
      </Link>
      <Link to="/mentorship">
        <FaRegHandshake />
        Mentorship
      </Link>
    </nav>
    {/* <div className="search_bar">
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div> */}
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

      {/* <Link className="action_container" to="/bag">
            <IoBagCheckSharp />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link> */}
    </div>
    {/* </header> */}
  </>
);
// };
export default Header;
