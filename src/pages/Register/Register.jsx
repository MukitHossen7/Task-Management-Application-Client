import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import registerImg from "../../assets/Authentication-rafiki.svg";
const Register = () => {
  const [signToggle, setSignToggle] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleSignup = async (data) => {
    const photo = data.image;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password, photo);
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  return (
    <div>
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-20 lg:flex-row justify-center items-center py-10 md:py-14 lg:py-20 bg-white w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="w-full md:w-[400px] lg:w-[500px]">
          <img
            src={registerImg}
            className="w-full md:w-[400px] lg:w-[500px]"
          ></img>
        </div>
        <div className="flex flex-col p-6 rounded-md  w-full md:w-[500px] text-gray-900">
          <div className="text-center">
            <h1 className="mb-3 text-3xl font-semibold">Register</h1>
          </div>
          <form
            onSubmit={handleSubmit(handleSignup)}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name<span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500  text-gray-900"
                  data-temp-mail-org="0"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs font-medium">
                    Name is Required
                  </span>
                )}
              </div>
              <div className="">
                <label htmlFor="image" className="block mb-2 text-sm">
                  Image Url<span className="text-red-500 font-bold">*</span>
                </label>
                <div className="flex flex-col">
                  <input
                    type="text"
                    {...register("image", { required: true })}
                    placeholder="Enter Your images"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500  text-gray-900"
                    data-temp-mail-org="0"
                  />
                  {errors.image && (
                    <span className="text-red-500 text-xs font-medium mt-1">
                      Image is Required
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address<span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 text-gray-900"
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
                  <label htmlFor="password" className="text-sm mb-2">
                    Password<span className="text-red-500 font-bold">*</span>
                  </label>
                </div>
                <input
                  type={signToggle ? "text" : "password"}
                  {...register("password", {
                    required: { value: true, message: "Password is Required" },
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      message:
                        "Password must One uppercase, One lowercase, One special character",
                    },
                  })}
                  autoComplete="new-password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 text-gray-900"
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
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:bg-gradient-to-l bg-gradient-to-r from-blue-600 to-blue-800 w-full rounded-md py-3 text-gray-100"
              >
                SignUp
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <button className="flex justify-center items-center gap-1 rounded-md border m-3 p-2 border-blue-700 border-rounded cursor-pointer">
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-blue-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
