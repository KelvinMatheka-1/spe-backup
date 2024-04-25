import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import MyTicketCard from "./MyTicketCard";
import { NavLink } from "react-router-dom";

function MyTickets() {

  const [myTickets, setMyTickets] = useState([])

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

  useEffect(() => {
    fetch('/tickets')
    .then(res => res.json())
    .then(data => {
        setMyTickets(data.filter(ticket => ticket.client_id === client.id))
        // setMyTickets(data)
    })
  },[client])

    return (
    <React.Fragment>
    <div className="nav w-full font-semibold tracking-wide flex items-center justify-between p-4 shadow-lg fixed text-white bg-[#242565] z-10">
        <NavLink
              exact
              to="/"
              className="text-xl px-4 font-bold"
            >
              Splendid Events
        </NavLink>
        <Navigation />
    </div>
    <div className="main-wrapper pt-20 flex flex-col bg-gray-200" >
        <div>
        <h3 className="category-title">Your Tickets:</h3>
            {myTickets.length > 0 ? (
                myTickets.map(ticket => {
                return < MyTicketCard key={ticket.id} ticket={ticket} />
                })
            ) : (
                <h2 className="d-flex justify-content-center text-decoration-none">You have bought no tickets yet!</h2>
            )}
        </div>
    </div>
    </React.Fragment>
    )
}

export default MyTickets;
