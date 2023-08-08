import React, { useState } from "react";
import { Note, AddNote} from "./Note";
import Notes from "./Notes-detal.json";
import Empty from "../img/empty.jpg";


function Home() {
  
  const [notes, setNotes] = useState(Notes.data);
  
  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleDelete(noteid){
    const confirmation = window.confirm("Are you sure you want to delete this note?");
    if (confirmation) {
      const newNotes = notes.filter((note, index) => index !== noteid);
      setNotes(newNotes);
      setShowSuccessMessage(true);
    }
  }

  setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);


  function handleDeleteAll(){
    setNotes([]);
    if(notes.length===0){
      alert("No Notes to Delete")
    }
  }
  
  

  return (
    <>
      <div className="container-fluid px-md-5">
  <div className='text-center bold' style={{ lineHeight: '1.2'}}> <strong  style={{fontSize:'54px'}}> <span className="stroke-text ">Note</span>Master</strong> </div>
  <div className='text-center pb-4' style={{color:'#535353'}}>Anytime, anywhere – it's Note time! Go!</div>

  <div>
   
      <AddNote onAddNote={handleAddNote}  />
      <div>
      {notes.length === 0 ? (
          <div className="text-center pt-4">
          <img  src={Empty} alt="" width="30%" />
        <h2 className=" pt-3 pb-1 empty-msg">Looks like there are no notes here. </h2>
        <p className="empty-msg">You can add Note Just by Clicking 'Add Note' button</p>
        </div>
      ) : (
        <Note notes={notes} onDeleteNote={handleDelete} />
      )}
    </div>


      <div className=" pb-3 text-end ">
      <button className="btn-del-all py-2 px-3 " onClick={handleDeleteAll}>Delete All Notes</button>
      </div>
    </div>
      </div>
    </>
  )
}


export default Home;
