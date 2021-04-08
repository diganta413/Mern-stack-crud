import React,{useState,useEffect} from 'react'
import "../styles/Createlist.css"
import axios from "axios";
import {useHistory} from "react-router-dom";

function Createlist() {
    const [name,setname] = useState("");
    const [rating,setrating] = useState("");
    let history = useHistory();

    const add = (e) => {
        e.preventDefault();
        const item = {name: name, rating: rating};
        axios.post("http://localhost:4000/",item)
        .then((res) => console.log(res.data))
        history.push("/");
    }

    return (
        <form className="createlist">
            <input placeholder="Enter item name" value={name} onChange={e => setname(e.target.value)}></input>
            <input placeholder="Enter item rating" value={rating} onChange={e => setrating(e.target.value)}></input>
            <button type="submit" onClick={add}>Create</button>
        </form>
    )
}

export default Createlist
