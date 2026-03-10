import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Account pages
import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import Index from "./pages/Index";
import History from "./pages/History";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import ProximaX from "./pages/ProximaX";

// Auth pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root path to SignUp */}
          <Route path="/" element={<SignUp />} />

          {/* Auth Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset" element={<ResetPassword />} />

          {/* Original Routes */}
          <Route path="/home" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/download" element={<Index />} />
          <Route path="/history" element={<History />} />
          <Route path="/account" element={<Account />} />
          <Route path="/proximax" element={<ProximaX />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
