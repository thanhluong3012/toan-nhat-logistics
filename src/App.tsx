import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoadTransport from "./pages/RoadTransport";
import RailTransport from "./pages/RailTransport";
import Warehouse from "./pages/Warehouse";
import NewsPolicy from "./pages/NewsPolicy";
import About from "./pages/About";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

import React from "react";
import { useLocation } from "react-router-dom";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/van-tai-duong-bo" element={<RoadTransport />} />
          <Route path="/van-tai-duong-sat" element={<RailTransport />} />
          <Route path="/kho-cho-thue" element={<Warehouse />} />
          <Route path="/tin-tuc-chinh-sach" element={<NewsPolicy />} />
          <Route path="/ve-chung-toi" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
