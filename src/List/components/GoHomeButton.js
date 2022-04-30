import React from "react";
import { Link } from "react-router-dom";

const GoHomeButton = () => {
    return(
        <Link className="goHomeBtn" to="/home">返回首頁</Link>
    );
};

export default GoHomeButton