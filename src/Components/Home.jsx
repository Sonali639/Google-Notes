import React, { useState } from "react";
import { Note, AddNote } from "./Note";

function Home() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <>
      <div className="container-fluid px-md-5">
  <div className='text-center bold' style={{fontSize:'34px'}}> <strong>NoteMaster</strong> </div>
  <div className='text-center pb-4'>Mastering Productivity with Intuitive Note Management</div>

  <div>
   
      <AddNote onAddNote={handleAddNote} />
      <Note notes={notes} />
    </div>
      </div>
    </>
  )
}

export default Home
