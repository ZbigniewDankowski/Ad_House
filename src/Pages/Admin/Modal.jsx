import React from "react";

function Modal({ isOpen, message, onClose, modal_style }) {
  if (!isOpen) return null;

  const headerClass = `text-lg text-white text-center font-semibold p-2 ${
    modal_style === "error" ? "bg-red-600" : "bg-blue-500"
  }`;

  const buttonClass = `block my-4 mx-auto text-white font-bold py-2 px-4 rounded ${
    modal_style === "error"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-blue-500 hover:bg-blue-700"
  }`;

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg max-w-sm w-full rounded-lg">
        <h2 className={headerClass}>Informacja</h2>
        <p className={"text-center p-3"}>{message}</p>
        <button onClick={onClose} className={buttonClass}>
          Zamknij
        </button>
      </div>
    </div>
  );
}

export default Modal;
