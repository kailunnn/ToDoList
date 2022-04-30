import React from "react";
import { Link } from "react-router-dom";

const StartButton = () => {
    return(
        <Link className="startBtn" to="/todolist">點此開始</Link>
    );
};

export default StartButton