import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import "./popup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from "./store/StateProvider";

var mountNode = document.getElementById("popup");
ReactDOM
    .render(
        <StateProvider>
            <App />
        </StateProvider>,
        mountNode
    );
