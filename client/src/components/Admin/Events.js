import React, { useEffect, useState } from "react";
import BigScreenHeader from "./BigScreenHeader";
import Page404 from "./Page404";
import _ from "lodash";
// import Spinner from "../Spinner";

function Events({ events }) {
  const [adminInfo, setAdminInfo] = useState({
    admin_name: "",
    admin_image: "",
    email: "",
  });

  const [prominentLocation, setProminentLocation] = useState("");
  const [prominentLocationCount, setProminentLocationCount] = useState(0);
  const [prominentCategory, setProminentCategory] = useState("");
  const [categoryCount, setCategoryCount] = useState(0);

  // function sumn(id) {}

  useEffect(() => {
    const locations = events.map((event) => event.location.location_name);
    const categories = events.map((event) => event.category);
    let mode = (a) => {
      a = a.slice().sort((x, y) => x - y);

      let bestStreak = 1;
      let bestElem = a[0];
      let currentStreak = 1;
      let currentElem = a[0];

      for (let i = 1; i < a.length; i++) {
        if (a[i - 1] !== a[i]) {
          if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            bestElem = currentElem;
          }

          currentStreak = 0;
          currentElem = a[i];
        }

        currentStreak++;
      }

      return currentStreak > bestStreak ? currentElem : bestElem;
    };
    const countOccurrences = (arr, val) =>
      arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    setCategoryCount(countOccurrences(categories, mode(categories)));
    setProminentLocation(mode(locations));
    setProminentLocationCount(countOccurrences(locations, mode(locations)));
    setProminentCategory(mode(categories));
    console.log(events);
  }, [events]);

  useEffect(() => {
    fetch("/admin/me")
      .then((resp) => resp.json())
      .then((data) =>
        setAdminInfo({
          ...adminInfo,
          admin_name: data.admin_name,
          admin_image: data.admin_image,
          email: data.email,
        })
      );
  }, [adminInfo]);

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
          <BigScreenHeader />

          <div className="top-cards-container mt-4 grid lgPro:grid-cols-3 mdPro:grid-cols-2 md:grid-cols-2 justify-items-center grid-cols-1 gap-8 p-4">
            <div className="top-card">
              <span>Events #</span>
              <span className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>{events.length}</span>
              </span>
            </div>
            <div className="top-card">
              <span>Prominent Location</span>
              <span className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>
                  {prominentLocation}({prominentLocationCount})
                </span>
              </span>
            </div>
            <div className="top-card">
              <span>Prominent Category</span>
              <span className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>
                  {prominentCategory}({categoryCount})
                </span>
              </span>
            </div>
          </div>
{/* 
          <button type="button">Create Event</button> */}
          <h3 className="text-center my-2">Event Management</h3>
          {events.length > 0 ? (
            <div className="events-wrapper grid md:grid-cols-2 justify-items-center my-4 gap-4">
              {events.map((event) => {
                return (
                  <div key={event.id} className="event-card w-64 md:w-3/4 mdPro:w-4/5 h-64 overflow-hidden rounded-md shadow-[#eeeeee] hover:shadow-lg flex bg-gray-800">
                    <div className="w-1/2 relative">
                      <img
                        src={event.event_card_image}
                        alt={event.event_name}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-2 left-2 border p-1 rounded-full text-xs bg-[#e42424]">
                        {event.category}
                      </span>
                    </div>
                    <div className="flex flex-col w-1/2 ">
                      <div className="bg-gray-700 p-2">
                        <h3 className="font-bold text-center">
                          {event.event_name}
                        </h3>
                      </div>
                      <div>{}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default Events;
