import React from "react";
import db from "../../firebase";
import { doc, deleteDoc, query, collection, where, getDocs } from "firebase/firestore";

const Item = ({ note, deleteData, id}) => {

    function deleteItem(){
        let docId;
        const q = query(collection(db, "list"), where("id", "==", id));
        getDocs(q)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docId = doc.id;
            });
            delFetch(docId)
        })

        deleteData(function(prve){
            return prve.filter((item) => item.id !== id)
        });
    };

    function delFetch(docId){
        deleteDoc(doc(db, "list", docId))
        .then(() => {
            console.log(`刪除成功`);
        });
    }

    return(
        <div className="todoItem">
            <p>{note}</p>
            <button onClick={deleteItem}>刪除</button>
        </div>
    );
};

export default Item