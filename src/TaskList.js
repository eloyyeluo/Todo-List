import { firestoreReadText } from "./FirebaseAPI.ts";
import TaskRow from './TaskRow';
import React, { useState } from 'react';
import { useEffect } from "react";

const TaskList = () => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        firestoreReadText((list, err) => {
            setRows(list);
            console.log(list);
        })
        setRows(rows)
    }, [])
    
    return (
        <div>
            {rows.map((val, key) => {
        return (
            <TaskRow displayText={val.data.text} id={val.id}/>
        )
      })}
        </div>
    );
}

export default TaskList;
