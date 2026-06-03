import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";
import ToolsDetailPage from "../pages/ToolsDetailPage";
import AllToolsPage from "../pages/AllToolsPage";
import FreeAiTools from "../pages/FreeAiTools";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes With Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tools/:id" element={<ToolsDetailPage />} />
        <Route path="/alltools" element={<AllToolsPage />} />
        <Route path="/free-tools" element={<FreeAiTools />} />
      </Route>

      {/* Login Route */}
      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  );
};

export default AppRoutes;
