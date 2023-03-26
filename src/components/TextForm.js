import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props){

  const countLines= (text) => {
    if (text == null || text.trim() ==='') {
      return 0;
    }
    let lines = 1;
    let length = text.length;
    for (let i = 0; i < length; i++) {
      let c = text.charAt(i);
      if (c === '\n') {
        lines++;
      }
    }
    return lines;
  }

    const setToUpperCase = () => {
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert('Text is converted to uppercase','success');
    }

    const setToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text is converted to lowercase','success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text,setText] = useState('Enter Text Here');
    return(
        <>
<h1 className='text-center'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10">
  </textarea>
</div>
<div className="btn btn-primary" onClick={setToUpperCase}>To Uppercase</div>
<div className="btn btn-primary mx-3" onClick={setToLowerCase}>To Lowercase</div>
<h2 className='my-3'>Your Text Summery</h2>
<p>Character Count: {text.length} | Word Count: {text.length? text.split(" ").length :0} | Line Count: {countLines(text)}</p>
</>
    )
};

TextForm.propTypes= {heading: PropTypes.string.isRequired}

TextForm.defaultProps= {
    heading: 'Chnage Text Here'
};
