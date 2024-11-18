import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Popup = ({ note, onClose, type, getAllNotes, colors, updateBgColor }) => {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [bgColor, setBgColor] = useState(note?.color || colors[0]);

  const [error, setError] = useState(null);

  const addNewNote = () => {
    localStorage.setItem(
      "notes",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("notes") || "[]"),
        {
          title,
          content,
          id: uuidv4(),
          date: Date.now(),
          color: bgColor,
          isPinned: false,
        },
      ])
    );
  };

  const editNote = () => {
    const newNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    const index = newNotes.findIndex((el) => el.id === note.id);
    newNotes[index] = {
      title,
      content,
      id: note.id,
      color: bgColor,
    };
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError("");

    type === "add" ? addNewNote() : editNote();

    getAllNotes();
    onClose();
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3"
        onClick={onClose}
      >
        <MdClose className="text-xl text-white" />
      </button>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="text-2xl text-white outline-none bg-transparent p-2 rounded placeholder-white"
          placeholder="Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <textarea
          type="text"
          className="text-sm text-white outline-none bg-transparent p-2 rounded placeholder-white"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="flex gap-2 mt-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-6 h-6 rounded-full ${
              color === bgColor ? "ring-2 ring-offset-2 ring-slate-300" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => {
              updateBgColor(color);
              setBgColor(color);
            }}
          />
        ))}
      </div>

      {error && <p className="text-xs text-red-500 pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3 bg-transparent border hover:bg-white hover:text-black transition-colors duration-500"
        onClick={handleAddNote}
      >
        {type === "add" ? "Add Note" : "Update Note"}
      </button>
    </div>
  );
};

export default Popup;
