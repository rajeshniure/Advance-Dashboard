import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Kanban from "../pages/application/Kanban";
import Wizard from "../pages/application/Wizard";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* This will show inside <Outlet /> */}
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="applications/kanban" element={<Kanban />} />
        <Route path="applications/wizard" element={<Wizard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
