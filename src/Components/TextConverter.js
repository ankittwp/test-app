import React,{useState} from 'react'

export default function TextConverter(props) {
    const[text,setText] =  useState("");
    const[prev,setPrev] =  useState("");
    const[bool,setBoolen] = useState(true);
    const[letterCount,setLetterCount] = useState(0);

    const rest = () => {
        setText(prev);
        setBoolen(true);
    }

    const handleOnChange = (event) => {
        setPrev(event.target.value);
        setText(event.target.value);
        setLetterCount(event.target.value.length)
        if(letterCount == 300) {
            alert("Maximum Limit is 300")
        }
    }
    const convertToUppercase = () => { 
        let textToUpper = text.toLocaleUpperCase();
        setText(textToUpper);
    }

    const convertToLowercase = () => { 
        let convertToLowercase = text.toLocaleLowerCase();
        setText(convertToLowercase);
    }
    const convertToCaptilize = () => { 
        let convertTextToCap = text.split(' ');
        let convertToStringCap = "";
        convertTextToCap.forEach( (i) => {
            convertToStringCap += `${i.charAt(0).toUpperCase()}${i.substring(1)} `
            setText(convertToStringCap)
        });
    }
    
    
    const copyToClipboard = () => {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard
          .writeText(copyText.value)
          .then(() => {
            alert("successfully copied");
          })
          .catch(() => {
            alert("something went wrong");
          });
    }

    const addHashTag = () => {
        if (bool) {
            setBoolen(false);
            let addHashTag = text.split(' ');
            let convertToString = "";
            addHashTag.forEach( (i) => {
                convertToString +=`#${i} `
                setText(convertToString)
            });
        }
    }

    const dlt = () => {
        setText("");
        setPrev("");
        navigator.clipboard.writeText("");
        setLetterCount(0);
    }

  return (
   <div className='textConverter my-5'>
    <div className='container'>
        <h1>{props.heading}</h1>
        <hr />
        <p><small>Remain Letter: {300-letterCount}/300</small></p>
        <textarea maxLength={300} className="form-control m-1" id="myInput" rows="5" onChange={handleOnChange} value={text}></textarea>
        <button type="button" className="btn btn-primary m-1" onClick={convertToUppercase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary m-1" onClick={convertToLowercase}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary m-1" onClick={convertToCaptilize}>Convert to Captilize</button>
        <button type="button" className="btn btn-secondary m-1" onClick={addHashTag}>Add # Tag</button>
        <button type="button" className="btn btn-success m-1" onClick={copyToClipboard}>Copy</button>
        <button type="button" className="btn btn-dark m-1" onClick={rest}>Rest to orignal text</button>
        <button type="button" className="btn btn-danger m-1" onClick={dlt}>Delete</button>
    </div>
   </div>
  )
}
