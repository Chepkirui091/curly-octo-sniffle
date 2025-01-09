"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const TaskProgress = () => {
    const tasks = [
        { title: "Update Documentation", status: "Not Started" },
        { title: "Fix Login Issue", status: "In Progress" },
        { title: "Review Pull Requests", status: "Completed" },
        { title: "Prepare Presentation", status: "In Progress" },
        { title: "Deploy Website", status: "Completed" },
        { title: "Draft Blog Post", status: "Not Started" },
    ];

    type TaskStatus = "In Progress" | "Completed" | "Not Started";

    const totalTasks = tasks.length;
    const statusCounts: Record<TaskStatus, number> = tasks.reduce(
        (counts, task) => {
            counts[task.status as TaskStatus]++;
            return counts;
        },
        {
            "In Progress": 0,
            "Completed": 0,
            "Not Started": 0,
        }
    );

    const data = [
        { name: "In Progress", value: statusCounts["In Progress"], color: "#0225FF" },
        { name: "Completed", value: statusCounts["Completed"], color: "#05A301" },
        { name: "Not Started", value: statusCounts["Not Started"], color: "#F21E1E" },
    ];

    return (
        <div className="shadow-md rounded-2xl w-full p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 ml-6">
                    <HiOutlineClipboardDocumentCheck className="text-gray-400 text-xl" />
                    <h1 className="text-md text-[#FF6767]">Task Progress</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {data.map((entry, index) => {
                    const percentage = ((entry.value / totalTasks) * 100).toFixed(1);
                    const chartData = [
                        { name: entry.name, value: entry.value, color: entry.color },
                        { name: "Remaining", value: totalTasks - entry.value, color: "#e5e7eb" },
                    ];

                    return (
                        <div key={index} className="relative p-4 flex flex-col items-center">
                            <PieChart
                                width={160}
                                height={160}
                                className="mx-auto sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
                            >
                                <Pie
                                    dataKey="value"
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    startAngle={90}
                                    endAngle={450}
                                    isAnimationActive={true}
                                >
                                    {chartData.map((slice, i) => (
                                        <Cell key={`cell-${i}`} fill={slice.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">{percentage}%</h1>
                            </div>
                            <div className="mt-4 flex justify-center items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: entry.color }}
                                ></div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-400">{entry.name}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TaskProgress;
