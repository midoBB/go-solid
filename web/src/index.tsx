/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes, hashIntegration } from "@solidjs/router";
import "./index.css";
import App from "./App";
import { lazy } from "solid-js";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
const root = document.getElementById("root");
const About = lazy(() => import("./about"));

const queryClient = new QueryClient();
render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router source={hashIntegration()}>
        <Routes>
          <Route path="/" component={App} />
          <Route path="/about" component={About} />
        </Routes>
      </Router>
    </QueryClientProvider>
  ),
  root!,
);
