/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import UpdateModal from "../UpdateModal/UpdateModal";
import useAxiosInstance from "../../hooks/useAxiosInstance";

/* eslint-disable react/prop-types */
const TaskCard = ({ task, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosInstance = useAxiosInstance();
  const handleDelete = async (delId) => {
    try {
      await axiosInstance.delete(`/tasks/${delId}`);
    } catch (err) {
      console.error(err);
      // Handle error here
    } finally {
      refetch();
    }
  };
  return (
    <div className="flex items-center justify-between gap-3 cursor-grab bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md">
      <div>
        <h3 className="font-medium text-gray-800">{task?.title}</h3>
        <p className="mt-2 text-sm text-gray-700">{task?.description}</p>
        <p className="mt-2 text-xs text-gray-500">
          {task?.timestamp
            ? new Date(task.timestamp).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
            : "No date available"}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <button onClick={() => setIsOpen(true)}>
          <FiEdit className="text-blue-700 text-lg" />
        </button>
        <button onClick={() => handleDelete(`${task._id}`)}>
          <MdDeleteForever className="text-red-500 text-2xl" />
        </button>
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

// import { useDraggable } from "@dnd-kit/core";
// import { FiEdit } from "react-icons/fi";
// import { MdDeleteForever } from "react-icons/md";
// import UpdateModal from "../UpdateModal/UpdateModal";
// import useAxiosInstance from "../../hooks/useAxiosInstance";
// import { useState } from "react";

// const TaskCard = ({ task, refetch }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const axiosInstance = useAxiosInstance();
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: task._id,
//   });

//   const handleDelete = async (delId) => {
//     try {
//       await axiosInstance.delete(`/tasks/${delId}`);
//       refetch();
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <div
//       ref={setNodeRef}
//       {...listeners}
//       {...attributes}
//       className="flex items-center justify-between gap-3 cursor-grab bg-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md"
//       style={{
//         transform: transform
//           ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
//           : "none",
//       }}
//     >
//       <div>
//         <h3 className="font-medium text-gray-800">{task?.title}</h3>
//         <p className="mt-2 text-sm text-gray-600">{task?.description}</p>
//       </div>
//       <div className="flex items-center gap-1">
//         <button onClick={() => setIsOpen(true)}>
//           <FiEdit className="text-blue-600 text-lg" />
//         </button>
//         <button onClick={() => handleDelete(`${task._id}`)}>
//           <MdDeleteForever className="text-red-500 text-2xl" />
//         </button>
//       </div>

//       <UpdateModal
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//         task={task}
//         refetch={refetch}
//       />
//     </div>
//   );
// };

// export default TaskCard;
