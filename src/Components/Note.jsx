import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import data from "./Notes-detal.json";

function Note() {

    const colors = [
        'rgb(255, 242, 192)',   // Red
        'rgb(209, 209, 238)',   // Blue
        'rgb(240, 203, 210)',   // Green
        'rgb(201, 232, 232)' ,
        'rgb(232, 213, 207)',  
      ];

  return (
    <>
     
        <div className="row ">
          {data.data.map((item, index) => (
            <>
              <div className="col-md-3"  key={item.id}>
              <Card className="mt-4">
                <Card.Body className="outer-box p-3"  style={{ backgroundColor: colors[index % colors.length] }}>
                  <Card.Title>{item.title}</Card.Title>
                  <hr />
                  {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                  <Card.Text>{item.desc} </Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
                </Card>
              </div>
            </>
          ))}
        </div>
     
    </>
  );
}

export default Note;
