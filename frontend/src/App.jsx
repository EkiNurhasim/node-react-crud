import { Box } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Box minH={"100v"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
      <Toaster />
    </>
  );
}

export default App;
