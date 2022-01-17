import { React, useState, useEffect } from "react";
import axios from "axios";
export default function EditNote({ note, curentUser }) {
  const [editedNote, setEditedNote] = useState(note);
  const [isSaved, setIsSaved] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editedNote);
    axios
      .put("/api/users/" + curentUser.id + "/notes/" + note.id, editedNote)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setIsSaved(true);
  };
  if (isSaved === false)
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="name"
            defaultValue={note.name}
            placeholder="Title of your note"
            onChange={(e) => (editedNote.name = e.target.value)}
          />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            defaultValue={note.subject}
            placeholder="Subject of the note"
            onChange={(e) => (editedNote.subject = e.target.value)}
          />
          <label>Activity Type</label>
          <input
            type="text"
            name="activityType"
            defaultValue={note.activityType}
            placeholder="Activity Type"
            onChange={(e) => (editedNote.activityType = e.target.value)}
          />
          <label>Activity Number</label>
          <input
            type="text"
            name="activityNumber"
            defaultValue={note.activityNumber}
            placeholder="Activity Number"
            onChange={(e) => (editedNote.activityNumber = e.target.value)}
          />
          <label>Activity Date</label>
          <input
            type="text"
            name="activityDate"
            defaultValue={note.activityDate}
            placeholder="Activity Date"
            onChange={(e) => (editedNote.activityDate = e.target.value)}
          />
          <br />
          <textarea
            rows="25"
            cols="100"
            defaultValue={note.text}
            placeholder="Start writing your note "
            onChange={(e) => (editedNote.text = e.target.value)}
          ></textarea>
          <br />
          <input type="submit" value="Save Changes" />
        </form>
      </div>
    );
  else return <h1>Changes saved succesfully</h1>;
}
