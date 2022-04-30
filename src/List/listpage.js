import React, { useState } from "react";

import Edit from "./components/AddForm";
import ShowList from "./components/ShowList";
import GoHomeButton from "./components/GoHomeButton";

import "./listpage.css"

const ToDoList = () => {

    const [data, setData] = useState([]);

    return(
        <div className="container">
            <Edit addData={setData}/>
            <ShowList listData={data} deleteData={setData}/>
            <GoHomeButton />
        </div>
    );
};

export default ToDoList