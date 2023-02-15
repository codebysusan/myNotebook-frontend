import React from "react";

export default function Noteitem(props) {
  const {note} = props;
  return (
    <div className="grid grid-cols-5 gap-4">
      <a
        href="/"
        class="block text-gray-400 p-6 bg-white border border-gray-200 rounded-lg shadow"
      >
        <h5 class="mb-2 text-2xl font-bold text-gray-900">
          {note.title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {note.description}
        </p>
      </a>
    </div>
  );
}
