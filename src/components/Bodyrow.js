import React from 'react'
import  "../styles/Bodyrow.css"
import {useHistory} from "react-router-dom";

function Bodyrow({ item }) {
    let history = useHistory();
    const showitem = () => {
        history.push(`/item/${item._id}`)
    }

    return (
        <div className="bodyrow" onClick={showitem}> 
            <p>{item.name}</p>
            <p>{item.rating}</p>
        </div>
    )
}

export default Bodyrow
