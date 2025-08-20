import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { SearchProvider } from "./context/search.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
