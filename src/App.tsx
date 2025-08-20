import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout";
import HomePage from "./components/pages/home";
import Resources from "./components/pages/resources";
import Toolkit from "./components/pages/toolkit";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/toolkit" element={<Toolkit />} />
      </Route>
    </Routes>
  );
}

export default App;
