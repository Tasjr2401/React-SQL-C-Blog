import React, { useState } from "react";
import axios from "axios";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');

    function handleBlogSubmit({target}) {
        //axios post the blog to the database
    }

    return (
        <div>
            <form id="Form" onSubmit={handleBlogSubmit}>
                <input id="Title" type="text" onChange={setTitle(this.value)} />
                <br />
                <input id="BlogContent" type='text' onChange={setBlogContent(this.value)} />
                <br />
                <input id="Submit" type='submit' value='Submit' />
            </form>
        </div>
    );
}