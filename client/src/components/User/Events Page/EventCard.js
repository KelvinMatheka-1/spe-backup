import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  // console.log(event.date);
  return (
    <div className="upcoming-card md:w-3/4 max-w-[400px] h-[400px] col-span-1 rounded-2xl shadow-lg overflow-hidden cursor-default bg-white">
      <img
        src={event.event_card_image}
        alt={event.event_name}
        className="w-full object-cover h-1/2 object-top"
      />
      <div className="flex flex-col justify-between h-1/2">
        <div className="flex justify-between space-x-2 border py-2 h-2/3">
          <div className="upcoming-card-date flex flex-col items-center text-sm py-1 px-2 gap-1">
            <span className="text-[#686af3] font-bold text-lg">
              {event.date.slice(4, 7)}
            </span>
            <span className="font-bold text-xl">{event.date.slice(8, 10)}</span>
          </div>
          <div className="upcoming-card-content flex flex-col text-sm py-1">
            <p className="font-bold text-md">{event.event_name}</p>
            <p className="font-bold">{event.location.location_name}</p>
            <p className="p-1 text-gray-500">
              {event.description.length > 100
                ? `${event.description.slice(0, 100)}...`
                : event.description}
            </p>
          </div>
        </div>
        <div className="card-footer bg-[#242565] flex justify-between items-center h-1/3 text-white px-4">
          <div className="footer-available flex flex-col">
            <p>Tickets Available:</p>
            <p>500</p>
          </div>

          <Link
            to={`/events/${event.id}`}
            className="bg-[#F5167E] rounded hover:scale-[1.03] transition duration-[1s] ease-in-out p-2 max-h-12 flex items-center text-center"
          >
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
