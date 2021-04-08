import React,{useState} from 'react'
import "../styles/Item.css";
import {useParams} from "react-router-dom";
import axios from "axios";

function Item() {
    const [item,setitem] = useState([]);
    const { itemid } = useParams();
    axios.get(`http://localhost:4000/item/${itemid}`)
    .then(response => setitem(response.data))
    .catch(err => console.log(err));

    
    
    return (
        <div className="item">
           <h1>Item Name: {item[0]?.name}</h1>
           <h1>Item Rating: {item[0]?.rating}</h1>
           <button>Update</button> 
           <button>Delete</button>
        </div>
    )
}

export default Item
