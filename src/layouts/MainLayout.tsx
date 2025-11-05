import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const MainLayout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Navbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};
