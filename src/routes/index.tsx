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
import { ProtectedRoute } from "./ProtectedRoute";
import { PageError } from "../pages/PageError";

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
        <Route path="/confirmated" element={<Confirmated />} />
        <Route path="/guests/:id/ticket" element={<TicketPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageError />} />

        <Route
          path="/guests"
          element={
            <ProtectedRoute>
              <Guests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/guests/create"
          element={
            <ProtectedRoute>
              <CreateGuest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditGuest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reservations"
          element={
            <ProtectedRoute>
              <Reservations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stock"
          element={
            <ProtectedRoute>
              <Stock />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkin-scanner"
          element={
            <ProtectedRoute>
              <CheckInScanner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkinlist"
          element={
            <ProtectedRoute>
              <CheckInList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
