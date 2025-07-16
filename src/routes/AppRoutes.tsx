import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Kanban from "../pages/application/Kanban";
import Wizard from "../pages/application/WIzard";
import NewProduct from "../pages/ecommerce/products/NewProduct";
import Timeline from "../pages/pagessection/projects/Timeline";
import Login from "../authentication/Login";
import AuthLayout from "../layout/AuthLayout";
import Logout from "../pages/logout/Logout";
import Error from "../pageError/Error";
import ProductList from "../pages/ecommerce/productlist/ProductList";
import Setting from "../pages/account/Setting";

const ProtectedRoute = () => {
  const token = localStorage.getItem("authToken");
  return token ? <Outlet /> : <Navigate to="/auth/login" replace />;
};


const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>

    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="applications/kanban" element={<Kanban />} />
        <Route path="applications/wizard" element={<Wizard />} />
        <Route path="ecommerce/products/new-product" element={<NewProduct />} />
        <Route path = "pages/projects/timeline" element = {<Timeline />} />
        <Route path = "ecommerce/products/product-list" element = {<ProductList />} />
        <Route path="pages/setting" element={<Setting />} />
        <Route path="auth/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
        
      </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
