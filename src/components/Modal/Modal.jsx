/* eslint-disable react/prop-types */
import { useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const Modal = ({ isOpen, setIsOpen, refetch }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");
  const axiosInstance = useAxiosInstance();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
      status,
    };
    console.log(taskData);
    try {
      await axiosInstance.post(`/tasks`, taskData);
    } catch (err) {
      console.error(err);
      // Handle error here
    } finally {
      setIsOpen(false);
      refetch();
    }
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Title */}
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                maxLength={50}
                placeholder="Enter task title..."
                required
                className="border p-2 rounded-md w-full"
              />

              {/* Description */}
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                maxLength={200}
                placeholder="Enter task description (optional)..."
                className="border p-2 rounded-md w-full"
                required
              ></textarea>

              {/* Category */}
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-2 rounded-md w-full"
                required
              >
                <option value="TODO">TODO</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>

              {/* Buttons */}
              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
