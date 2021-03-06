import React, { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ addData, submittingStatus }) => {

    const [note, setNote] = useState("");
    function noteChange(e){
        setNote(e.target.value)
    }

    function addItem(){
        if(note !== ""){
            submittingStatus.current = true;
            addData(function(prevData){
                return [
                    {
                        id: v4(),
                        note
                    },
                    ...prevData
                ]
            })
            setNote("")
        }else{
            return
        }     
    }

    return(
        <div>
            <h1 className="title">To Do List</h1>
            <div>
                <input type="text" className="inputArea" value={note} onChange={noteChange}/>
                <button className="addBtn" onClick={addItem}>新增</button>
            </div>
        </div>
    );
};

export default Edit