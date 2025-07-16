import {
  Apps,
  ShoppingCart,
  Lock,
  Home,
  Folder,
  Logout,
} from "@mui/icons-material";

export const sidebarMenuItems = [
  {
    id: "home",
    label: "Home",
    icon: <Home />,
    path: "/",
    children: [
      {
        id: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
      },
      {
        id: "analytics",
        label: "Analytics",
        path: "/analytics",
      },
    ],
  },
  {
    id: "pages",
    label: "Pages",
    icon: <Folder />,
    path: "/pages",
    children: [
      {
        id: "profile",
        label: "Profile",
        path: "/pages/profile",
        children: [
          {
            id: "profileOverview",
            label: "Profile Overview",
            path: "/pages/profile-overview",
          },
          {
            id: "teams",
            label: "Teams",
            path: "/pages/teams",
          },
          {
            id: "allProjects",
            label: "All Projects",
            path: "/pages/all-projects",
          },
        ]
      },
      {
        id: "users",
        label: "Users",
        path: "/pages/users",
        children: [
          {
            id: "reports",
            label: "Reports",
            path: "/pages/reports",
          },
          {
            id: "newUser",
            label: "New User",
            path: "/pages/new-user",
          },
        ]
      },
      {
        id: "account",
        label: "Account",
        path: "/pages/account",
        children: [
          {
            id: "setting",
            label: "Setting",
            path: "/pages/setting",
          },
          {
            id: "billing",
            label: "Billing",
            path: "/pages/billing",
          },
          {
            id: "invoice",
            label: "Invoice",
            path: "/pages/invoice",
          },
          {
            id: "security",
            label: "Security",
            path: "/pages/security",
          },
        ]
      },
      {
        id: "projects",
        label: "Projects",
        path: "/pages/projects",
        children: [
          {
            id: "general",
            label: "General",
            path: "/pages/general",
          },
          {
            id: "timeline",
            label: "Timeline",
            path: "/pages/projects/timeline",
          },
          {
            id: "newProject",
            label: "New Project",
            path: "/pages/new-project",
          },
        ]
      },
      {
        id: "pricingPage",
        label: "Pricing page",
        path: "/pages/pricing-page",
      },
      {
        id: "charts",
        label: "Charts",
        path: "/pages/charts",
      },
      {
        id: "notifications",
        label: "Notifications",
        path: "/pages/notifications",
      },
      {
        id: "chat",
        label: "Chat",
        path: "/pages/chat",
      },
    ],
  },
  {
    id: "applications",
    label: "Applications",
    icon: <Apps />,
    path: "/applications",
    children: [
      {
        id: "kanban",
        label: "Kanban",
        path: "/applications/kanban",
      },
      {
        id: "wizard",
        label: "Wizard",
        path: "/applications/wizard",
      },
      {
        id: "dataTable",
        label: "Data tables",
        path: "/applications/data-tables",
      },
      {
        id: "calendar",
        label: "Calendar",
        path: "/applications/calendar",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: <ShoppingCart />,
    path: "/ecommerce",
    children: [
      {
        id: "overview",
        label: "Overview",
        path: "/ecommerce/overview",
      },
      {
        id: "products",
        label: "Products",
        path: "/ecommerce/products",
        children: [
          {
            id: "newProduct",
            label: "New Product",
            path: "/ecommerce/products/new-product",
          },
          {
            id: "editProduct",
            label: "Edit Product",
            path: "/ecommerce/products/edit-product",
          },
          {
            id: "productList",
            label: "Product List",
            path: "/ecommerce/products/product-list",
          },
        ]
      },
      {
        id: "orders",
        label: "Orders",
        path: "/ecommerce/orders",
        children: [
          {
            id: "orderList",
            label: "Order list",
            path: "/ecommerce/orders/order-list",
          },
          {
            id: "orderDetail",
            label: "Order Detail",
            path: "/ecommerce/orders/order-detail",
          },
        ]
      },
    ],
  },
  {
    id: "authentication",
    label: "Authentication",
    icon: <Lock />,
    path: "/auth",
    children: [
      {
        id: "login",
        label: "Login",
        path: "/auth/login",
      },
      {
        id: "register",
        label: "Register",
        path: "/auth/register",
      },
      {
        id: "forgotPassword",
        label: "Forgot Password",
        path: "/auth/forgot-password",
      },
      {
        id: "logout",
        label: "Logout",
        path: "/auth/logout",
      },
    ],
  },
]; 