import { useState } from "react";
import Column from "../../components/Column/Column";
import Modal from "../../components/Modal/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const columns = [
    { id: "TODO", title: "To Do" },
    { id: "In Progress", title: "In Progress" },
    { id: "Done", title: "Done" },
  ];
  const initialTask = [
    {
      id: 1,
      title: "Setup Project",
      description: "Initialize React and Tailwind CSS setup.",
      status: "TODO",
    },
    {
      id: 2,
      title: "Design UI",
      description: "Create wireframe and UI components for the dashboard.",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Implement Authentication",
      description:
        "Integrate Firebase authentication for user login and registration.",
      status: "TODO",
    },
    {
      id: 4,
      title: "Create API Endpoints",
      description:
        "Develop RESTful APIs using Express.js for backend operations.",
      status: "In Progress",
    },
    {
      id: 5,
      title: "Database Integration",
      description: "Connect MongoDB and set up models for task management.",
      status: "TODO",
    },
    {
      id: 6,
      title: "Drag and Drop Feature",
      description: "Implement drag-and-drop functionality using React DnD.",
      status: "TODO",
    },
    {
      id: 7,
      title: "Task Status Update",
      description: "Allow users to update task status dynamically.",
      status: "In Progress",
    },
    {
      id: 8,
      title: "UI Testing",
      description: "Test UI responsiveness and fix layout issues.",
      status: "TODO",
    },
    {
      id: 9,
      title: "Deploy Application",
      description: "Deploy the task management app using Vercel or Netlify.",
      status: "TODO",
    },
    {
      id: 10,
      title: "Bug Fixes and Optimization",
      description: "Resolve reported issues and optimize performance.",
      status: "Done",
    },
  ];
  const [tasks, setTasks] = useState(initialTask);
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
          ></Column>
        ))}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
    </div>
  );
};

export default Home;
