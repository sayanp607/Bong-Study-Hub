import { Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import MyForm from "./MyForm";
const Men = () => {
  return (
    <>
      <div className="contain">
        <div className="men">
          <h1 className="heading">Featured</h1>
          <img className="graphic1" src="images/baazigar.jpg" alt="" />
        </div>
        <Link to="/">
          <button type="button" class="btn btn-danger button">
            View Details
          </button>
        </Link>
      </div>
      {/* <div className="submit">
        <h1>Submit Testimonial</h1>
      </div> */}
      <div className="about">
        <h1>About Bong Study Hub</h1>
      </div>
      <div className="bsh">
        <p>
          Bong Study Hub is an Educational platform. Where we provide personal
          one to one Mentorship for all JEE and WBJEE aspirants.If you face any
          problem regarding your preparation don't worry we are always here to
          help you as a big brother,Mentor also a family member.
        </p>
      </div>
      <div className="getintouch">
        <h1>Get In Touch</h1>
      </div>
      <div className="MyForm">
        <MyForm />
      </div>
      {/* <Wplink /> */}
      <Footer />
    </>
  );
};
export default Men;
