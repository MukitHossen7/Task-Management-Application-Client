import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/undraw_fingerprint_kdwq.svg";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Login = () => {
  const { loginUsers, googleUser } = useContext(AuthContext);
  const [signToggle, setSignToggle] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const email = data.email;
    const password = data.password;

    console.log(email, password);

    try {
      await loginUsers(email, password);
      toast.success("Login successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credential Email/Password");
    } finally {
      reset();
      // setLoading(false);
    }
  };
  const handleLoginGoogle = async () => {
    try {
      const { user } = await googleUser();
      toast.success("Google Login successful");
      navigate("/");
      const userData = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      };
      await axiosPublic.post(`/users`, userData);
    } catch (error) {
      console.log(error);
      toast.error("Google Login failed please try again");
    } finally {
      // setLoading(false);
    }
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  return (
    <div>
      <div className="flex flex-col md:gap-4 lg:gap-10 lg:flex-row justify-center items-center bg-white w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto py-10 md:py-14 lg:py-20">
        <div className="">
          <img
            src={loginImg}
            className="w-full md:w-[400px] lg:w-[500px]"
          ></img>
        </div>
        <div className="flex flex-col w-full md:w-[500px]  p-6  sm:p-10text-gray-900">
          <div className="mb-4 text-center">
            <h1 className="my-3 text-3xl font-semibold">Log In</h1>
          </div>
          <form
            className="space-y-6 ng-untouched ng-pristine ng-valid"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="space-y-4">
              <div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                </div>
                <input
                  value="mukit@gmail.com"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-blue-500  text-gray-800"
                  data-temp-mail-org="0"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs font-medium">
                    Email is Required
                  </span>
                )}
              </div>
              <div className="relative">
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm mb-2 text-gray-700"
                  >
                    Password<span className="text-red-500 font-bold">*</span>
                  </label>
                </div>
                <input
                  value="1412Mu@"
                  type={signToggle ? "text" : "password"}
                  {...register("password", { required: true })}
                  autoComplete="current-password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-blue-500  text-gray-800"
                />
                <button
                  type="button"
                  className="absolute -top-2"
                  onClick={handleToggleSignBtn}
                >
                  {" "}
                  {signToggle ? (
                    <FaEyeSlash className="absolute right-2 top-12 text-xl" />
                  ) : (
                    <IoEyeSharp className="absolute right-2 top-12 text-xl" />
                  )}
                </button>
                {errors.password && (
                  <span className="text-red-500 text-xs font-medium">
                    Password is Required
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:bg-gradient-to-l  bg-gradient-to-r from-blue-500 to-blue-800 w-full rounded-md py-3 text-gray-100"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <button onClick={handleLoginGoogle}>
            <div className="flex justify-center items-center gap-2 rounded-md  border m-3 p-2 border-blue-700 border-rounded cursor-pointer">
              <FcGoogle className="text-2xl" />
              Continue with Google
            </div>
          </button>
          <p className="px-6 text-sm text-center text-gray-400">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/register"
              className="hover:underline hover:text-blue-500 text-gray-600"
            >
              Register
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
