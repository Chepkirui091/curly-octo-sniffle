import React, {useCallback, useEffect, useState} from "react";
import {TfiMore} from "react-icons/tfi";
import Image from "next/image";
import {fetchTasks, Task} from "@/api/task-api";

const PendingTasks = ({
                          onTaskClick,
                          selectedTask,
                          onTasksFetched,
                      }: {
    onTaskClick?: (task: Task) => void;
    selectedTask?: Task | null;
    tasks: Task[];
    onTasksFetched?: (tasks: Task[]) => void;
}) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const loadTasks = useCallback(async () => {
        try {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
            onTasksFetched?.(fetchedTasks);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        } finally {
            setLoading(false);
        }
    }, [onTasksFetched]);

    useEffect(() => {
        loadTasks();

        const handleRefetch = () => {
            setLoading(true);
            loadTasks();
        };

        window.addEventListener("refetchTasks", handleRefetch);

        return () => {
            window.removeEventListener("refetchTasks", handleRefetch);
        };
    }, [loadTasks]);


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

    if (loading) {
        return <div>Loading tasks...</div>;
    }

    if (tasks.length === 0) {
        return <div>No tasks available.</div>;
    }

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`p-3 border ${
                        selectedTask?.title === task.title
                            ? "border-[#A1A3AB] bg-gray-200" 
                            : "border-[#A1A3AB]"
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
                                <span>
                                    {task.createdOn}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PendingTasks;
