import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import data from "./Notes-detal.json";
import Masonry from "react-masonry-css";

function Note() {
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

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', desc: '' });

  const handleInputChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value
    });
  };

  const handleAddNote = () => {
    if (newNote.title.trim() !== '' && newNote.desc.trim() !== '') {
        setNotes([...notes, newNote]);
        setNewNote({ title: '', desc: '' });
    }
}

  return (
    <>
      {/* <div className="row ">
          {data.data.map((item, index) => (
            <>
              <div className="col-md-3"  key={item.id}>
              <Card className="mt-4" key={item.id}>
                <Card.Body className="outer-box p-3"  style={{ backgroundColor: colors[index % colors.length] }}>
                  <Card.Title>{item.title}</Card.Title>
                  <hr />
                  <Card.Text>{item.desc} </Card.Text>
                </Card.Body>
                </Card>
              </div>
            </>
          ))}
        </div> */}

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
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.title}</h3>
            <p>{note.desc}</p>
          </li>
        ))}
      </ul>
   </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* Your Masonry items go here */}
        {data.data.map((item, index) => (
          <>
            <div>
              <Card className="mt-4" key={item.id}>
                <Card.Body
                  className="outer-box p-3"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  <Card.Title className="fw-semibold"> {item.title}</Card.Title>
                  <hr />
                  <Card.Text>{item.desc} </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* <div>Item 2</div>
      <div>Item 3</div> */}
          </>
        ))}
        {/* ... */}
      </Masonry>
    </>
  );
}

export default Note;
