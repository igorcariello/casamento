import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Messages } from "../pages/Message";
import { MessagesBoard } from "../pages/MessagesBoard";
import { Gallery } from "../pages/Gallery";
import { ConfirmationPage } from "../pages/ConfirmationPage";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Confirmated } from "../pages/Confirmated";
import { Guests } from "../pages/Guests";
import { CreateGuest } from "../pages/CreateGuest";
import { EditGuest } from "../pages/EditGuest";
import { PresentList } from "../pages/PresentList";
import { ScrollToHash } from "../utils/ScrollToHash";
import { ScrollToTopOnRouteChange } from "../utils/ScrollToTopOnRouteChange";
import { Cart } from "../pages/Cart";
import { Reservations } from "../pages/Reservation";
import { Stock } from "../pages/Stock";
import { CheckInScanner } from "../pages/CheckInScanner";
import { CheckInList } from "../pages/CheckInList";
import { TicketPage } from "../pages/TicketPage";

export function RoutesApp() {
  return (
    <Router>
      <ScrollToHash />
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/board" element={<MessagesBoard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/presentlist" element={<PresentList />} />
        <Route path="/presentlist/cart/:id" element={<Cart />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirmated" element={<Confirmated />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/guests/create" element={<CreateGuest />} />
        <Route path="/edit/:id" element={<EditGuest />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="checkin-scanner" element={<CheckInScanner />} />
        <Route path="checkinlist" element={<CheckInList />} />
        <Route path="/guests/:id/ticket" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}
