import React from "react";
import ReactDOM from "react-dom";
import MyList from "./MyList";
import "./index.css";

const todos = [
    {
        task: "buy yogurt",
        done: false,
    },
    {
        task: "read email",
        done: false,
    },
    {
        task: "make tortillas",
        done: true,
    },
];

ReactDOM.render(
    <React.StrictMode>
        <MyList todos={todos} />
    </React.StrictMode>,
    document.getElementById("root")
);
