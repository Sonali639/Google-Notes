import React, { useState,useEffect } from "react";
import { Note, AddNote} from "./Note";
import Empty from "../img/empty.jpg";


function Home() {

  
  const [data, setData] = useState([]);

 const handleAddNote = async (newNote) => {
    try {
      const response = await fetch("http://localhost:5000/notes/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
        const result = await response.json();
        setData([...data, result]);
        setShowSuccessMessage(true);
      } else {
        console.error("Failed to add note");
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleDelete(noteid){
    const confirmation = window.confirm("Are you sure you want to delete this note?");
    if (confirmation) {
      const newNotes = data.filter((note, index) => index !== noteid);
      setData(newNotes);
      setShowSuccessMessage(true);
    }
  }
 

  setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

   
  function handleDeleteAll(){
    setData([]);
    if(data.length===0){
      alert("No Notes to Delete")
    }
  }

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/notes/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('Error fetching data');
      }
    };

    fetchData();
  }, []);

  console.log(data);
  

  return (
    <>
      <div className="container-fluid px-md-5">
  <div className='text-center bold' style={{ lineHeight: '1.2'}}> <strong  style={{fontSize:'54px'}}> <span className="stroke-text ">Note</span>Master</strong> </div>
  <div className='text-center pb-4' style={{color:'#535353'}}>Anytime, anywhere – it's Note time! Go!</div>

  <div>
   
      <AddNote onAddNote={handleAddNote}  />
      <div>
      {data.length === 0 ? (
          <div className="text-center pt-4">
          <img  src={Empty} alt="" width="30%" />
        <h2 className=" pt-3 pb-1 empty-msg">Looks like there are no notes here. </h2>
        <p className="empty-msg">You can add Note Just by Clicking 'Add Note' button</p>
        </div>
      ) : (
        <Note notes={data} onDeleteNote={handleDelete} />
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
