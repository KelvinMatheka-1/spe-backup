import React, { useState } from 'react'
import BigScreenHeader from './BigScreenHeader'

function CreateEvent() {
  const [event_name, setEventName] = useState("")
  const [event_card_image, setEventCardImage] = useState("")
  const [description, setDescription] = useState("")
  const [location_id, setLocationId] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [category, setCategory] = useState("")
  const [runs_till, setRunsTill] = useState("")
  const [ticket_regular, setTicketRegular] = useState("")
  const [ticket_vip, setTicketVip] = useState("")
  const [ticket_vvip, setTicketVvip] = useState("")



  function handleSubmit(e){
    e.preventDefault();
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name,
        event_card_image,
        description,
        category,
        location_id,
        date,
        time,
        runs_till,
        ticket_regular,
        ticket_vip,
        ticket_vvip


      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(console.log(r))
      }
    });
  }
  return (
    <div>
        <BigScreenHeader />
        <div className="bg-blue-200 min-h-screen flex items-center">
        <div className="w-full">
          <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Create Event</h2>
          <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form action="" onSubmit={handleSubmit}>

              <div className="mb-5">
                <label htmlFor="event name" className="block mb-2 font-bold text-gray-600">Event Name</label>
                <input type="text" id="event_name" name="event_name" placeholder="Sol Fest"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={event_name} onChange={(e) => setEventName(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="Image Poster url" className="block mb-2 font-bold text-gray-600">Poster Url</label>
                <input type="text" id="event_card_image" name="event_card_image" placeholder="image url"
                  className="border border-red-300 shadow p-3 w-full rounded mb-"
                  required value={event_card_image} onChange={(e) => setEventCardImage(e.target.value)} />
              </div>

              <div className="mb-5">
                <label htmlFor="description" className="block mb-2 font-bold text-gray-600">Description</label>
                <input type="text" id="description" name="description" placeholder="few catching words"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={description} onChange={(e) => setDescription(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="Location_id" className="block mb-2 font-bold text-gray-600">Location ID</label>
                <input type="text" id="location_id" name="location_id" placeholder="location_id"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={location_id} onChange={(e) => setLocationId(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="date" className="block mb-2 font-bold text-gray-600">Date</label>
                <input type="text" id="date" name="date" placeholder="date"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={date} onChange={(e) => setDate(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="time" className="block mb-2 font-bold text-gray-600">Time</label>
                <input type="text" id="time" name="time" placeholder="time"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={time} onChange={(e) => setTime(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="runs_till" className="block mb-2 font-bold text-gray-600">Runs till</label>
                <input type="text" id="runs_toll" name="runs_till" placeholder="runs_till"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={runs_till} onChange={(e) => setRunsTill(e.target.value)}/>
              </div>


              <div className="mb-5">
                <label htmlFor="category" className="block mb-2 font-bold text-gray-600">Category</label>
                <input type="text" id="category" name="category" placeholder="category"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={category} onChange={(e) => setCategory(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="ticket_regular" className="block mb-2 font-bold text-gray-600">Ticket price regular</label>
                <input type="text" id="ticket_regular" name="ticket_regular" placeholder="ticket_regular"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={ticket_regular} onChange={(e) => setTicketRegular(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="ticket_vip" className="block mb-2 font-bold text-gray-600">Ticket price vip</label>
                <input type="text" id="ticket_vip" name="ticket_vip" placeholder="ticket_vip"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={ticket_vip} onChange={(e) => setTicketVip(e.target.value)}/>
              </div>

              <div className="mb-5">
                <label htmlFor="ticket_vvip" className="block mb-2 font-bold text-gray-600">Ticket price vvip</label>
                <input type="text" id="ticket_vvip" name="ticket_vvip" placeholder="ticket_vvip"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  required value={ticket_vvip} onChange={(e) => setTicketVvip(e.target.value)}/>
              </div>

              <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
            </form>
          </div>
        </div>
      </div>
  </div>
  )
}

export default CreateEvent