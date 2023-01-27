import { useEffect, useState } from "react"

export const ShowPosts = () => {
    const [servRes, setServRes] = useState(null)
    
    const fetchAllPosts = async () => {
        const resp = await fetch('http://localhost:8080/all')
        setServRes(await resp.json());
    }
    
    useEffect(() => {
        fetchAllPosts()
    }, [])
    if (servRes === null) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {
                servRes?.result?.map?.((post,index)=>{
                    return <img src={'http://localhost:8080/images${post.image_file}'} key={index}/>
                })
            }
        </div>
    )

}