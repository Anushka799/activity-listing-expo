// app/index.js
import React from "react";
import { ThemeProvider } from "../theme";
import ActivityListing from "./screens/ActivityListing";

export default function App() {
  return (
    <ThemeProvider>
      <ActivityListing />
    </ThemeProvider>
  );
}
