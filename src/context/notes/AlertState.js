import React, { useState } from "react";

import NoteContext from "./AlertContext";
import Alert from '../../components/Alert'
const AlertState=(props)=>{
    console.log("hlo")
    const [alert, SetAlret]= useState({type:"", msg:" "})
    const setAlert=(lrt)=>{
        SetAlret(lrt)
        console.log(alert)
        setTimeout(() => {
            SetAlret({type:"", msg:" "})
        }, 3000);

    }

    return (
        <NoteContext.Provider value={{setAlert,alert }} >
            {
                props.children
            }
        </NoteContext.Provider>
    )
}

export default AlertState