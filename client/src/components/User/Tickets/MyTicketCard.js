import React from "react";

function MyTicketCard({ ticket }) {

    function handleViewEvent(e) {
        console.log(e.target.id);
    }

    function handleDelete(e) {
        fetch(`/tickets/${e.target.id}`, {
            method: "DELETE"
        })
        .catch(console.log)
    }

    return (
        <div className="container mx-auto px-8 flex flex-row">
        <div className="ticket h-80 w-5/6 rounded-2xl overflow-hidden flex flex-row" >
            <img src={ticket.event.event_card_image} alt={ticket.event.event_name} className=" object-cover object-top w-80" />
            <div className="w-80">
            <div className="h-1/2 "><br/>
                <p className="text-center font-serif italic text-3xl font-bold" >{ticket.event.event_name}</p>
                <p className="font-medium text-xl italic text-center" >{ticket.event.category}</p>
            </div>
            <div className="card-body h-1/2" >
                <p className="font-medium text-xl italic text-center" >{ticket.event.date}</p>
                <p className="font-medium text-xl italic text-center" >{ticket.event.time}</p>
            </div>
            </div>
            <div className="w-64"><br/>
                <div className="justify-items-center">
                    <p className="font-medium text-xl italic text-center">{ticket.event.location.location_name}</p>
                </div>
            </div>
            <div className="w-64 card-footer bg-[#242565] items-center p-2 text-white">
                <div className="h-3/4">
                    <img src="/assets/stamp2.png" alt="guarantee" />
                </div>
                <div className="flex flex-row gap-4">
                    <button type="submit" className="bg-[#F5167E] rounded hover:scale-[1.03] transition duration-[1s] ease-in-out py-2 px-4" onClick={handleViewEvent} id={ticket.event.id} >View event</button>
                    <br/>
                    <button type="submit" className="bg-[#F5167E] rounded hover:scale-[1.03] transition duration-[1s] ease-in-out py-2 px-4" onClick={handleDelete} id={ticket.id} >Cancel ticket</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MyTicketCard;
