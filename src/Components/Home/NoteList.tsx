import React from "react";
import { Note } from "../../Models/Note.model";
import Notes from "./Notes";

interface INotelistProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  // deleteHandler: MouseEventHandler<HTMLButtonElement>;
}
const NoteList: React.FC<INotelistProps> = ({ notes, setNotes }) => {
  //   const { id };
  console.log(notes);
  const deleteHandler = (id: string) => {
    setNotes(notes.filter((note) => note.id != id));
  };
  return (
    <>
      {notes.map((note) => (
        <Notes key={note.id} note={note} deleteHandler={deleteHandler}></Notes>
      ))}
    </>
  );
};

export default NoteList;
