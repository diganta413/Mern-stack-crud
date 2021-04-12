import React,{useState} from 'react'
import "../styles/Item.css";
import {useParams,useHistory} from "react-router-dom";
import axios from "axios";

function Item() {
    const [item,setitem] = useState([]);
    const { itemid } = useParams();
    const history = useHistory();
    axios.get(`http://localhost:4000/item/${itemid}`)
    .then(response => setitem(response.data))
    .catch(err => console.log(err));

    const del = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:4000/item/${itemid}/delete`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    
    return (
        <div className="item">
           <h1>Item Name: {item[0]?.name}</h1>
           <h1>Item Rating: {item[0]?.rating}</h1>
           <button onClick={() => history.push(`/item/${itemid}/update`)}>Update</button> 
           <button onClick={del}>Delete</button>
        </div>
    )
}

export default Item
