import { React, useState } from "react";
import axios from "axios";
import "../styles/AddNote.css";
export default function AddNote({ curentUser }) {
    const [note, setNote] = useState({
        name: "",
        subject: "",
        activityType: "",
        activityNumber: "",
        activityDate: "",
        text: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(note);
        axios
            .post("/api/users/" + curentUser.id + "/notes", note)
            .then((response) => {
                console.log(response.status);
            })
            .catch((error) => {
                console.log(error.response);
            });
        e.target.reset();
    };
    return (
        <div>
            <form className="add-note-form" onSubmit={handleSubmit}>
                <div className="form-content">
                    <div className="inputs">
                        <label>Title</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Title of your note"
                            onChange={(e) => (note.name = e.target.value)}
                        />
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject of the note"
                            onChange={(e) => (note.subject = e.target.value)}
                        />
                        <label>Activity Type</label>
                        <input
                            type="text"
                            name="activityType"
                            placeholder="Activity Type"
                            onChange={(e) =>
                                (note.activityType = e.target.value)
                            }
                        />
                        <label>Activity Number</label>
                        <input
                            type="text"
                            name="activityNumber"
                            placeholder="Activity Number"
                            onChange={(e) =>
                                (note.activityNumber = e.target.value)
                            }
                        />
                        <label>Activity Date</label>
                        <input
                            type="text"
                            name="activityDate"
                            placeholder="Activity Date"
                            onChange={(e) =>
                                (note.activityDate = e.target.value)
                            }
                        />
                        <br />
                    </div>
                    <textarea
                        rows="25"
                        cols="100"
                        placeholder="Start writing your note "
                        onChange={(e) => (note.text = e.target.value)}
                    ></textarea>
                    <br />
                </div>
                <input
                    className="save-button"
                    type="submit"
                    value="Save Note"
                />
            </form>
        </div>
    );
}
