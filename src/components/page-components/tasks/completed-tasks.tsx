import { TfiMore } from "react-icons/tfi";
import { FaRegCircle } from "react-icons/fa";
import {MdOutlinePendingActions} from "react-icons/md";
import {IoIosAdd} from "react-icons/io";

const CompletedTasks = () => {
    const tasks = [
        {
            title: "Design Review Meeting",
            description: "Prepare slides for the upcoming design review meeting.",
            priority: "Low",
            status: "Completed",
            createdOn: "2024-12-10",
            imageSrc: "https://via.placeholder.com/150",
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed":
                return "text-green-500"; // Green color for completed
            default:
                return "text-gray-500"; // Default gray
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "High":
                return "text-red-500"; // Red for high priority
            case "Moderate":
                return "text-blue-300"; // Light blue for moderate
            case "Low":
                return "text-green-300"; // Light green for low
            default:
                return "text-gray-500"; // Default gray
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex">
                    <MdOutlinePendingActions className="text-gray-400 text-xl "/>
                    <span className="ml-2 text-[#FF6767]">To-Do</span>
                </div>
                <div className="flex">
                    <IoIosAdd className="text-[#FF6767] text-xl "/>
                    <span className="ml-2 text-gray-400 ">Add Task</span>
                </div>
            </div>
            <h2 className="font-semibold text-xl">Completed Tasks</h2>
            {tasks.map((task, index) => (
                <div key={index} className="border-2 border-black p-4 flex justify-between items-start">
                    {/* Circle matching status */}
                    <FaRegCircle className={`mt-1 ${getStatusColor(task.status)}`}/>
                    <div className="flex-1 px-4">
                        <div className="font-semibold text-lg">{task.title}</div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="text-gray-600">{task.description}</div>
                            {task.imageSrc && (
                                <img
                                    src={task.imageSrc}
                                    alt={task.title}
                                    className="w-10 h-10 rounded-full"
                                />
                            )}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm">
                            <div className="flex items-center gap-1">
                                <span className="text-black font-medium">Priority:</span>
                                <span className={`${getPriorityColor(task.priority)}`}>{task.priority}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-black font-medium">Status:</span>
                                <span className={`${getStatusColor(task.status)}`}>{task.status}</span>
                            </div>
                            <div className="text-gray-500">Created on: {task.createdOn}</div>
                        </div>
                    </div>
                    <TfiMore className="cursor-pointer"/>
                </div>
            ))}
        </div>
    );
};

export default CompletedTasks;
