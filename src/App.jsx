import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Card from "./components/Card";
import Modal from "react-modal";

const App = () => {
  const colors = [
    "#1f2937",
    "#92400e",
    "#3f6212",
    "#065f46",
    "#075985",
    "#5b21b6",
    "#86198f",
    "#9d174d",
  ];

  const [allNotes, setAllNotes] = useState([]);
  const [modal, setModal] = useState({
    isShow: false,
    noteData: null,
    type: "",
    backgroundModal: colors[0],
  });

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]").sort(
      (a, b) => b.isPinned - a.isPinned
    );
    setAllNotes(notes);
  };

  const deleteNote = (id) => {
    const newNotes = allNotes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    getAllNotes();
  };

  const editNote = (noteDetails) => {
    setModal({
      isShow: true,
      noteData: noteDetails,
      type: "edit",
      backgroundModal: noteDetails.color,
    });
  };

  const pinNote = (noteDetails) => {
    const newNotes = allNotes.map((note) => {
      return note.id === noteDetails.id
        ? { ...note, isPinned: !note.isPinned }
        : note;
    });
    localStorage.setItem("notes", JSON.stringify(newNotes));
    getAllNotes();
  };

  const copyNote = (noteDetails) => {
    console.log(noteDetails);
    setModal({
      isShow: true,
      noteData: {
        title: noteDetails.title,
        content: noteDetails.content,
        color: noteDetails.color,
      },
      type: "add",
      backgroundModal: noteDetails.color,
    });
  };

  const updateBgColor = (color) => {
    setModal({ ...modal, backgroundModal: color });
  };

  return (
    <>
      <Navbar
        openModal={() =>
          setModal({
            isShow: true,
            type: "add",
            noteData: null,
            backgroundModal: colors[0],
          })
        }
      />

      <div className="container mx-auto p-[1rem]">
        {allNotes.length > 0 ? (
          <div className="notes-container">
            {allNotes.map((note) => (
              <Card
                key={note.id}
                title={note.title}
                content={note.content}
                date={note.date}
                color={note.color}
                isPinned={note.isPinned}
                onDelete={() => deleteNote(note.id)}
                onEdit={() => editNote(note)}
                onPin={() => {
                  pinNote(note);
                }}
                onCopy={() => copyNote(note)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-8 text-2xl">
            No notes found
          </p>
        )}
      </div>

      <Modal
        isOpen={modal.isShow}
        className="modal"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          content: {
            background: modal.backgroundModal + "bd",
            backdropFilter: "blur(20px)",
          },
        }}
        appElement={document.getElementById("root")}
        shouldCloseOnOverlayClick={false}
      >
        <Popup
          onClose={() => {
            setModal({ isShow: false, noteData: null, type: "" });
          }}
          note={modal.noteData}
          type={modal.type}
          colors={colors}
          getAllNotes={getAllNotes}
          updateBgColor={updateBgColor}
        />
      </Modal>
    </>
  );
};

export default App;
