import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABHWOTqy-czeZ-y_3Mk3t7KfLZ2B4n9VE",
  authDomain: "tri-m-website.firebaseapp.com",
  projectId: "tri-m-website",
  storageBucket: "tri-m-website.appspot.com",
  messagingSenderId: "217163697636",
  appId: "1:217163697636:web:f705210665e5afae318bf1",
  measurementId: "G-T5MXLYH1VQ",
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
