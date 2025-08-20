import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PlaceholderPage } from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/live" 
            element={
              <PlaceholderPage 
                title="Live Streaming" 
                description="Manage your live streams and broadcast content"
              />
            } 
          />
          <Route 
            path="/shop" 
            element={
              <PlaceholderPage 
                title="Shop Management" 
                description="Manage your products and store settings"
              />
            } 
          />
          <Route 
            path="/commodity" 
            element={
              <PlaceholderPage 
                title="Commodity" 
                description="Manage your inventory and product catalog"
              />
            } 
          />
          <Route 
            path="/order" 
            element={
              <PlaceholderPage 
                title="Order Management" 
                description="View and manage customer orders"
              />
            } 
          />
          <Route 
            path="/data" 
            element={
              <PlaceholderPage 
                title="Data Analytics" 
                description="View detailed analytics and reports"
              />
            } 
          />
          <Route 
            path="/assets" 
            element={
              <PlaceholderPage 
                title="Assets" 
                description="Manage your digital assets and resources"
              />
            } 
          />
          <Route 
            path="/application" 
            element={
              <PlaceholderPage 
                title="Applications" 
                description="Manage your integrated applications"
              />
            } 
          />
          <Route 
            path="/setup" 
            element={
              <PlaceholderPage 
                title="Settings" 
                description="Configure your account and system settings"
              />
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
