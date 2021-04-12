import React,{useState,useEffect} from 'react'
import "../styles/Update.css"
import axios from "axios";
import {useParams,useHistory} from "react-router-dom";

function Update() {
    const { itemid } = useParams();
    const [name,setname] = useState("")
    const [rating,setrating] = useState("")
    const history = useHistory();

            /*axios.get(`http://localhost:4000/item/${itemid}`)
            .then(response => {
            setname(response.data[0]?.name)
            setrating(response.data[0]?.rating)
            })
            .catch(err => console.log(err));*/
            

            const update = () => {
                const item = {name: name,rating: rating}
                axios.post(`http://localhost:4000/item/${itemid}/update`,item)
                .then((response) => console.log(`${itemid} updated`))
                .catch((err) => console.log(err))
                history.push("/");

            }

    

    

    return (
        <div className="update">
            <input placeholder="Enter item name" value={name} onChange={e => setname(e.target.value)}></input>
            <input placeholder="Enter item rating" value={rating} onChange={e => setrating(e.target.value)}></input>
            <button onClick={update}>Update</button>
        </div>
    )
}
 
export default Update
