import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoalTracker from "./components/GoalTracker";
import ProgressBar from "./components/ProgressBar";
import Medium from "./Medium";

import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Medium />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
    </Routes>
  );
};

export default App;
