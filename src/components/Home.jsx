import React from "react";
import Note from "./Note";
function Home() {
  return (
    <div className="grid grid-cols-6">
      <div className="m-4 col-start-3 col-span-3">
      <h1 className="text-2xl font-semibold">Add a note</h1>
        <form>
          <div className="mb-6">
            <label
              for="title"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Your Title
            </label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your title here"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="description"
              className="block mb-2 text-md font-medium text-gray-900"
            >
              Your Description
            </label>

            <textarea
              className="border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Description"
              name="description"
              id="description"
              cols=""
              rows="10"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <div className="my-4">
          <Note />
        </div>
      </div>
    </div>
  );
}

export default Home;
