import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log_out successfully");
    });
  };
  return (
    <nav className="bg-gray-100/50 text-gray-900 shadow sticky top-0 z-50 backdrop-blur-md ">
      <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Website Name */}
          <Link to="/">
            <div className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                <span className="text-blue-600">Task</span>Management
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          {user ? (
            <div className="flex items-center space-x-3">
              <img
                src={user?.photoURL}
                alt="Profile"
                className="h-8 w-8 md:h-10 md:w-10 object-cover rounded-full ring-2 ring-blue-500 "
              />
              <button
                onClick={handleLogOut}
                className="flex items-center gap-1 bg-blue-600 px-3 md:px-4 py-1 md:py-2 rounded-md text-gray-50 "
              >
                <IoMdLogOut className="text-lg" />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <button className=" flex items-center gap-1 bg-blue-600 px-3 md:px-4 py-1 md:py-2 rounded-md text-gray-50 ">
                  <IoMdLogIn className="text-lg" />
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
