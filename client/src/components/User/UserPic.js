import React from "react";
import { NavLink } from "react-router-dom";
function UserPic({ user }) {
  return (
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
  );
}

export default UserPic;
