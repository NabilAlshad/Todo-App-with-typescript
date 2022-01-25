import React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../../Models/Note.model";

interface INotes {
  note: Note;
  deleteHandler: (id: string) => void;
  //   setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}
const Notes: React.FC<INotes> = ({ note, deleteHandler }) => {
  console.log(note);
  const { id, title, text, color } = note;
  //   const deleteHandler = (id: string) => {
  //     setNotes;
  //   };
  return (
    <div className="mt-5 col-md-4">
      <Card style={{ backgroundColor: color }} className="p-3">
        <Card.Title>{title}</Card.Title>
        {/* <Card.Title>Date assigned:{id}</Card.Title> */}
        <Card.Text>{text}</Card.Text>
        <Button variant="danger" onClick={() => deleteHandler(id)}>
          Delete
        </Button>
      </Card>
    </div>
  );
};

export default Notes;
