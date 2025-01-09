import API_ENDPOINTS from "@/utils/api-endpoints";
import axiosInstance from "@/services/axios/instance";

export interface Task {
    objective: string;
    additionalNotes: string;
    userId: number;
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
    imageSrc?: string;
    createdOn: string;
    deadline: string;
    isVital: boolean;
}

export const fetchTasks = async (): Promise<Task[]> => {
    const response = await axiosInstance.get(API_ENDPOINTS.TASKS);
    return response.data;
};

export const fetchTaskById = async (id: number): Promise<Task> => {
    const response = await axiosInstance.get(API_ENDPOINTS.TASK_BY_ID(id));
    return response.data;
};

export const createTask = async (task: Task): Promise<Task> => {
    const response = await axiosInstance.post(API_ENDPOINTS.TASKS, task);
    return response.data;
};

export const updateTask = async (id: number, task: Task): Promise<Task> => {
    const response = await axiosInstance.put(API_ENDPOINTS.TASK_BY_ID(id), task);
    return response.data;
};

export const deleteTask = async (id: string | number): Promise<void> => {
    const taskId = Number(id);  // Ensure the ID is a number
    const url = API_ENDPOINTS.TASK_BY_ID(taskId);
    // console.log("Deleting task from URL:", url);
    await axiosInstance.delete(url);
};

