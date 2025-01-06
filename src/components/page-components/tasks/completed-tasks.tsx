import { TfiMore } from "react-icons/tfi";
import { FaRegCircle } from "react-icons/fa";
import {LuClipboardCheck} from "react-icons/lu";
import Image from "next/image";

const CompletedTasks = () => {
    const tasks = [
        {
            title: "Design Review Meeting",
            description: "Prepare slides for the upcoming design review meeting.",
            priority: "Low",
            status: "Completed",
            createdOn: "2025-1-1",
            imageSrc: "/static/woman.jpg",
        },
        {
            title: "Design Review Meeting",
            description: "Prepare slides for the upcoming design review meeting.",
            priority: "Low",
            status: "Completed",
            createdOn: "2024-12-10",
            imageSrc: "/static/daph.jpg",
        },
    ];

    const calculateDaysAgo = (createdOn: string) => {
        const createdDate = new Date(createdOn);
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - createdDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
        return daysDiff;
    };

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
        <div className="space-y-4 shadow-md p-6 rounded-2xl ">
                <div className="flex">
                    <LuClipboardCheck className="text-gray-400 text-xl "/>
                    <span className="ml-2 text-[#FF6767]">Completed</span>
                </div>
            {tasks.map((task, index) => (
                <div key={index} className="border border-[#A1A3AB] rounded-2xl p-4 flex justify-between items-start">
                    {/* Circle matching status */}
                    <FaRegCircle className={`mt-1 ${getStatusColor(task.status)}`}/>
                    <div className="flex-1 px-4">
                        <div className="font-semibold text-lg">{task.title}</div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="text-gray-600">{task.description}</div>
                            {task.imageSrc && (
                                <Image
                                    src={task.imageSrc}
                                    alt={task.title}
                                    width={80}
                                    height={60}
                                    className="w-20 h-20 rounded-md"
                                />
                            )}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm">
                            <div className="flex items-center gap-1">
                                <span className="font-medium">Priority:</span>
                                <span className={`${getPriorityColor(task.priority)}`}>{task.priority}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="font-medium">Status:</span>
                                <span className={`${getStatusColor(task.status)}`}>{task.status}</span>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm">
                            Completed: {calculateDaysAgo(task.createdOn)} days ago
                        </div>

                    </div>
                    <TfiMore className="cursor-pointer"/>
                </div>
            ))}
        </div>
    );
};

export default CompletedTasks;
