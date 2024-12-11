import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Header } from "./widgets";
import { ModalProvider } from "./providers";
import { Accounts, Dashboard } from "./routes";

export const App = () => {
  return (
    <Container maxWidth="sm" sx={{ padding: 0 }}>
      <ModalProvider />
      <Box p={2} mb={2}>
        <Header />
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Routes>
    </Container>
  );
};
