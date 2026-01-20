import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/styles/index.css";
import App from "@/app/App";
import { store } from "@/app/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <div>test 1231</div>
    </Provider>
  </StrictMode>,
);
