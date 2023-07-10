import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import data from "./Notes-detal.json";
import Masonry from "react-masonry-css";

export function Note({ notes }) {
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
        {data.data.map((item, index) => (
          <div key={item.id}>
            <Card className="mt-4">
              <Card.Body
                className="outer-box p-3"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <Card.Title className="fw-semibold">{item.title}</Card.Title>
                <hr />
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
        {/* Render additional notes */}
        {notes.map((note, index) => (
          <div key={index}>
            <Card className="mt-4">
              <Card.Body
                className="outer-box p-3"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <Card.Title className="fw-semibold">{note.title}</Card.Title>
                <hr />
                <Card.Text>{note.desc}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Masonry>
    </>
  );
}

export function AddNote({ onAddNote }) {
  const [newNote, setNewNote] = useState({ title: "", desc: "" });

  const handleInputChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNote = () => {
    if (newNote.title.trim() !== "" && newNote.desc.trim() !== "") {
      onAddNote(newNote);
      setNewNote({ title: "", desc: "" });
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="title"
          value={newNote.title}
          onChange={handleInputChange}
          placeholder="Enter title"
        />
        <input
          type="text"
          name="desc"
          value={newNote.desc}
          onChange={handleInputChange}
          placeholder="Enter description"
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </>
  );
}
