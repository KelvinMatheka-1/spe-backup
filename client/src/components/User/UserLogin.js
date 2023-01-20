import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Navigation from "./Navigation";

function UserLogin() {
  const [errors, setErrors] = useState(null);
  const [myType, setMyType] = useState("password");
  const [formData, setFormData] = useState({
    client_name: "",
    password: "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
      });
  }

  function handleClick(e) {
    e.target.classList.toggle("fa-eye-slash");
    myType === "password" ? setMyType("text") : setMyType("password");
  }

  return (
    <div className="w-full h-full userLoginBackground relative">
      <img
        src="assets/userLogin.jpg"
        alt="User login pic"
        className="absolute z-0 top-0 w-full h-full brightness-50"
      />

      <div className="p-4 bg-[#242565] text-white flex justify-between items-center z-2 sticky top-0 shadow-lg z-30">
        <NavLink exact to="/" className="text-lg font-bold">
          Splendid Events
        </NavLink>
        <Navigation />
      </div>
      <div className="h-[100dvh] max-h-[700px] flex flex-col items-center mt-2 z-10">
        <div className="loginCard w-2/3 border-2 border-white h-3/4 max-w-[1090px] rounded-lg flex overflow-hidden text-white z-10">
          <div className="login-img w-1/2 hidden mdPro:block">
            <img
              src="assets/userMini.jpg"
              alt="login pic"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="login-content w-full mdPro:w-1/2 bg-transparent p-4 flex flex-col">
            <h3 className="text-center mdPro:text-2xl text-lg tracking-wider font-bold ">
              User Login
            </h3>
            <form
              className="mdPro:w-full flex flex-col items-center my-4 gap-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              {errors ? (
                <div className="text-red-500 p-2 text-sm">{errors}</div>
              ) : (
                ""
              )}
              <div className="flex flex-col gap-4 mdPro:w-4/5 w-1/2">
                <label htmlFor="client_name">Username</label>
                <input
                  type="text"
                  id="client_name"
                  className="rounded-full tracking-wider text-md relative mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="john doe"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex flex-col gap-4 mdPro:w-4/5 w-1/2 relative">
                <label htmlFor="password">Password</label>
                <input
                  type={myType}
                  id="password"
                  placeholder="password"
                  autoComplete="off"
                  className="rounded-full tracking-widest mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  onChange={(e) => handleChange(e)}
                />
                <i
                  className="fa-solid fa-eye fa-eye-slash absolute top-[65%] right-4 text-gray-300 cursor-pointer"
                  id="eye"
                  title="change visibility"
                  onClick={(e) => handleClick(e)}
                ></i>
              </div>
              <button
                type="submit"
                className="admin-submit-btn py-1 px-4 border border-[#7a0bc0] shadow-md rounded-md font-semibold tracking-wide w-28 mt-4 hover:scale-[1.03] transition duration-[1.5s] ease-in-out"
              >
                Login
              </button>
            </form>
            <p className="text-center my-2">
              Don't have an account?{" "}
              <NavLink
                exact
                to="/signup"
                className="italic text-blue-500 hover:underline cursor-pointer"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
