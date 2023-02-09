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
        <>
<div className='ticket'>
<div className='ticketimage'>
  <p class="sidewords">
    <span>splendid</span>
    <span>events</span>
    <span>tickets</span>
  </p>
  <img src={ticket.event.event_card_image} alt="" />
</div>

<div className='ticketcontent1'>
  <p className='headerdates'><span>Ksh:{ticket.event.ticket_regular}</span> <span className='headermonth'>{ticket.event.date}</span> <span>Ksh:{ticket.event.ticket_regular}</span></p>
  <div className='ticketname'>
    <h2>{ticket.event.event_name}</h2>
    <h6>Attending</h6>
  </div>

  <div className='tickettime'>
    <p>{ticket.event.time}Am/Pm. Have fun...</p>
  </div>

  <div className='tagline'>
      <p>Tickets Not Refundable</p>
  </div>
   <p className='ticketlocation'><span>Location</span><span>Nairobi, Parklands</span></p>
</div>


<div className='ticketcontent2'>
  <p class="sidewords2">
          <span>splendid</span>
          <span>events</span>
          <span>tickets</span>
    </p>
  <div className='ticketinfo2'>
    <div className='ticketname2'>
        <h3>{ticket.event.event_name}</h3>
    </div>
    <div className='tickettime2'>
      <p>{ticket.event.date}</p>
      <p>{ticket.event.time} TBD</p>
    </div>
    <div class="barcode">
              <img src="https://i.imgur.com/HMAAsVO.png" alt="QR code"></img>
          </div>
  </div>
</div>
    <div className="ticket-button">
        {/* <button type="submit" onClick={handleViewEvent} id={ticket.event.id} >View event</button> */}
        <button type="submit" onClick={handleDelete} id={ticket.id} >Cancel Ticket</button>
    </div>
</div>
</>
    )
}

export default MyTicketCard;
