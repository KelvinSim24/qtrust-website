import "./index.css";

import { Toaster } from "./components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DownloadPage from "./pages/DownloadPage";
import HistoryPage from "./pages/HistoryPage";
import NotFound from "./pages/NotFound";
import SignIn from "../client/pages/SignIn";
import SignUp from "../client/pages/SignUp";
import ResetPassword from "../client/pages/ResetPassword";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Force redirect from root to /signup */}
          <Route path="/" element={<SignUp />} />


          {/* Auth Pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset" element={<ResetPassword />} />

          {/* Other Pages */}
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/download" element={<DownloadPage />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")).render(<App />);
