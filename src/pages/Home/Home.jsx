import { useState } from "react";
import Column from "../../components/Column/Column";
import Modal from "../../components/Modal/Modal";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineAdd } from "react-icons/md";

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
        className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-gray-50 rounded-lg hover:bg-blue-700"
      >
        <MdOutlineAdd className="text-xl" />
        Add Task
      </button>
      <div className="flex flex-col lg:flex-row gap-8 mt-6">
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
