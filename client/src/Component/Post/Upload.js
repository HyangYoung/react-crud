import React, {useState } from "react"
import {UploadButtonDiv, UploadDiv, UploadForm} from "../../Style/UploadCSS.js"
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Upload(props) {

    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    let navigate = useNavigate();


    const onSubmit =(e) => {
        e.preventDefault();

        if (Title === "" || Content === ""){
          return alert("Please fill all filed")
      }

      let body = {
          title: Title,
          content : Content,
      }

      axios.post("/api/post/submit", body).then((response) => {
          if(response.data.success){
              alert("Submit success")
              navigate("/");
          }else {
              alert("Submit failed")
          }
      }).catch((err)=> {
          console.log(err)
      })
    };



    return(
       <UploadDiv>
           <UploadForm>
               <label htmlFor="label">Title</label>
               <input
                   id = "title"
                   type="text"
                   value={Title}
                   onChange={(event) => {
                       setTitle(event.currentTarget.value);
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
                       onClick={(e)=>{
                       onSubmit(e);
                   }}> Submit
                   </button>
                   </UploadButtonDiv>
           </UploadForm>


       </UploadDiv>
    );
}

export default Upload;