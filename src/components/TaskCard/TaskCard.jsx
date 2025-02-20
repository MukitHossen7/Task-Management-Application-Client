import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import UpdateModal from "../UpdateModal/UpdateModal";

/* eslint-disable react/prop-types */
const TaskCard = ({ task, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-3 cursor-grab bg-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md">
      <div>
        <h3 className="font-medium text-gray-800">{task?.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{task?.description}</p>
      </div>
      <div className="flex items-center gap-1">
        <button onClick={() => setIsOpen(true)}>
          <FiEdit className="text-blue-600 text-lg" />
        </button>
        <MdDeleteForever className="text-red-500 text-2xl" />
      </div>
      {isOpen && (
        <UpdateModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          task={task}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default TaskCard;
