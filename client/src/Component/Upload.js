import React, {useState, useEffect} from "react"
import {UploadButtonDiv, UploadDiv, UploadForm} from "../Style/UploadCSS.js"

function Upload(props) {

    const [Content, setContent] = useState("");

    const onSubmit =() => {
        let tempArr = [...props.ContentList];
        tempArr.push(Content);
        props.setContentList([...tempArr]);
        setContent("");
    };

    useEffect(() => {
        // 컴포넌트가 나타날 때 실행될 코드
        return () => {
            //컴포넌트가 죽을 때 실행될 코드
            console.log("content has updated")
        };
    }, [Content] )
    // 조건 상황


    return(
       <UploadDiv>
           <UploadForm>
               <label htmlFor="label">Title</label>
               <input
                   id = "title"
                   type="text"
                   value={Content}
                   onChange={(event) => {
                       setContent(event.currentTarget.value);
                   }}/>
               <label htmlFor="content">Content</label>
               <textarea
                   type="text"
                   id = "content"
                   value={Content}
                   onChange={(event) => {
                       setContent(event.currentTarget.value);
                   }}/>

               <UploadButtonDiv>
                   <button
                       onClick={()=>{
                       onSubmit();
                   }}> Submit
                   </button>
                   </UploadButtonDiv>
           </UploadForm>


       </UploadDiv>
    );
}

export default Upload;