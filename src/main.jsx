import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as Sentry from "@sentry/react";
import { BrowserTracing, Replay } from "@sentry/react";

Sentry.init({
  dsn: "https://f9534da3ee036acb96831ec63a46f611@o4508889938722816.ingest.us.sentry.io/4508889943834624",
  integrations: [new BrowserTracing(), new Replay()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
