import React,{useEffect,useState} from 'react';
import {io} from 'socket.io-client';
import Comment from "./Comment";

function Overview()
{

    const [comment,setComment] = useState([]);

    useEffect(() => {
       const socket  = io("http://localhost:5000/");

       socket.on("message",data => setComment(prevState => {
           return [...prevState,data];
       }))
    },[])

    const render = comment.map(item => {
        return <Comment text={item} key={item} />
    })

    return(
        <div>
            <p>Overview</p>
            {render}
        </div>
    )
}

export default Overview;