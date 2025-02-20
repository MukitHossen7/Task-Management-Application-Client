/* eslint-disable react/prop-types */

import TaskCard from "../TaskCard/TaskCard";

// eslint-disable-next-line react/prop-types
const Column = ({ column, tasks, refetch }) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-gray-100 p-4">
      <h2 className="mb-4 font-semibold text-gray-800">{column?.title}</h2>
      <div className="flex flex-1 flex-col gap-4">
        {tasks?.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Column;
