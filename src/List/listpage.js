import React, { useState, useEffect, useRef } from "react";
import db from "../firebase";
import { collection, getDocs, orderBy, addDoc, serverTimestamp, query } from "firebase/firestore";

import Edit from "./components/AddForm";
import ShowList from "./components/ShowList";
import GoHomeButton from "./components/GoHomeButton";

import "./listpage.css"


const ToDoList = () => {

    const [data, setData] = useState([]);
    const submittingStatus = useRef(false);

    useEffect(() => {
        if(data.length > 0){
            if(!submittingStatus.current){
                return
            }
            const { note, id } = data[0];
            try {
                addDoc(collection(db, "list"), {
                    note,
                    timestamp: serverTimestamp(),
                    id
                });
                submittingStatus.current = false
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }    
    },[data])

    useEffect(()=> {
        let datas = []
        const listRef = collection(db, "list");
        const q = query(listRef, orderBy("timestamp", "desc"));
        getDocs(q)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const { note, id } = doc.data();
                const obj = {
                    note,
                    id
                }
                datas.push(obj)
            });
            setData(datas)
        })
        
    }, [])


    return(
        <div className="container">
            <Edit addData={setData} submittingStatus={submittingStatus}/>
            <ShowList listData={data} deleteData={setData}/>
            <GoHomeButton />
        </div>
    );
};

export default ToDoList