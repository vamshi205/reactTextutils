import React, { useState } from "react";

function Textform(props) {


    const [text, setText] = useState("Enter text to analyze..");
    const handleClickUpperCase = () => {
        let x = text;
        x = x.toUpperCase();
        setText(x);
    }
    const handleClickLowerCase = () => {
        let x = text;
        x = x.toLowerCase();
        setText(x);
    }
    const handleText = (e) => {
        setText(e.target.value);
    }
    return (
        <>        
        <div className="container my-3" style={props.style}>
            <h3>Enter your text to analyze</h3>
            <textarea style={{ backgroundColor: props.mode === 'dark' ? '#2D4356' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control my-4" value={text} id="myText" onChange={handleText} rows="8"></textarea>
            <button type="button" onClick={handleClickUpperCase} className="btn btn-primary">Capitalize</button>
            <button type="button" onClick={handleClickLowerCase} className="btn btn-primary mx-3">Lowerize</button>
        </div>

        <div className="container">
                <h4 style={props.style}>{text.split(" ").length} words and {text.length} characters</h4>
        </div>
        </>

    );
}

export default Textform;
