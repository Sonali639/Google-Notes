import React from 'react'
import Note from './Note'

function Home() {
  return (
    <>
      <div className="container-fluid px-md-5">
  <div className='text-center bold' style={{fontSize:'34px'}}> <strong>NoteMaster</strong> </div>
  <div className='text-center pb-4'>Mastering Productivity with Intuitive Note Management</div>

  {/* <button type="button" class="btn btn-success px-4 py-2" style={{border:'1px solid green', borderRadius:'0px', fontWeight:'600'}}>Add Note</button> */}

  <Note />
      </div>
    </>
  )
}

export default Home
