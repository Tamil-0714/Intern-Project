import React from 'react'
import File from "./File.jsx";
import "../style/files.css"

const Files = (userId) => {
  return (
    <div className='files-container'>
      <File/>
      <File/>
    </div>
  )
}

export default Files
