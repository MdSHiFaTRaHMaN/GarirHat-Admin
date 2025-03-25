import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-multi-carousel/lib/styles.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={routes} />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
