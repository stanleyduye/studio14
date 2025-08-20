import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../ui/navbar";

const AppLayout = () => {
  return (
    <Box data-testid="app-layout">
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default AppLayout;
