import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Themeprovide } from "./Theme/Theme.tsx";
import ContextAuth from "./lib/ContextAuth.tsx";
import ContextRoom from "./lib/ContextRoom.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextAuth>
        <ContextRoom>
          <Themeprovide>
            <App />
          </Themeprovide>
        </ContextRoom>
      </ContextAuth>
    </BrowserRouter>
  </StrictMode>,
);
