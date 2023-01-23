import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./components/Admin/Dashboard";
import NavBar from "./components/Admin/NavBar";
import MyTickets from "./components/User/Tickets/MyTickets";
import Users from "./components/Admin/Users";
import Events from "./components/Admin/Events";
import Profile from "./components/Admin/Profile";
import AdminLogin from "./components/User/AdminLogin";
import getData from "./API";
import Notifications from "./components/Admin/Notifications";
import LandingPage from "./components/User/Landing Page/LandingPage";
import EventsPage from "./components/User/Events Page/EventsPage";
import EventDetails from "./components/User/Events Page/EventDetails";
import UserLogin from "./components/User/UserLogin";
import Signup from "./components/User/Signup";
import Checkout from "./components/User/Checkout/Checkout";
import UserProfile from "./components/User/Profile/UserProfile"
import CreateEvent from "./components/Admin/CreateEvent";

function App() {
  const [hidden, setHidden] = useState(true);
  const [clients, setClients] = useState([]);
  const [events, setEvents] = useState([]);
  const [deleting, setIsDeleting] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleHide() {
    setHidden(!hidden);
  }
  useEffect(() => {
    getData("/clients").then((data) => setClients(() => data));
    getData("/events").then((data) => setEvents(() => data));
    getData("/sponsors").then((data) => setSponsors(() => data));
    // console.log(clients);
  }, [deleting]);


  function handleDelete(id) {
    setIsDeleting(() => !deleting);
    fetch(`/clients/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setIsDeleting(() => !deleting);
  }

  return (
    <div className="App font-Nunito">
      <Switch>
        <Route exact path="/admin/users">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Users clients={clients} handleDelete={handleDelete} />
        </Route>
        <Route exact path="/admin/events">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Events events={events} />
        </Route>
        <Route exact path="/admin/profile">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Profile />
        </Route>
        <Route exact path="/admin/notifications">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Notifications />
        </Route>
        <Route exact path="/adminLogin">
          <AdminLogin />
        </Route>
        <Route exact path="/admin">
          <NavBar hidden={hidden} handleHide={handleHide} />
          <Dashboard clients={clients} events={events} />
        </Route>
        <Route exact path="/admin/addevents">
        {/* <NavBar hidden={hidden} handleHide={handleHide} /> */}
          <CreateEvent />
        </Route>

        
        <Route exact path="/events">
          <EventsPage events={events} />
        </Route>
        <Route path="/events/:eventId">
          <EventDetails />
        </Route>
        <Route exact path="/login">
          <UserLogin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/mytickets">
          <MyTickets />
        </Route>

        <Route exact path="/checkout/:data">
          <Checkout />
        </Route>

        <Route exact path="/">
          <LandingPage events={events} sponsors={sponsors} />
        </Route>

        <Route exact path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
