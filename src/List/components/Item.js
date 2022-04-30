import React from "react";

const Item = ({ note, deleteData, id }) => {

    function deleteItem(){
        deleteData(function(prve){
            return prve.filter((item) => item.id !== id)
        });
    };

    return(
        <div className="todoItem">
            <p>{note}</p>
            <button onClick={deleteItem}>刪除</button>
        </div>
    );
};

export default Item