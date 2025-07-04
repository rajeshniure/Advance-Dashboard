import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Kanban from "../pages/application/Kanban";
import Wizard from "../pages/application/WIzard";

const AppRoutes = () => (
  <Routes>
    <Route path="/" />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/applications/kanban" element={<Kanban />} />
    <Route path="/applications/wizard" element={<Wizard />} />
  </Routes>
);

export default AppRoutes;
