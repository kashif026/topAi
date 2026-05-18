import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes With Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Login Route */}
      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  );
};

export default AppRoutes;
