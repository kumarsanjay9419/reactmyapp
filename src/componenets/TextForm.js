import React,{useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick=()=>{
    //console.log("UpperCase was clicked "+ text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase","success");
  }
  const handleLowClick=()=>{
    //console.log("UpperCase was clicked "+ text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase","success");
    
  }
  const handleClearClick=()=>{
    //console.log("UpperCase was clicked "+ text);
    let newText='';
    setText(newText);
    props.showAlert("  Text Field has been cleared!!!","success");
  }
  
  const handleOnChange=(event)=>{
   // console.log("onchange");
    setText(event.target.value);
   
  }

  //Hooks ............
  const [text, setText] = useState('');
   //wrong way to change text
  //text="wrong way to change text";
  //Right way to change text
 // setText=("right way to change text");
  //console.log('Enter text here');

  const handleCopy=()=>{
console.log("I am Copy");
   var text= document.getElementById("myBox");
   text.select();
    text.setSelectionRange(0,9999);
   navigator.clipboard.writeText(text.value);
   props.showAlert(" Text field has been copied!!","success");
  }
  const handleExtraSpace=()=>{
    console.log("I am Sanjay...");
     //remove extra space
   // let trimmedStr = text.replace(/ +(?= )/g,'');
   //or we can write this another way to remove extra spaces........
   let trimmedStr = text.split(' ').filter(s => s).join(' ') 
    setText(trimmedStr);
    props.showAlert("Extra spaces has been removed","success");
        
      }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      
<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
  id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowerrcase</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Text Copy</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summery</h2>
      <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textBox above to preview it here"}</p>

    </div>
    </>
  )
}
