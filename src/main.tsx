import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDAAZ9I3Xq09Ias2WuVNhm3X376zkwLTzM",
  authDomain: "tri-m-lessons.firebaseapp.com",
  projectId: "tri-m-lessons",
  storageBucket: "tri-m-lessons.appspot.com",
  messagingSenderId: "703890377241",
  appId: "1:703890377241:web:4e5c39b075ace61120f888",
  measurementId: "G-5XDCRBRZTG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App app={app} />
    </MantineProvider>
  </React.StrictMode>
);
