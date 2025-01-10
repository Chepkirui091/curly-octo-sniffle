import React, { useState } from "react";
import PendingTasks from "@/components/page-components/tasks/pending-tasks";
import { deleteTask, Task } from "@/api/task-api";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";

const DetailedTaskPage = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleTasksFetched = (fetchedTasks: Task[]) => {
        setTasks(fetchedTasks);
        setSelectedTask((prevSelected) =>
            fetchedTasks.find((task) => task.id === prevSelected?.id) || fetchedTasks[0] || null
        );
    };

    const handleDelete = async () => {
        if (selectedTask) {
            try {
                await deleteTask(selectedTask.id);
                setSelectedTask(null); // Clear selection
                // Trigger task refetch
                const fetchEvent = new CustomEvent("refetchTasks");
                window.dispatchEvent(fetchEvent);
            } catch (error) {
                console.error("Error deleting task:", error);
                alert("Failed to delete the task."); // Replace with toast notification if necessary
            }
        }
    };

    return (
        <div className="p-4 lg:mt-6 sm:mt-4 space-y-6">
            <div className="lg:flex gap-8">
                {/* Task List */}
                <div className="rounded-2xl w-full lg:w-[40%] border shadow-md p-6">
                    <h1 className="font-bold mb-4">My Tasks</h1>
                    <PendingTasks
                        onTaskClick={setSelectedTask}
                        tasks={tasks}
                        selectedTask={selectedTask}
                        onTasksFetched={handleTasksFetched}
                    />
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
                                    <span className="text-red-500">{selectedTask.priority}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-600">Status: </span>
                                    <span className="text-blue-800">{selectedTask.status}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-600">Created On: </span>
                                    <span>{selectedTask.createdOn}</span>
                                </div>
                            </div>
                        </div>

                        {/* Additional Details */}
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-600">Task Title: <span className="font-normal">{selectedTask.title}</span> </h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-600">Task Objective: <span className="font-normal">{selectedTask.objective}</span> </h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-600">Task Description: <span className="font-normal">{selectedTask.description}</span> </h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-600">Additional Notes: </h3>
                            <p className="text-gray-600 whitespace-pre-wrap">
                                {selectedTask.additionalNotes}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-6">
                            <button
                                onClick={handleDelete}
                                className="p-2 bg-[#FF6767] text-white rounded-md"
                            >
                                <MdDelete/>
                            </button>
                            <button
                                onClick={() => console.log("Edit Task")} // Replace with actual edit logic
                                className="p-2 bg-[#FF6767] text-white rounded-md"
                            >
                                <RiEditBoxFill/>
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

export default DetailedTaskPage;