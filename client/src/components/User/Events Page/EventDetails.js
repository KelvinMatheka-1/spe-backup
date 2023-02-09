import React, { useEffect, useState } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import _ from "lodash";
import getData from "../../../API";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import UserProfile from "../Profile/UserProfile";

function EventDetails() {
  const { eventId } = useParams();
  const [foundEvent, setFoundEvent] = useState({});
  const [ticketType, setTicketType] = useState("select");
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const [errorProceed, setErrorProceed] = useState(false);
  const [cost, setCost] = useState(0);
  const [units, setUnits] = useState(1);
  const [total, setTotal] = useState(0);
  const history = useHistory();
  useEffect(() => {
    fetch(`/events/${eventId}`)
      .then((resp) => resp.json())
      .then((data) => setFoundEvent(data));
  }, [eventId]);

  useEffect(() => {
    if (ticketType === "regular") {
      setCost(foundEvent.ticket_regular);
    } else if (ticketType === "VIP") {
      setCost(foundEvent.ticket_vip);
    } else if (ticketType === "VVIP") {
      setCost(foundEvent.ticket_vvip);
    } else {
      setCost(0);
    }
    setTotal(cost * units);

    console.log(cost);
  }, [ticketType, units, cost]);

  useEffect(() => {
    console.log(comment);
  }, [comment]);

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handleProceed(e) {
    if (total <= 0) {
      setErrorProceed(true);
  
    } else {
      setErrorProceed(false);
      history.push(`/checkout/${eventId + "-" + total}`);


        fetch("/tickets", {
          method: "POST",
          body: JSON.stringify({
            client_id: e.target.id,
            event_id: eventId
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(res => res.json())
        .then(console.log)
        .catch(console.log)

    }
  }

  function handleComment(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: comment,
        eventId: eventId,
      }),
    }).then((resp) => {
      if (resp.ok) {
        setComment(null);
      } else {
        resp.json().then((e) => setCommentError(e.errors));
      }
    });
    setComment("");
  }
const [client, setClient] = useState([])
  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Failed to fetch user profile");
      })
      .then(setClient)
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log(ticketType);
  return (
    <div className="">
      <div className="p-4 bg-[#242565] text-white">
        <Navigation />
      </div>
      <div className="mt-4 flex flex-col items-center mb-12 justify-center">
        <div className="w-[80%] h-auto shadow-lg bg-white my-2 flex flex-col">
          <div className="h-[15%] border-b border-gray-300 mx-3 p-3 flex justify-between items-center">
            <h3 className="text-2xl flex-1 font-bold text-gray-800">
              {foundEvent.event_name}
            </h3>
            <a
              href="#payTable"
              className="border border-gray-300 px-4 py-3 bg-[#242565] text-white"
            >
              Buy Ticket
            </a>
          </div>
          <div className="p-4 h-[600px] flex md:flex-row gap-6 border-b flex-col">
            <img
              src={foundEvent.event_card_image}
              alt={foundEvent.event_name}
              className="w-[30rem] min-w-[250px] h-full max-h-[600px] object-cover "
            />
            <div className="flex flex-col relative">
              <div className="flex gap-6 items-center">
                <div className="border bg-[#242565] flex flex-col p-8 items-center justify-center text-white">
                  <span>
                    {foundEvent.date && foundEvent.date.split(" ")[0]}
                  </span>
                  <span>
                    {foundEvent.date && foundEvent.date.split(" ")[2]}
                  </span>
                  <span>
                    {foundEvent.date &&
                      `${foundEvent.date.split(" ")[1]} ${
                        foundEvent.date.split(" ")[3]
                      }`}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p>
                    <span className="font-semibold">Runs till: </span>
                    <span>{foundEvent.runs_till && foundEvent.runs_till}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Time: </span>
                    <span>{foundEvent.time && foundEvent.time}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Location: </span>
                    <span>
                      {foundEvent.location && foundEvent.location.location_name}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Category: </span>
                    <span>{foundEvent.category && foundEvent.category}</span>
                  </p>
                </div>
              </div>
              <div className="h-full flex flex-col justify-between overflow-y-auto">
                <p className="mt-4 mb-6">
                  {foundEvent.description && foundEvent.description}
                </p>
                {!_.isEmpty(foundEvent.sponsors) ? (
                  <h3 className="font-bold text-[#242565] text-center my-2">
                    Meet our Sponsors
                  </h3>
                ) : (
                  ""
                )}
                <div className="text-center">
                  <div
                    className="grid mdPro:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center"
                    id="payTable"
                  >
                    {!_.isEmpty(foundEvent) &&
                      foundEvent.sponsors.map((sponsor) => {
                        return (
                          <div className="col-span-1" key={sponsor.id}>
                            <img
                              src={sponsor.sponsor_image}
                              alt={sponsor.sponsor_name}
                              className="rounded-full w-24 h-24"
                            />
                            <p className="text-gray-500 py-1">
                              {sponsor.sponsor_name}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 my-2 text-center">
            <p>
              Get your tickets to
              <span> {foundEvent.event_name && foundEvent.event_name}</span>
            </p>

            <div className="relative overflow-x-auto my-4 rounded">
              <table className="w-full text-sm text-left text-gray-300 dark:text-gray-400">
                <thead className="text-xs text-gray-200 uppercase bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      Ticket Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Cost
                    </th>

                    <th scope="col" className="px-6 py-3 text-center">
                      Units
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                    >
                      <select
                        id="ticketCollection"
                        className="text-black px-4 text-center"
                        onClick={(e) => setTicketType(e.target.value)}
                      >
                        <option value="">Select</option>
                        <option value="regular">Regular</option>
                        <option value="VIP">VIP</option>
                        <option value="VVIP">VVIP</option>
                      </select>
                    </th>
                    <td className="px-6 py-4 text-center">
                      <span>Ksh. </span>
                      <span id="cost">{cost}</span>
                    </td>
                    <td className="text-center">
                      <select
                        id="units"
                        className="px-2"
                        onClick={(e) => setUnits(e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span>Ksh. </span>
                      <span>{total}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button id={client.id}
              type="button"
              className="border bg-[#242565] text-white p-4 uppercase
              text-center tracking-wider"
              onClick={(e) => handleProceed(e)}
            >
              Proceed to pay
            </button>
            {errorProceed ? (
              <div className="bg-[#e69494] p-4 text-white my-2 text-left">
                Please select a ticket type
              </div>
            ) : (
              ""
            )}
            <div className="comment-section p-4 text-left border-t mt-6">
              <h4 className="font-semibold text-lg text-gray-600">
                <span>{foundEvent.comments && foundEvent.comments.length}</span>
                <span> Comment(s)</span>
              </h4>
              <form onSubmit={(e) => handleComment(e)}>
                <textarea
                  id="textArea"
                  cols="30"
                  rows="10"
                  className="border border-gray-400 w-full rounded p-4 h-24"
                  placeholder="Share your thoughts..."
                  onChange={(e) => handleCommentChange(e)}
                  value={comment}
                ></textarea>
                <button
                  type="submit"
                  className="p-2 rounded bg-[#242565] text-white"
                >
                  Comment
                </button>
              </form>
              <ul className="">
                {commentError
                  ? commentError.map((err, index) => (
                      <li
                        className="my-2 bg-[#e69494] p-4 text-white "
                        key={index}
                      >
                        {err}
                      </li>
                    ))
                  : ""}
              </ul>
              <h4 className="my-4 text-gray-600 font-semibold">Comments</h4>
              <div className="text-gray-500">
                {foundEvent.comments &&
                  foundEvent.comments.map((comment) => {
                    return (
                      <p className="border-b mb-2 p-2 mr-12" key={comment.id}>
                        {comment.content}
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
