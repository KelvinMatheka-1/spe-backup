import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import _ from "lodash";

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    client_name: "",
    client_image: "",
    email: "",
    bought_tickets: 0,
  });
  const history = useHistory();
  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUser({
            ...user,
            client_name: data.client_name,
            client_image: data.client_image,
            email: data.email,
            bought_tickets: data.bought_tickets,
          });
          setIsLoggedIn(true);
        } else {
          setUser(user);
          setIsLoggedIn(false);
        }
      });
    console.log(isLoggedIn);
  }, []);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    }).then(() => {
      setUser({
        client_name: "",
        client_image: "",
        email: "",
        bought_tickets: 0,
      });
      history.push("/");
      setIsLoggedIn(false);
    });
  }
  useEffect(() => {
    console.log("Status");
  }, [isLoggedIn]);

  console.log(user);
  return (
    <ul className=" flex justify-end gap-12 items-center px-4 z-2" id="navbar">
      <NavLink exact to="/events">
        Events
      </NavLink>
      <NavLink exact to="/mytickets">
        My Tickets
      </NavLink>
      {isLoggedIn ? (
        <NavLink
          exact
          to="/profile"
          className="w-12 h-12 rounded-full overflow-hidden border border-green-500"
        >
          <img
            src={user.client_image}
            alt={user.client_name}
            className=" object-cover w-full h-full"
          />
        </NavLink>
      ) : (
        <button
          className="border border-[#F5167E] py-2 px-4 rounded-full hover:bg-[#F5167E] hover:text-white transition duration-[0.75s] ease-in-out"
          onClick={() => history.push("/adminLogin")}
        >
          Admin Login
        </button>
      )}

      {isLoggedIn ? (
        <button
          type="button"
          className="py-2 px-4 bg-red-500 text-white"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      ) : (
        <button
          className="border border-[#F5167E] py-2 px-4 rounded-full hover:bg-[#F5167E] hover:text-white transition duration-[0.75s] ease-in-out"
          onClick={() => history.push("/login")}
        >
          Sign In
        </button>
      )}
    </ul>
  );
}

export default Navigation;
