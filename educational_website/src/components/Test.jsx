import { Link } from "react-router-dom";
const Test = () => {
  return (
    <>
      <div className="contain">
        <div className="men">
          <h1 className="heading">Test Series</h1>
          <img className="graphic1 testpic" src="images/karma.jpg" alt="" />
        </div>
        <Link to="/testbank">
          <button type="button" class="btn btn-success button">
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};
export default Test;
