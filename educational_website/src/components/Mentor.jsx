// import { Link } from "react-router-dom";

// const Mentor = () => {
//   return (
//     <>
//       <div className="contain">
//         <div className="men">
//           <h1 className="heading">Test Series + Mentorship</h1>
//           <h2 className="heading">Mentorship Batch</h2>
//           <img className="graphic1 testpic" src="images/poster2.jpg" alt="" />
//         </div>
//         <Link to="/mentorshipabout">
//           <button type="button" class="btn btn-success button1">
//             View Details
//           </button>
//         </Link>
//       </div>
//       <div className="contain">
//         <div className="men">
//           <h2 className="heading">Test Series Batch</h2>
//           <img
//             className="graphic1 testpic"
//             src="images/test series.png"
//             alt=""
//           />
//         </div>
//         <Link to="/testbank">
//           <button type="button" class="btn btn-dark button2">
//             View Details
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// };
// export default Mentor;
import { Link } from "react-router-dom";

const Mentor = () => {
  return (
    <>
      <div className="contain">
        <div className="men">
          <h1 className="heading">Personal Guidance + Mentorship</h1>
          <h2 className="heading">Mentorship Batch</h2>
          <img className="graphic1 testpic" src="images/baazigar.jpg" alt="" />
        </div>
        <Link to="/mentorshipabout">
          <button type="button" className="btn btn-success button1">
            View Details
          </button>
        </Link>
      </div>
      {/* <div className="contain">
        <div className="men">
          <h2 className="heading">Test Series Batch</h2>
          <img
            className="graphic1 testpic"
            src="images/test series.png"
            alt=""
          />
        </div>
        <Link to="/testbank">
          <button type="button" className="btn btn-warning button2">
            View Details
          </button>
        </Link>
      </div> */}
      <div className="contain">
        <div className="men">
          <h2 className="heading">In Personal Guidance</h2>
          <img className="graphic1 testpic" src="images/saarthi.jpg" alt="" />
        </div>
        <Link to="/saarthi">
          <button type="button" className="btn btn-primary button2">
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default Mentor;
