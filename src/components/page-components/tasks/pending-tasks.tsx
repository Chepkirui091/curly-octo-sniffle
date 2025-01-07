import React from "react";
import { TfiMore } from "react-icons/tfi";
import Image from "next/image";

export const tasks = [
    {
        title: "Update Documentation",
        description:
            "Add new API endpoints to the developer documentation. Ensure accuracy, include examples, and cross-check with the existing entries. The documentation should be clear, concise, and detailed, and it should be easy for other developers to follow. Once the updates are made, review the entire document for consistency and formatting errors.",
        objective:
            "To add new API endpoints to the developer documentation and ensure accuracy.",
        additionalNotes:
            "- Ensure that the new endpoints are documented with proper code samples.\n- Maintain a consistent format for the documentation.\n- Cross-check with the development team to verify endpoint functionalities.",
        priority: "Moderate",
        status: "Not Started",
        createdOn: "2024-12-12",
        imageSrc: "/static/woman.jpg",
    },
    {
        title: "Fix Login Issue",
        description:
            "Resolve the bug causing login failures. Debug server-side session management, analyze server logs, and perform extensive testing. Reproduce the issue, check the network requests, and identify any failures. Once fixed, ensure that the login works seamlessly across different devices and browsers, and perform regression testing to ensure no other issues were introduced.",
        objective:
            "Resolve the bug causing login failures and improve session management.",
        additionalNotes:
            "- Work closely with the QA team to test the fix.\n- Ensure that session tokens are securely handled.\n- Consider implementing better error handling and logging for future issues.",
        priority: "High",
        status: "Pending",
        createdOn: "2024-12-15",
        imageSrc: "/static/daph.jpg",
    },
    {
        title: "Document Submission",
        description:
            "Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
        objective:
            "To submit required documents for something important, ensuring everything is in order and correctly submitted.",
        additionalNotes:
            "- Ensure that the documents are authentic and up-to-date.\n- Maintain confidentiality and security of sensitive information during the submission process.\n- If there are specific guidelines or deadlines for submission, adhere to them diligently.\n- Ensure the documents are clear and legible, especially for scanned copies.",
        priority: "High",
        status: "Pending",
        createdOn: "2024-12-15",
        imageSrc: "/static/daph.jpg",
    },
];


const PendingTasks = ({
                          onTaskClick,
                          selectedTask,
                      }: {
    onTaskClick?: (task: any) => void;
    selectedTask?: any;
}) => {
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
        <div className="space-y-4">

            {tasks.map((task, index) => (
                <div
                    key={index}
                    className={`p-3 border ${
                        selectedTask?.title === task.title ? "border-[#A1A3AB] bg-gray-200" : "border-[#A1A3AB]"
                    } rounded-2xl gap-4 ${
                        onTaskClick ? "cursor-pointer" : ""
                    }`}
                    onClick={() => onTaskClick && onTaskClick(task)}
                >


                    {/* Task Info */}
                    <div className="flex-1">
                        <div className="font-semibold text-lg flex justify-between">
                            {task.title}
                            <TfiMore className="cursor-pointer"/>
                        </div>
                        <div className="text-gray-600 mt-1 flex items-center">
                            {task.description.length > 60 ? `${task.description.slice(0, 60)}...` : task.description}
                            {/* Task Image */}
                            {task.imageSrc && (
                                <Image
                                    src={task.imageSrc}
                                    alt={task.title}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                            )}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-1 text-sm">
                            <div className="flex items-center gap-1">
                                <span className="font-medium">Priority:</span>
                                <span className={`${getPriorityColor(task.priority)}`}>{task.priority}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="font-medium">Status:</span>
                                <span className={`${getStatusColor(task.status)}`}>{task.status}</span>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default PendingTasks;
