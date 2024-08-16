import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <Link to="/refund">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Refunds & Cancellation Policy
              </a>
            </li>
          </ul>
        </Link>

        <p className="text-center text-muted">© 2024 Bong Study Hub</p>
      </footer>
    </div>
  );
};
export default Footer;
