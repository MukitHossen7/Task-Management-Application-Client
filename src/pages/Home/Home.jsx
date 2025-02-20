import { useState } from "react";
import Column from "../../components/Column/Column";
import Modal from "../../components/Modal/Modal";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosInstance = useAxiosInstance();
  const columns = [
    { id: "TODO", title: "To Do" },
    { id: "In Progress", title: "In Progress" },
    { id: "Done", title: "Done" },
  ];
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/tasks`);
      return data;
    },
  });

  return (
    <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto my-10 flex flex-col items-center">
      {/* Add Task Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add Task
      </button>
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.status === column.id)}
            refetch={refetch}
          ></Column>
        ))}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch}></Modal>
    </div>
  );
};

export default Home;
// import { useState } from "react";
// import Column from "../../components/Column/Column";
// import Modal from "../../components/Modal/Modal";
// import useAxiosInstance from "../../hooks/useAxiosInstance";
// import { useQuery } from "@tanstack/react-query";
// import { DndContext, closestCorners } from "@dnd-kit/core";
// import { SortableContext } from "@dnd-kit/sortable";

// const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const axiosInstance = useAxiosInstance();
//   const columns = [
//     { id: "TODO", title: "To Do" },
//     { id: "In Progress", title: "In Progress" },
//     { id: "Done", title: "Done" },
//   ];

//   const { data: tasks = [], refetch } = useQuery({
//     queryKey: ["tasks"],
//     queryFn: async () => {
//       const { data } = await axiosInstance.get(`/tasks`);
//       return data;
//     },
//   });

//   const handleDragEnd = async (event) => {
//     const { active, over } = event;
//     if (!over) return;

//     const draggedTaskId = active.id;
//     const newStatus = over.id;

//     if (!draggedTaskId || !newStatus) return;

//     const updatedTask = tasks.find((task) => task._id === draggedTaskId);
//     if (updatedTask && updatedTask.status !== newStatus) {
//       updatedTask.status = newStatus;

//       await axiosInstance.put(`/tasks/${updatedTask._id}`, updatedTask);
//       refetch();
//     }
//   };

//   return (
//     <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto my-10 flex flex-col items-center">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         Add Task
//       </button>
//       <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//         <div className="flex flex-col lg:flex-row gap-8 mt-4">
//           {columns.map((column) => (
//             <SortableContext
//               key={column.id}
//               items={tasks.map((task) => task._id)}
//             >
//               <Column column={column} tasks={tasks} refetch={refetch} />
//             </SortableContext>
//           ))}
//         </div>
//       </DndContext>
//       <Modal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch} />
//     </div>
//   );
// };

// export default Home;
