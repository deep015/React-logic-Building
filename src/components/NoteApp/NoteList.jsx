import React from 'react';

const NoteList = ({ title, content, onDelete }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded shadow-md mb-4  ">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-800 mb-4">{content}</p>
      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-600 text-Black px-4 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteList;
