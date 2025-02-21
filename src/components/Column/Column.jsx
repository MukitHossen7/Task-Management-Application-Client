/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

import TaskCard from "../TaskCard/TaskCard";

const Column = ({ column, tasks, refetch }) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-gray-100 p-4">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        {column?.title}
      </h2>
      <div className="flex flex-1 flex-col gap-4">
        {tasks?.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Column;

// import { useDroppable } from "@dnd-kit/core";
// import TaskCard from "../TaskCard/TaskCard";

// const Column = ({ column, tasks, refetch }) => {
//   const { setNodeRef } = useDroppable({ id: column.id });

//   return (
//     <div
//       ref={setNodeRef}
//       className="flex w-full flex-col rounded-lg bg-gray-100 p-4"
//     >
//       <h2 className="mb-4 font-semibold text-gray-800">{column?.title}</h2>
//       <div className="flex flex-1 flex-col gap-4">
//         {tasks
//           ?.filter((task) => task.status === column.id)
//           .map((task) => (
//             <TaskCard key={task._id} task={task} refetch={refetch} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Column;
