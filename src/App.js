import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatBot from "./components/chatbot/ChatBot.jsx"
import Login from "./components/login pages/Login.jsx";
import Register from "./components/login pages/Register.jsx";
import LandingPage from "./pages/landingpage";
import Status from "./components/status page/Status.jsx";
import Team from "./components/landing page/Team.jsx";
import Sidebar from "./components/landing page/SideBar.jsx";

function App() {
  return (
    <Router>
      <div className="App font-body">
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* Add more routes here if needed */}
        </Routes>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />

          {/* Add more routes here if needed */}
        </Routes>

        <Routes>
          <Route path="/team" element={<Team />} />
        </Routes>
        <Routes>
          <Route path="/reliefhelper" element={<ChatBot />} />
        </Routes>
        <Routes>
          <Route path="/status" element={<Status />} />
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

export default App;
