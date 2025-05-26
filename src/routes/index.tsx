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

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/board" element={<MessagesBoard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirmated" element={<Confirmated />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/guests/create" element={<CreateGuest />} />
        <Route path="/edit/:id" element={<EditGuest />} />
      </Routes>
    </Router>
  );
}
