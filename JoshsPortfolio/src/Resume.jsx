import React from 'react'
import { useNavigate } from 'react-router-dom'
import resume from "./assets/resume.pdf"

const Resume = () => {

    const nav = useNavigate();

  return (
    <div className="">
        <div className="back">
            <a onClick={()=>nav("/")} title='Back' className='px-10 text-3xl cursor-pointer '>←</a>
        </div>
    <div className='flex gap-5 items-center justify-center mt-80'>
      <h1>Download Resume: </h1>
      <a className='bg-green-800 rounded px-1' download={resume}>Download</a>
    </div>

    </div>
  )
}

export default Resume
