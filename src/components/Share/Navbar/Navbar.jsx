import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log_out successfully");
    });
  };
  return (
    <nav className="bg-gray-100/50 text-gray-900 shadow sticky top-0 z-50 backdrop-blur-md ">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
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
                className="h-10 w-10 object-cover rounded-full ring-2 ring-blue-500 "
              />
              <button
                onClick={handleLogOut}
                className="bg-blue-600 px-3 py-2 rounded-md text-gray-50 "
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <button className="bg-blue-600 px-3 py-2 rounded-md text-gray-50 ">
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
