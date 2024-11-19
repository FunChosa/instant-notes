import React from "react";
import { MdAdd } from "react-icons/md";

const Navbar = ({ openModal }) => {
  return (
    <div className="bg-black flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-white py-2">Notes</h2>
      <button
        className="btn-primary hover:bg-violet-900 transition-colors duration-200 flex justify-center items-center gap-2"
        onClick={() => openModal()}
      >
        <MdAdd />
        <span>Add Note</span>
      </button>
    </div>
  );
};

export default Navbar;
