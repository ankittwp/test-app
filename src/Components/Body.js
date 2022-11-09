import React,{useState} from 'react'

export default function Body() {
    const[text,setText] = useState("Enter Your Text Here...")
    const addition = () => {

    }
    const handleOnChange = (event) => {
        setText(event.target.val);
        console.log(text)
    }
  return (
    <div className='body-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <input type="text"  className="form-control" value={text} onChange={handleOnChange} />
                    <button type="button" className="btn btn-primary my-1" onClick={addition}>Primary</button>
                </div>
                <div className='col-8'></div>
            </div>
        </div>
    </div>
  )
}