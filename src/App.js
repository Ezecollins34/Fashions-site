import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gowns from "./Pages/Gowns/Gowns";
import Polo from "./Pages/Polo/Polo";
import Tpcs from "./Pages/Tpcs/Tpcs";
import Bags from "./Pages/Bags/Bags";
import { useState } from "react";
import Loading from "./Pages/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Gowns" element={<Gowns />}></Route>
        <Route path="Polo" element={<Polo />}></Route>
        <Route path="Tpcs" element={<Tpcs />}></Route>
        <Route path="Bags" element={<Bags />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
