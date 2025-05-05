import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import jobIcon from '../../../assets/job logo.png'

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className="font-semibold">
        <NavLink
          to="/"
          style={(isActive) => ({
            color: isActive ? "green" : "",
          })}
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/signin"
          style={(isActive) => ({
            color: isActive ? "green" : "",
          })}
        >
          Signin
        </NavLink>
      </li>
    </>
  );

  const handleLogOut =()=>{
    logOutUser()
    .then(()=>{
      console.log('Successful LogOut')
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <div className="navbar bg-base-100 p-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-12" src={jobIcon} alt="" />
          <h3 className="text-3xl font-bold">Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-secondary">LogOut Here!</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="underline mr-5 font-bold">
              Register
            </Link>
            <button className="btn btn-sm btn-primary">
              <Link to="/signin">Sign In</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
