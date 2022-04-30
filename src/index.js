import React from "react"; 
import * as ReactDOMClient from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from "./App";
import Home from "./Home/homepage";
import ToDoList from "./List/listpage";

import "./index.css";
import "./cssReset.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="todolist" element={<ToDoList />} />
        </Routes>
    </BrowserRouter>
);