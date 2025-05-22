import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Messages } from "../pages/Message";
import { MessagesBoard } from "../pages/MessagesBoard";
import { Gallery } from "../pages/Gallery";

export function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/board" element={<MessagesBoard />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
