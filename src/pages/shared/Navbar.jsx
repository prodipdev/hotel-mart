import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="flex flex-wrap justify-between items-center gap-3 gap-y-1 py-3 shadow px-5 sm:px-10">
      <h2 className="text-xl font-bold">Hotel Mart</h2>{" "}
      <ul className="flex items-center gap-5">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/checkout"}>Checkout</Link>
        </li>
        {user ? (
          <>
            <li>
              {
                <img
                  className="h-7 w-7 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              }
            </li>
            <li
              onClick={() => logOut()}
              className="bg-rose-50 text-rose-500 hover:bg-rose-100 h-7 w-7 p-1 rounded-full flex items-center justify-center cursor-pointer"
            >
              <FiLogOut />
            </li>
          </>
        ) : (
          <>
            <li className="hover:bg-indigo-500 hover:text-white border border-indigo-500 py-1 px-2 rounded-md font-semibold duration-200">
              <Link to={"/login"}>Login</Link>
            </li>
            <li className="bg-indigo-500 border border-indigo-500 text-white py-1 px-2 rounded-md font-semibold">
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
