import React, { useState } from "react";
import PendingTasks from "@/components/page-components/tasks/pending-tasks";
import {deleteTask, Task} from "@/api/task-api";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";

const DetailedTaskPage = () => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleTasksFetched = (fetchedTasks: Task[]) => {
        setTasks(fetchedTasks);
        setSelectedTask(fetchedTasks[0]);
    };

    const handleDelete = async () => {
        if (selectedTask) {
            try {
                await deleteTask(selectedTask.id);
                setTasks(tasks.filter(task => task.id !== selectedTask.id));
                setSelectedTask(null);
            } catch (error) {
                console.error("Error deleting task:", error);
            }
        }
    };


    return (
        <div className="p-4 mt-6 space-y-6">
            <div className="flex gap-6">
                <div className="rounded-2xl border shadow-md p-6">
                    <h1 className="font-bold mb-4">My Tasks</h1>
                    <PendingTasks
                        onTaskClick={setSelectedTask}
                        onTasksFetched={handleTasksFetched}
                    />
                </div>

                {/* Task Details */}
                {selectedTask && (
                    <div className="w-1/2 shadow-md p-6 rounded-2xl border space-y-4">
                        <div className="flex gap-6">
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

                        <div className="mt-4 flex">
                            <p className="text-gray-600 font-semibold">
                                Task Title:{" "}
                                <span className="font-normal">{selectedTask.title}</span>
                            </p>
                        </div>

                        <div className="mt-4 flex">
                            <p className="text-gray-600 font-semibold">
                                Objective:{" "}
                                <span className="font-normal">{selectedTask.objective}</span>
                            </p>
                        </div>

                        <div className="mt-4 flex">
                            <p className="text-gray-600 font-semibold">
                                Task Description:{" "}
                                <span className="font-normal">{selectedTask.description}</span>
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-600">Additional Notes: </h3>
                            <p className="text-gray-600 whitespace-pre-wrap">
                                {selectedTask.additionalNotes}
                            </p>
                        </div>

                        <div className="flex justify-end gap-6 ">
                            <button onClick={handleDelete} className="p-2 bg-[#FF6767] text-white rounded-md">
                                <MdDelete />
                            </button>
                            <div className="p-2 bg-[#FF6767] text-white rounded-md">
                                <RiEditBoxFill />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailedTaskPage;
