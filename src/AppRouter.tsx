import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const AppRouter: React.FC = ({ children }) => {
  return (
    <div>
      <BrowserRouter>
        {children}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
