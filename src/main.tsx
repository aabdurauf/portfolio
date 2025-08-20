import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Loading } from "./components";
import App from "./App.tsx";
import "./index.css";
import "./i18n.ts"
import ThemeProvider from "./context/themeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
