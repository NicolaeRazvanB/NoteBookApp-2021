import { React, useState, useEffect } from "react";
import axios from "axios";
import EditNote from "./EditNote";
export default function NoteCard({ note, curentUser }) {
  const [isClicked, setIsClicked] = useState(false);
  const deleteNote = () => {
    console.log(note);
    console.log(curentUser);
    axios.delete("/api/users/" + curentUser.id + "/notes/" + note.id);
  };
  return (
    <div>
      <div>
        {" "}
        <div
          id="card"
          onClick={() => {
            if (isClicked === true) setIsClicked(false);
            else setIsClicked(true);
          }}
        >
          <h5>{note.name}</h5>
          <h5>{note.subject}</h5>
          <h5>
            {note.activityType}
            {note.activityNumber}
          </h5>
          <h5>{note.activityDate}</h5>
        </div>
        <button onClick={deleteNote}>Delete Note</button>
      </div>
      {isClicked && <EditNote note={note} curentUser={curentUser} />}
    </div>
  );
}
