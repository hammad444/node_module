import React from 'react'
import ClientsCases from './ClientsCases'
import ClientAForm from './ClientAForm'
import ClientCase from './ClientCase'
import CaseForm from './CaseForm'
import CaseRead from './CaseRead'
import CaseHearing from './CaseHearing'
import ClientUForm from './ClientUForm'
import CaseFiles from "./ClientPopup"

const Dairy = () => {
  return (
    <div className='dairy'>
    <ClientsCases/>
    <ClientAForm/>
    <ClientUForm/>
    <ClientCase/>
    <CaseForm/>
    <CaseRead/>
    <CaseHearing/>
    <CaseFiles hearingFile={"hearingFile"}/>
    </div>
  )
}

export default Dairy