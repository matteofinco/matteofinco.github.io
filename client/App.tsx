import React, { useState, useEffect } from "react";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  if (currentPath === "/" || currentPath === "") {
    return <Index />;
  }

  return <NotFound />;
}