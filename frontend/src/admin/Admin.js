import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  AppBar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <CategoryIcon /> },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: <SupervisorAccountIcon />,
  },
  { name: "Orders", path: "/admin/orders", icon: <ShoppingBagIcon /> },
  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <LibraryAddIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <List>
        {menu.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="flex min-h-screen">
      <CssBaseline />

      {/* App Bar with Hamburger for Small Screens */}
      {!isLargeScreen && (
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setSideBarVisible(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar for Large Screens */}
      {isLargeScreen ? (
        <div className="w-[250px] border-r border-gray-300 h-screen fixed">
          {drawerContent}
        </div>
      ) : (
        <Drawer
          anchor="left"
          open={sideBarVisible}
          onClose={() => setSideBarVisible(false)}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Main Content Area with Margin for Sidebar */}
      <div
        className={`flex-1 ${isLargeScreen ? "ml-[250px]" : "mt-[64px]"} p-4`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route path="/products" element={<ProductsTable />} />
          <Route path="/orders" element={<OrdersTable />} />
          <Route path="/customers" element={<CustomersTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
