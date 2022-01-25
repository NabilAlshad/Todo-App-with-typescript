import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CreateNoteList from "../Components/Home/CreateNoteList";
import NoteList from "../Components/Home/NoteList";
import { Note } from "../Models/Note.model";
const Home = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: " Schedule meeting with UI/UX Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <NoteList notes={notes} setNotes={setNotes} />
        </Row>
      </Container>
      <Container>
        <Row>
          <CreateNoteList notes={notes} setNotes={setNotes} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
