import { Routes, Route,  } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
// import other pages as needed

const AppRoutes = () => (
  <Routes>
    <Route path="/"  />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;
