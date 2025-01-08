import React, { useState } from "react";
import CustomDialog from "@/components/shared-components/dialog";

const CreateTaskDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const [taskData, setTaskData] = useState({
        title: "",
        date: "",
        priority: "Low",
        description: "",
        image: null as File | null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTaskData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setTaskData((prev) => ({ ...prev, image: files[0] }));
        }
    };

    const handleSubmit = () => {
        console.log("Task Data:", taskData);
        onClose(); // Close dialog after submission
    };

    return (
        <CustomDialog open={open} title="Create Task" onClose={onClose}>
            <div className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={taskData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Task title"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={taskData.date}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Priority */}
                <div>
                    <label className="block text-sm font-medium">Priority</label>
                    <div className="flex gap-4">
                        {["Low", "Moderate", "High"].map((priority) => (
                            <label key={priority} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="priority"
                                    value={priority}
                                    checked={taskData.priority === priority}
                                    onChange={handleInputChange}
                                    className="w-4 h-4"
                                />
                                <span
                                    className={`${
                                        priority === "Low"
                                            ? "text-green-500"
                                            : priority === "Moderate"
                                                ? "text-blue-500"
                                                : "text-red-500"
                                    }`}
                                >
                                    {priority}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        name="description"
                        value={taskData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Task description"
                    ></textarea>
                </div>

                {/* Image */}
                <div>
                    <label className="block text-sm font-medium">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
            </div>
        </CustomDialog>
    );
};

export default CreateTaskDialog;
