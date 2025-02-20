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
    } catch (err) {
      console.error(err);
      // Handle error here
    } finally {
      setIsOpen(false);
      refetch();
    }
  };
  console.log(task);
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
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
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
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

export default UpdateModal;
