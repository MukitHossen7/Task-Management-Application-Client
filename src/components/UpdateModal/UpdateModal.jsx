/* eslint-disable react/prop-types */
import { useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const UpdateModal = ({ isOpen, setIsOpen, task, refetch }) => {
  const axiosInstance = useAxiosInstance();
  const [status, setStatus] = useState(task?.status);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const editTask = {
      title,
      description,
      status,
    };
    try {
      await axiosInstance.put(`/tasks/${task._id}`, editTask);
      setIsOpen(false);
      refetch();
    } catch (err) {
      console.error(err);
      // Handle error here
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-center mb-4">
              Edit Task
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Title */}
              <input
                defaultValue={task?.title}
                type="text"
                name="title"
                maxLength={50}
                placeholder="Enter task title..."
                required
                className="border p-2 rounded-md w-full"
              />

              {/* Description */}
              <textarea
                defaultValue={task?.description}
                name="description"
                maxLength={200}
                placeholder="Enter task description (optional)..."
                className="border p-2 rounded-md w-full"
                required
              ></textarea>

              {/* Category */}
              <select
                defaultValue={task?.status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-2 rounded-md w-full"
                required
              >
                <option disabled value="Select Category">
                  Select Category
                </option>
                <option value="TODO">TODO</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>

              {/* Buttons */}
              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateModal;
