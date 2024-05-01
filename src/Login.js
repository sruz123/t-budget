// import Header from "./Components/Header";

import { useState } from "react";

const Login = () => {
  const [isLogInForm, setIsLogInForm] = useState(true);

  return (
    <div className=" bg-blue-600 h-screen flex items-center justify-center">
      <div className=" flex justify-end w-2/3 h-3/4 bg-blue-500 ">
        <div className="bg-red-600 w-1/2 h-full">
          <p>hi</p>
        </div>
        <div className="bg-yellow-400 w-1/2 h-full">
          <div className="bg-green-500 h-16 flex flex-row-reverse">
            <button
              onClick={() => {
                setIsLogInForm(true);
              }}
              className={
                isLogInForm ? " bg-blue-500 px-3 m-4 " : " bg-white px-3 m-4"
              }
            >
              LogIn
            </button>

            <button
              onClick={() => {
                setIsLogInForm(false);
              }}
              className={
                isLogInForm ? "bg-white px-3 m-4 " : "bg-blue-500 px-3 m-4"
              }
            >
              {" "}
              SignUp
            </button>
          </div>
          <div className="bg-pink-400 h-80">
            {isLogInForm ? (
              <form className="flex flex-col items-center py-20">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="p-2 m-2 w-1/2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="p-2 m-2 w-1/2 rounded-md"
                />
                <button className="p-2 m-0 bg-teal-500 w-1/2 rounded-md">
                  SignIn
                </button>
              </form>
            ) : (
              <form className="flex flex-col items-center py-20">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="p-2 m-2 w-1/2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="p-2 m-2 w-1/2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="p-2 m-2 w-1/2 rounded-md"
                />
                <button className="p-2 m-0 bg-red-500 w-1/2 rounded-md ">
                  SignUp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
