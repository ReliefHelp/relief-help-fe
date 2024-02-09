import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatBot from "./components/chatbot/ChatBot.jsx";
import Login from "./components/login pages/Login.jsx";
import Register from "./components/login pages/Register.jsx";

function Routings() {
  return (
    <Router>
      <div className="App font-body">
        <Routes>
          <Route path="/reliefhelper" element={<ChatBot />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routings;
