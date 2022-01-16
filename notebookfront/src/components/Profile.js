import { React, useState } from "react";
import AddNote from "./AddNote";
import ViewNotes from "./ViewNotes";
export default function Profile({ curentUser }) {
  console.log(curentUser);
  const [currentView, setcurrentView] = useState("");
  const [isAddingNote, setAddingNote] = useState(false);

  return (
    <div>
      <h1>Hello , {curentUser.firstName}</h1>
      <button
        onClick={() =>
          currentView === "addNote"
            ? setcurrentView("")
            : setcurrentView("addNote")
        }
      >
        Add a new Note{" "}
      </button>
      <button
        onClick={() =>
          currentView === "viewNotes"
            ? setcurrentView("")
            : setcurrentView("viewNotes")
        }
      >
        View Notes
      </button>
      <button
        onClick={() =>
          currentView === "createGroup"
            ? setcurrentView("")
            : setcurrentView("createGroup")
        }
      >
        Create Study Group
      </button>
      <button
        onClick={() =>
          currentView === "viewGroups"
            ? setcurrentView("")
            : setcurrentView("viewGroups")
        }
      >
        View Study Groups
      </button>
      {currentView === "addNote" && <AddNote curentUser={curentUser} />}
      {currentView === "viewNotes" && <ViewNotes curentUser={curentUser} />}
    </div>
  );
}
