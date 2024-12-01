import { Link } from "react-router-dom";
import logo from "../assets/more/logo1.png";
function Header() {
  return (
    <div className="bg-banner py-8">
      <div className="flex justify-center items-center gap-2">
        <img src={logo} height={90} width={75} alt="Logo" />
        <h1 className="text-6xl">Espresso Emporium</h1>
        <Link to="/users" className="btn btn-success  font-raleway">
          Users
        </Link>
        <Link to="/signup" className="btn btn-success font-raleway">
          Sign UP or Register
        </Link>
        <Link to="/signin" className="btn btn-success font-raleway">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Header;
