import React, {useState} from 'react';

function Test() {
    const [Content, setContent] = useState("");
    const [ContentList, setContentList] = useState([]);

    const onSubmit =() => {
        let tempArr = [...ContentList];
        tempArr.push(Content);
        setContentList([...tempArr]);
        setContent("");
    };

    return(
        <div
            style={{
                display:"flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%"
            }}>

            {ContentList.map((content, idx) => {
                return (<div key = {idx}
                style={{
                    width: "100%",
                    marginLeft: "1rem",
                }}>
                    내용: {content}
                <hr/>
                </div>)
            })}

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
    )
}

export default Test;
