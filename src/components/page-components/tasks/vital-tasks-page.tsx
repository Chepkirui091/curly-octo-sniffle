import React, { useState, useEffect } from "react";
import { deleteTask, Task, fetchTasks } from "@/api/task-api"; // Assuming you have a fetchTasks function
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { TfiMore } from "react-icons/tfi"; // Assuming you are using this for more options

const VitalTaskPage = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch tasks when the component mounts
    useEffect(() => {
        const fetchVitalTasks = async () => {
            try {
                const fetchedTasks = await fetchTasks(); // Replace with your API call to fetch tasks
                const vitalTasks = fetchedTasks.filter((task) => task.isVital); // Filter vital tasks
                setTasks(vitalTasks);
                setSelectedTask((prevSelected) =>
                    vitalTasks.find((task) => task.id === prevSelected?.id) || vitalTasks[0] || null
                );
                setLoading(false);
            } catch (err) {
                console.error("Error fetching tasks:", err);
                setError("Failed to fetch tasks.");
                setLoading(false);
            }
        };

        fetchVitalTasks();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const handleDelete = async () => {
        if (selectedTask) {
            try {
                await deleteTask(selectedTask.id); // Delete the task
                setSelectedTask(null); // Clear selection
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== selectedTask.id)); // Remove task from list
            } catch (error) {
                console.error("Error deleting task:", error);
                alert("Failed to delete the task.");
            }
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "High":
                return "text-red-500";
            case "Moderate":
                return "text-yellow-500";
            case "Low":
                return "text-green-500";
            default:
                return "text-gray-500";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed":
                return "text-green-500";
            case "Not Started":
                return "text-red-500";
            case "In Progress":
                return "text-blue-500";
            case "Pending":
                return "text-yellow-500";
            default:
                return "text-gray-500";
        }
    };

    if (loading) {
        return <div>Loading tasks...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-4 mt-6 space-y-6">
            <div className="lg:flex gap-8">
                {/* Task List */}
                <div className="rounded-2xl w-full lg:w-[40%] border shadow-md p-6">
                    <h1 className="font-bold mb-4">My Vital Tasks</h1>
                    <div>
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`p-3 border mb-4 ${
                                    selectedTask?.id === task.id
                                        ? "border-[#A1A3AB] bg-gray-200"
                                        : "border-[#A1A3AB]"
                                } rounded-2xl gap-4 cursor-pointer`}

                                onClick={() => setSelectedTask(task)} // Update selected task on click
                            >
                                {/* Task Info */}
                                <div className="flex-1">
                                    <div className="font-semibold text-lg flex justify-between">
                                        {task.title}
                                        <TfiMore className="cursor-pointer" />
                                    </div>
                                    <div className="text-gray-600 mt-1 flex items-center">
                                        {task.description.length > 60
                                            ? `${task.description.slice(0, 60)}...`
                                            : task.description}
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
                                            <span className={`${getPriorityColor(task.priority)}`}>
                                                {task.priority}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="font-medium">Status:</span>
                                            <span className={`${getStatusColor(task.status)}`}>
                                                {task.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <span className="font-medium">Created On:</span>
                                            <span>{task.createdOn}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Task Details */}
                {selectedTask ? (
                    <div className="lg:w-[60%] w-full shadow-md p-6 rounded-2xl border space-y-4">
                        {/* Selected Task Details */}
                        <div className="lg:flex gap-6">
                            {selectedTask.imageSrc && (
                                <Image
                                    src={selectedTask.imageSrc}
                                    alt={selectedTask.title}
                                    width={200}
                                    height={200}
                                    className="rounded-md w-40 h-40 object-cover"
                                />
                            )}
                            <div className="flex flex-col justify-center space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-600">Priority: </span>
                                    <span
                                        className={`${getPriorityColor(selectedTask.priority)}`}>{selectedTask.priority}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-600">Status: </span>
                                    <span
                                        className={`${getStatusColor(selectedTask.status)}`}>{selectedTask.status}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-600">Created On: </span>
                                    <span>{selectedTask.createdOn}</span>
                                </div>
                            </div>

                        </div>

                        {/* Additional Details */}
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-600">
                                Task Title: <span className="font-normal">{selectedTask.title}</span>
                            </h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-600">
                                Task Objective: <span className="font-normal">{selectedTask.objective}</span>
                            </h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-600">
                                Task Description: <span className="font-normal">{selectedTask.description}</span>
                            </h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-600">Additional Notes: </h3>
                            <p className="text-gray-600 whitespace-pre-wrap">{selectedTask.additionalNotes}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-6">
                            <button
                                onClick={handleDelete}
                                className="p-2 bg-[#FF6767] text-white rounded-md"
                            >
                                <MdDelete />
                            </button>
                            <button
                                onClick={() => console.log("Edit Task")} // Replace with actual edit logic
                                className="p-2 bg-[#FF6767] text-white rounded-md"
                            >
                                <RiEditBoxFill />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="lg:w-[60%] w-full p-6 rounded-2xl border text-center text-gray-600">
                        No task selected. Please select a task from the list.
                    </div>
                )}
            </div>
        </div>
    );
};

export default VitalTaskPage;
