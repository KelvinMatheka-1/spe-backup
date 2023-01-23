import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation";

import EventCard from "./EventCard";
import Spinner from "../../Spinner";
import _ from "lodash";

function EventsPage({ events }) {
  const [categories, setCategories] = useState({
    festivals: [],
    music: [],
    art: [],
    corporate: [],
    sports: [],
    educational: [],
    tech: [],
  });

  useEffect(() => {
    // console.log(events);
    setCategories({
      ...categories,
      festivals: events.filter((event) => event.category === "Festivals"),
      music: events.filter((event) => event.category === "Music"),
      art: events.filter((event) => event.category === "Art"),
      corporate: events.filter((event) => event.category === "Corporate"),
      sports: events.filter((event) => event.category === "Sports"),
      educational: events.filter((event) => event.category === "Educational"),
      tech: events.filter((event) => event.category === "Tech"),
    });
  }, [events]);

  return (
    <>
      {_.isEqual(
        {
          festivals: [],
          music: [],
          art: [],
          corporate: [],
          sports: [],
          educational: [],
          tech: [],
        },
        categories
      ) ? (
        <div className="flex justify-center h-screen items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="nav w-full font-semibold tracking-wide flex items-center justify-between p-4 shadow-lg fixed text-white bg-[#242565] z-10">
            <NavLink
              exact
              to="/"
              className="text-xl px-4 font-bold"
            >
              Splendid Events
            </NavLink>
            <form>
              <input
                type="search"
                placeholder="Search..."
                className="rounded-full p-2 bg-gray-300 text-[#242565] px-4"
              />
            </form>
            <Navigation />
          </div>
          <div className="main-wrapper pt-20 px-4 flex flex-col bg-gray-200">
            {/* Festivals */}
            <div className="festivals my-8">
              <h3 className="category-title">Festivals</h3>
              <div className="grid mdPro:grid-cols-3 mdMore:grid-cols-2 justify-items-center gap-y-8 gap-x-6">
                {categories.festivals.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>

            {/* Music */}
            <div className="music my-8">
              <h3 className="category-title">Music</h3>
              <div className="grid mdPro:grid-cols-3 mdMore:grid-cols-2 justify-items-center gap-y-8 gap-x-6">
                {categories.music.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>

            {/* Tech */}
            <div className="tech my-8">
              <h3 className="category-title">Tech</h3>
              <div className="grid mdPro:grid-cols-3 mdMore:grid-cols-2 justify-items-center gap-y-8 gap-x-6">
                {categories.tech.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>

            {/* Art */}
            <div className="art my-8">
              <h3 className="category-title">Art</h3>
              <div className="grid mdPro:grid-cols-3 mdMore:grid-cols-2 justify-items-center gap-y-8 gap-x-6">
                {categories.art.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>

            {/* Corporate */}
            <div className="corporate my-8">
              <h3 className="category-title">Corporate</h3>
              <div className="grid mdPro:grid-cols-3 mdMore:grid-cols-2 justify-items-center gap-y-8 gap-x-6">
                {categories.corporate.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>

            {/* Educational */}
            <div className="educational my-8">
              <h3 className="category-title">Educational</h3>
              <div className="grid mdPro:grid-cols-3 mdMore:grid-cols-2 justify-items-center gap-y-8 gap-x-6">
                {categories.educational.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>

            {/* Sports */}
            <div className="sports my-8">
              <h3 className="category-title">Sports</h3>
              <div className="grid mdPro:grid-cols-3 mdMore:grid-cols-2 justify-items-center gap-y-8 gap-x-6 mb-6">
                {categories.sports.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>
          </div>

        </>
      )}
    </>
  );
}

export default EventsPage;
