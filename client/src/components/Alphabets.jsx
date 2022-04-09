import React from 'react';

const Alphabets = (props) => {
    const AlphabaticalStatutes=(letter)=>{
      var alstatutes = document.querySelector(".alphabet-statutes")
      if(alstatutes){
        alstatutes.style.display = "block";
      }
      props.action(letter)
  }
  return <div className='alphabets-table'>
      <input type="button" value="A" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="B" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="C" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="D" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="E" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="F" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="G" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="H" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="I" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="J" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="K" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="L" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="M" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="N" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="O" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="P" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="Q" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="R" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="S" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="T" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="U" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="V" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="W" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="X" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="Y" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>
      <input type="button" value="Z" onClick={(e)=>{AlphabaticalStatutes(e.target.value)}}/>

  </div>;
};

export default Alphabets;
