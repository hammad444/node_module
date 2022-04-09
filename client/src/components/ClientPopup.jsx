import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineFileImage,AiOutlineArrowLeft} from "react-icons/ai";

const CaseFiles = () => {

  const [img , setImg]=useState("")

  const caseFiles = useSelector((state) => state.caseFiles);
  const files=caseFiles?.files

  const closeFiles=()=>{
    var casefiles=document.getElementsByClassName("case-files")[0]
    casefiles.style.display="none";
    var viewfile=document.getElementsByClassName("view-file")[0]
    if(viewfile){
      viewfile.style.display="none";
    }
  }
  const closeNotes=()=>{
    var casenotes=document.getElementsByClassName("case-notes")[0]
    casenotes.style.display="none";
  }
  const closeDesc=()=>{
    var casedesc=document.getElementsByClassName("case-desc")[0]
    casedesc.style.display="none";
  }
  const viewFile=(img)=>{
    setImg(img)
    var viewfile=document.getElementsByClassName("view-file")[0]
    viewfile.style.display="block";
  }
  const closeFile=()=>{
    var viewfile=document.getElementsByClassName("view-file")[0]
    viewfile.style.display="none";
  }
  return (
    <div>
    <div className='dairy-popup case-files card'>
      <div className="case_content px-5 py-4">
      <span className="close-popup-btn" onClick={closeFiles}>&times;</span>
      <h3 className='text-center'>Case Files</h3>
      <div className="case_desc">
      <div className="files-box mt-3">
        {
        files && files.map((file)=>{
          return       <div className="list-item d-flex position-relative">
          <p className='index'><strong>1-</strong></p>
          <p>{file && file?.split("/").pop()}</p>
          <br/>
          <p className='position-absolute icon' onClick={()=>{viewFile(file && file)}}>
          View File<AiOutlineFileImage/></p>
        </div>
        })
      }
      </div>
      <div className="view-file">
        <img src={img && img}/>
      <span onClick={closeFile}><AiOutlineArrowLeft/></span>
      </div>
      </div>
      </div>
    </div>
    <div className='dairy-popup case-notes card'>
      <div className="case_content px-5 py-4">
      <span className="close-popup-btn" onClick={closeNotes}>&times;</span>
      <h3 className='text-center'>Case Notes</h3>
      <div className="case_desc">
        {
          files && files.map((file)=>{
          return       <div className=" d-flex">
          <strong className='mr-2'>1-</strong>
          <p>{file && file}</p>
        </div>
          })
        }
      </div>
      </div>
    </div>
    <div className='dairy-popup case-desc card'>
      <div className="case_content px-5 py-4">
      <span className="close-popup-btn" onClick={closeDesc}>&times;</span>
      <h3 className='text-center'>Case Description</h3>
      <div className="case_desc">
        {
          files && files.map((file)=>{
            return <div className="d-flex">
            <strong className='mr-2'>1-</strong>
            <p>{file && file}</p>
          </div>
          })
        }
      </div>
      </div>
    </div>
    </div>
  )
}

export default CaseFiles