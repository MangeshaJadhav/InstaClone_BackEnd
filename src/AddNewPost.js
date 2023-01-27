import "./AddNewPost.css";
import { useState } from "react";

export const AddNewPost = () => {
    const [username, setusername] = useState('')
    const [address, setAddress] = useState('')
    const [imagefile, setImagefile] = useState("")
    const [description, setDescription] = useState("")

    const uploadPost = () => {
        
        const formData = new FormData();//map to take into key value pair
        formData.append("username", username)
        formData.append("address", address)
        formData.append("image_file", imagefile)
        formData.append("description", description)

        // fetch("http://localhost:8080/api",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":'application/json',
        //         'Accept':'application/json'
        //     },
        //     body:JSON.stringify({//it make the object into string
        //         username:"Mangesh Jadhav",
        //         password:" ABCD",
        //         file:imagefile,
        //     })
        // })//this will statric data
        // console.log(formData);
        // formData.forEach((val,key)=>{
        //     console.log(val,key)
        // })
        fetch("http://localhost:8080/api", {
            method: "POST",
            body: formData
        })//it will partision into two =files:[] and other one body{}strings
    }
    return (
        <div>
            <div className="Form">
                <input type="file" onChange={(e) => setImagefile(e.target.files[0])} />
                <input placeholder="Author" value={username} onChange={(e) => setusername(e.target.value)} />
                <input placeholder="Location" value={address} onChange={(e) => setAddress(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button onClick={uploadPost}>Post</button>
            </div>
        </div>
    )
} 