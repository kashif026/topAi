import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export default function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          bgcolor:'white'
        }}
      >
        {/* <Container maxWidth="xl"> */}
          <Outlet />
        {/* </Container> */}
      </Box>

      <Footer />
    </Box>
  );
}
