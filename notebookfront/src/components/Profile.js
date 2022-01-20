import { React, useState } from "react";
import AddNote from "./AddNote";
import ViewNotes from "./ViewNotes";
import "../styles/Profile.css";
import StudyGroup from "./StudyGroup";
import ViewGroups from "./ViewGroups";
export default function Profile({ curentUser }) {
  const [currentView, setcurrentView] = useState("");
  const [isAddingNote, setAddingNote] = useState(false);

  return (
    <div>
      <h1>Hello , {curentUser.firstName}</h1>
      <button
        className="general-button"
        onClick={() =>
          currentView === "addNote"
            ? setcurrentView("")
            : setcurrentView("addNote")
        }
      >
        Add a new Note{" "}
      </button>
      <button
        className="general-button"
        onClick={() =>
          currentView === "viewNotes"
            ? setcurrentView("")
            : setcurrentView("viewNotes")
        }
      >
        View Notes
      </button>
      <button
        className="general-button"
        onClick={() =>
          currentView === "createGroup"
            ? setcurrentView("")
            : setcurrentView("createGroup")
        }
      >
        Create Study Group
      </button>
      <button
        className="general-button"
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
      {currentView === "createGroup" && <StudyGroup curentUser={curentUser} />}
      {currentView === "viewGroups" && <ViewGroups curentUser={curentUser} />}
    </div>
  );
}
