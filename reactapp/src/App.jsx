import { useState } from "react";
import FoodMenu from "./screens/FoodMenu";
import Addons from "./screens/Addons";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/food-menu" element={<FoodMenu/>}/>
        <Route path="/add-ons" element={<Addons/>}/>
        <Route path="/" element={  <Navigate to="/food-menu"/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
