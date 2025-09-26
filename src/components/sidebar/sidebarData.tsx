import {
  Apps,
  ShoppingCart,
  Lock,
  Home,
  Folder,
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
     
    ],
  },
  {
    id: "pages",
    label: "Pages",
    icon: <Folder />,
    path: "/pages",
    children: [
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
        ]
      },
      {
        id: "projects",
        label: "Projects",
        path: "/pages/projects",
        children: [
          {
            id: "timeline",
            label: "Timeline",
            path: "/pages/projects/timeline",
          },

        ]
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


    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: <ShoppingCart />,
    path: "/ecommerce",
    children: [

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
            id: "productList",
            label: "Product List",
            path: "/ecommerce/products/product-list",
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
        id: "logout",
        label: "Logout",
        path: "/auth/logout",
      },
    ],
  },
]; 