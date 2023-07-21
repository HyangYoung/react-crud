import React, {useState, useEffect} from "react";

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
            console.log("content가 바뀌었습니다.")
        };
    }, [Content] )
    // 조건 상황


    return(
       <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: "30px",
        }}>
           <input type="test"
                  value={Content}
                  onChange={(event) => {
                      setContent(event.currentTarget.value);
                  }}/>
           <button
               onClick={()=>{
                   onSubmit();
               }}
               style={{ marginTop: "1rem" }}
           >Submit</button>
       </div>
    );
}

export default Upload;