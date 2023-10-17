import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    

  const [text,setText] = useState("")

  const isAllLowerCase=(text)=>{
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        return false;
      }
    }
    return true;
  }

    const handleupClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const textTobold=()=>{
        let y=document.getElementById("exampleFormControlTextarea1");
        y.style.fontWeight="bold"
        y = text;
       setText(y);
       props.showAlert("Converted to Bold", "success")
    }
    const copyText=()=>{
    let a = document.getElementById("exampleFormControlTextarea1").value
     navigator.clipboard.writeText(a)
     props.showAlert("Text copied to Clipboard", "success")
    }
    const handleClear=()=>{
        setText("");
        props.showAlert("Cleared Text", "success")
    }
    const handleExtraSpaces = () => {
      // Replace multiple spaces with a single space
      setText(text.replace(/\s+/g, ' '));
      props.showAlert("Removed Extra Spaces", "success")
    };
    const hasMultipleSpaces = /\s{2,}/.test(text); // Check if the text has more than one consecutive space
 
  return (
    <>
    <div className="container my-3">
    <h2 className={`text-center ${props.mode==='dark'?'text-light':'dark'}`}>{props.heading}</h2>
    <div className="mb-3 my-3">
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'rgb(60 60 60)':'#f8f9fa',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <div className="container d-flex justify-content-center">
  <button disabled={text.length===0  || !isAllLowerCase(text)} className='btn btn-primary mx-1' onClick={handleupClick}>Convert text to UpperCase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={textTobold}>Convert text to Bold</button>
  <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={copyText}>Copy Text</button>
  <button disabled={text.length===0 || isAllLowerCase(text)} className='btn btn-primary mx-1' onClick={handleLowClick}>Convert text to LowerCase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
  <button disabled={text.length===0 || !hasMultipleSpaces} className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>


  </div>
  </div>
  <div className={`container d-flex justify-content-center flex-column ${props.mode==='dark'?'text-light':'dark'}`}>
    <h2 className='text-center'>Your text summary</h2>
    <p className='text-center'>No of words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
    <p className='text-center'>No of characters: {text.length}</p>
    <p className='text-center'>Reading Time: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
    <h2 className='text-center'>Preview:</h2>
    <p className='text-center'>{text.length===0?'Nothing to preview !':text}</p>
    
    
  </div>

  </>
  )
}
