import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from 'react-bootstrap';

function Detail() {
    let params = useParams();
    const [PostInfo, setPostInfo] = useState({}); // 빈 객체로 초기화
    const [Flag, setFlag] = useState(false);

    useEffect(() => {
        let body = {
            postNum: params.postNum,
        };
        axios
            .post("/api/post/detail", body)
            .then((response) => {
                if(response.data.success){
                    setPostInfo(response.data.postList);
                    setFlag(true);
                    console.log(response.data.postList);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params.postNum]);

    useEffect(() => {
        if(Flag){
            console.log(PostInfo?.title)
        }
    }, [Flag, PostInfo]);

    return (
        <div>
            {PostInfo?.length ? (
                    <div>
                        {PostInfo?.title}
                        {PostInfo?.content}
                    </div>
                ) :
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading…</span>
                </Spinner>
            }
        </div>
    );
}

export default Detail;
