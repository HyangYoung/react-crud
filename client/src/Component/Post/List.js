import React, { useState, useEffect } from "react";
import { ListDiv, ListItem } from "../../Style/ListCSS.js"
import axios from "axios";

function List(props) {
    const [PostList, setPostList] = useState([]);

    useEffect(() => {
        axios
            .post("/api/post/list")
            .then((response) => {
                if (response.data.success) {
                    setPostList([...response.data.postList]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <ListDiv>
            {PostList.map((post, idx) => {
                return(
                    <ListItem>
                        <p className="title">{post.title}</p>
                        <p>{post.content}</p>
                    </ListItem>
                )
            })}
        </ListDiv>
    );
}

export default List;
