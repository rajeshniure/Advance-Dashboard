import { Routes, Route,  } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Kanban from "../pages/application/Kanban";
// import other pages as needed

const AppRoutes = () => (
  <Routes>
    <Route path="/"  />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/applications/kanban" element={<Kanban/>}/>
  </Routes>
);

export default AppRoutes;
