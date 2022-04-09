import React from 'react'

const ImgForm = () => {
  return (
        <div className='card'>
    <h4>Profile Picture</h4>
    <div className='payment-proceed-form col-12 p-0 mt-5'>
          <form className='file-form col-12'>
          <label for="formFile" class="file-label mt-2">Uoload Picture</label>
          <input className="file-input ml-4" type="file" id="formFile"/>
          </form>
          <button className="col-4 verify-btn" >Submit</button> 
          </div>
    </div>
  )
}

export default ImgForm