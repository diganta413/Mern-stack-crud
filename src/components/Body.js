import React,{useState,useEffect} from 'react'
import "../styles/Body.css"
import Bodyrow from "./Bodyrow";
import axios from "axios";

function Body() {
    const [items,setItems] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:4000/")
        .then(response => {
            if(response.data.length > 0){
                setItems(response.data);
            }
        })
    }, [])

    console.log(items);

    return (
        <div className="body">
            <div className="table_header">
                <p>Item Name</p>
                <p>Item Rating</p>
            </div>
            <div className="table_body">
                {items?.map((item) =>
                <Bodyrow item={item}/>)}
            </div>
        </div>
    )
}

export default Body
