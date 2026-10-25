import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Capabilities } from "./pages/Capabilities";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Industries } from "./pages/Industries";
import { NotFound } from "./pages/NotFound";
import { Staffing } from "./pages/Staffing";
import { Technologies } from "./pages/Technologies";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="capabilities" element={<Capabilities />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="industries" element={<Industries />} />
          <Route path="staffing" element={<Staffing />} />
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
