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

    const clearText = ()=>{ 
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared!", "success");
  }

  const copyText = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
   
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    return(
        <>
<h1 className='text-center my-2 mb-2'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} placeholder='Enter Text Here' onChange={handleOnChange} id="myBox" rows="10">
  </textarea>
</div>
<div className="buttons">
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={setToUpperCase}>To Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={setToLowerCase}>To Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
</div>
<h2 className='my-3'>Your Text Summery</h2>
<p>Character Count: {text.length} | Word Count: {text.split(" ").filter((element)=> {return element.length!==0}).length} | Line Count: {countLines(text)}</p>
<h2 className="my-2">Preview</h2>
<p>{text?text:"Nothing to preview"}</p>
</>
    )
};

TextForm.propTypes= {heading: PropTypes.string.isRequired}

TextForm.defaultProps= {
    heading: 'Change Text Here'
};
