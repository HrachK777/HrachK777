import { useState } from "react";


export default function TodoItem(props) {
    const { id, title, description, completed, refreshTodos, index } = props;
    const [loading, setLoading] = useState(false);

    const toggleCompletion = async () => {
        setLoading(true);
        await fetch(`/api/items/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !completed })
        });
        refreshTodos();
    };

    const deleteTodo = async () => {
        setLoading(true);
        await fetch(`/api/items/${id}`, { method: "DELETE" });
        refreshTodos();
    };

    return (
        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600">
            <td className="px-6 py-4">
                {index + 1}
            </td>
            <th scope="row" className={`${completed ? "line-through text-gray-500" : ""} px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                {title}
            </th>
            <td className={`${completed ? "line-through text-gray-500" : ""} px-6 py-4`}>
                {description}
            </td>
            <td className="w-4 p-6">
                <div className="flex items-center">
                    <input
                        id="checkbox-table-3"
                        type="checkbox"
                        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={completed}
                        onChange={toggleCompletion}
                    />
                    <label htmlFor="checkbox-table-3" className="sr-only">checkbox</label>
                </div>
            </td>
            <td className="px-6 py-4">
                <svg onClick={deleteTodo} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </td>
        </tr>
    );
}
