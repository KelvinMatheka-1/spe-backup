import React, { useState, useEffect } from "react";
import Page404 from "./Page404";
import _ from "lodash";
import BigScreenHeader from "./BigScreenHeader";

function Notifications() {
  const [adminInfo, setAdminInfo] = useState({
    admin_name: "",
    admin_image: "",
    email: "",
  });

  useEffect(() => {
    fetch("/admin/me")
      .then((resp) => resp.json())
      .then((data) => {
        data
          ? setAdminInfo({
              ...adminInfo,
              admin_name: data.admin_name,
              admin_image: data.admin_image,
              email: data.email,
            })
          : setAdminInfo(adminInfo);
      });
  }, []);

  return (
    <>
      {_.isEqual(
        {
          admin_name: "",
          admin_image: "",
          email: "",
        },
        adminInfo
      ) ? (
        <Page404 />
      ) : (
        <div className="main">
          <BigScreenHeader/>
          <p>Nothing to see here yet</p>
        </div>
      )}
    </>
  );
}

export default Notifications;
