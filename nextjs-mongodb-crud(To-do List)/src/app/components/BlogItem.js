import { useState } from "react";


export default function BlogItem({blog, handleToggle}) {
    // const { id, title, description, completed, refreshTodos, index } = props;
    const [loading, setLoading] = useState(false);

    // const toggleCompletion = async () => {
    //     setLoading(true);
    //     await fetch(`/api/items/${id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ completed: !completed })
    //     });
    //     refreshTodos();
    // };

    // const deleteTodo = async () => {
    //     setLoading(true);
    //     await fetch(`/api/items/${id}`, { method: "DELETE" });
    //     refreshTodos();
    // };

    return (
        <div className="py-3 sm:py-4 shadow-md rounded-xl cursor-pointer hover:bg-gray-100" onClick={() => handleToggle(blog)}>
            <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-xs font-bold text-blue-500">
                        {blog.period}
                    </p>
                    <p className="text-xl leading-snug text-blue-gray-900 font-semibold">
                        {blog.title}
                    </p>
                </div>
                <div className="shrink-0 me-4">
                    <svg className="w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns={blog.img_url} width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule='evenodd' d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
                    </svg>
                </div>
            </div>
            <div className="ms-4 !text-gray-500 leading-relaxed text-base">
                {blog.description}
            </div>
        </div>
    );
}
