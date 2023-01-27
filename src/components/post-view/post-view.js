import { useEffect, useState } from "react";
import Card from "../../card.js";
// import axios from 'axios';
import Header from "../header/header";

const PostView = () => {
    const [posts, setPosts] = useState([]);
    //to fetch data useEffect Hook
    useEffect(() => {
        fetch("http://localhost:3000/user").then((res) => res.json()).then((data) => {
            // console.log(data);
            setPosts(data);

        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        })
    }, [])

    //this fecth will return the promise
    return (
        //to make post dynamically
        <>
            <Header />
            <div className="post-container">
                {posts.map((post, i) => {
                    return (
                        <Card post={post} key={i} />
                    )//every child need key and post here is props
                })}
            </div>
        </>
    )
}
export default PostView;