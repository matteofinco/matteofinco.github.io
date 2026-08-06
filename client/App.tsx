import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About.tsx";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#070707", margin: 0, padding: 0 }}>
      <Index />
    </div>
  );
}
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
     
      <Route path="/About" element={<About />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;