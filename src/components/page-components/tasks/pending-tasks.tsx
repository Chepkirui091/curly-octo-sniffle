import { TfiMore } from "react-icons/tfi";
import { FaRegCircle } from "react-icons/fa";
import {MdOutlinePendingActions} from "react-icons/md";
import {IoIosAdd} from "react-icons/io";
import Image from "next/image";

const PendingTasks = () => {
    const tasks = [
        {
            title: "Update Documentation",
            description: "Add new API endpoints to the developer documentation.",
            priority: "Moderate",
            status: "Not Started",
            createdOn: "2024-12-12",
            imageSrc: "https://via.placeholder.com/150https://unsplash.com/@jayson_hinrichsen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        },
        {
            title: "Fix Login Issue",
            description: "Resolve the bug causing login failures for certain users.",
            priority: "High",
            status: "Pending",
            createdOn: "2024-12-15",
            imageSrc: "https://unsplash.com/@jayson_hinrichsen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Pending":
                return "text-blue-800";
            case "Not Started":
                return "text-red-500";
            default:
                return "text-gray-500";
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "High":
                return "text-red-500";
            case "Moderate":
                return "text-blue-300";
            case "Low":
                return "text-green-300";
            default:
                return "text-gray-500";
        }
    };

    return (
        <div className="space-y-4 shadow-lg p-6 rounded-2xl ">
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
            {/*<h2 className="font-semibold text-xl">Pending Tasks</h2>*/}
            {tasks.map((task, index) => (
                <div key={index} className=" p-3 flex border border-gray-400 rounded-2xl justify-between items-start">
                    {/* Circle matching status */}
                    <FaRegCircle className={`mt-1 font-bold ${getStatusColor(task.status)}`}/>
                    <div className="flex-1 px-4">
                        <div className="font-semibold text-lg">{task.title}</div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="text-gray-600">{task.description}</div>
                            {task.imageSrc && (
                                <Image
                                    src={task.imageSrc}
                                    width={36}
                                    height={36}
                                    alt={task.title}
                                    className="w-10 h-10 rounded-md"
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

export default PendingTasks;
