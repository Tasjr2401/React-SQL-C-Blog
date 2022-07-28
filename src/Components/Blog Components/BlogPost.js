import axios from "axios";
import React, {useEffect, useState} from "react";

const BlogPost = () => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        //Get Blog object on first component render
    }, [])

    return (
        <div>
            <h1 id="Title">{blogTitle}</h1>
            <br />
            <h2 id="Author">{blogAuthor}</h2>
            <br />
            <h3 id="Date">{blogDate}</h3>
            <br />
            <p>{blogContent}</p>
        </div>
        //put comment section component after creation
   );
}