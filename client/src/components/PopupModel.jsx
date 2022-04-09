import React,{useState} from 'react';

const PopupModel = (props) => {
    
    // ----------------------highlight word---------------------------
    // function highlight(text) {
    //   var note = document.getElementById("desc_pre");
    //     var innerHTML = note.innerHTML.toLowerCase();
    //     var index = innerHTML.indexOf(text);
    //     if (index >= 0) { 
    //      innerHTML = innerHTML.substring(0,index) + `<span class='highlight'>${text}</span>`+ innerHTML.substring(index+text.length);
    //      note.innerHTML = innerHTML;
    //     }
    // }

    function highlight(text) {
      var note = document.getElementById("desc_pre")
      note.innerHTML = note.innerHTML.replace(
          new RegExp(text + '(?!([^<]+)?<)', 'gi'),
          '<b style="background-color:#ff0;font-size:100%">$&</b>'
      );
  }

const [matchWord, setMatchWord]=useState("")


    const findMatchWord=()=>{
      highlight(matchWord)
    }

  return <div>
      <div className="">
       <div className="modal_content">
        <span className="close-popup-btn" onClick={props.closePopup}>&times;</span>
        <h5 className='my-3'>{props.title}</h5>
        <form className="my-2">
                              <div className="form-primary d-flex">
                              <input type="text" name="" onChange={(e)=>{setMatchWord(e.target.value)}} placeholder="Search Text (Exact Match)" className="form-control"/>
                              <button className='btn btn-brown' type="button" onClick={findMatchWord}>Search</button>
                              </div>
                              </form>
        <pre><p className="model_desc" id="desc_pre">{props.desc}</p></pre>
       </div>
      </div>
  </div>;
};

export default PopupModel;
