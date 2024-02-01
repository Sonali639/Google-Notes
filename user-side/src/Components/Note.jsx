import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import Masonry from "react-masonry-css";
import Button from 'react-bootstrap/Button';
import data from "./Notes-detal.json"

export  function Note({ notes , onDeleteNote  }) {
  const colors = [
    "rgb(255, 242, 192)", // Red
    "rgb(209, 209, 238)", // Blue
    "rgb(240, 203, 210)", // Green
    "rgb(201, 232, 232)",
    "rgb(232, 213, 207)",
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  


  return (
    <>
      
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* Your Masonry items go here */}
      
        {/* Render additional notes */}
        {notes.map((note, index) => (
          <div key={index}>
            <Card className="mt-4">
              <Card.Body
                className="outer-box p-3"
                style={{ backgroundColor: colors[index % colors.length] }}>
                  <Button  className="btn-del " onClick={() => onDeleteNote(index)} ><i class="fa fa-trash-o"></i></Button>
                <Card.Title className="fw-semibold">{note.title}</Card.Title>
                <hr />
                <Card.Text>{note.content}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Masonry>
    </>
  );
}

export function AddNote({ onAddNote }) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNote = () => {
    if (newNote.title.trim() !== "" && newNote.content.trim() !== "") {
      onAddNote(newNote);
      setNewNote({ title: "", content: "" });
    }
  };



  

  return (
    <>
    <div className="text-center pt-3">
      <div>
        <input className="input-border-0"
          type="text"
          name="title"
          value={newNote.title}
          onChange={handleInputChange}
          placeholder="Enter title"
        />
        <input  className="input-border-0 "
          type="text"
          name="content"
          value={newNote.content}
          onChange={handleInputChange}
          placeholder="Enter description"
        />
        <button onClick={handleAddNote} className="btn-addnote py-2  px-3">Add Note</button>
      </div>
    </div>
    </>
  );
}
