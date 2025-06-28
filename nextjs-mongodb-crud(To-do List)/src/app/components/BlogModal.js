import { useState } from "react";


export default function BlogModal({handleCloseModal, blog}) {
    // const { id, title, description, completed, refreshTodos, index } = props;
    // const [loading, setLoading] = useState(false);

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
        <div>
            {/* <!-- Modal toggle --> */}
            {/* <button data-modal-target="static-modal" data-modal-toggle="static-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button> */}

            {/* <!-- Main modal --> */}
            <div className="overflow-y-auto overflow-x-hidden fixed top-0 bg-[#343434] right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-20 w-full max-w-full max-h-full">
                    <div className="flex flex-cols mx-auto text-center w-full">
                        <div className="gap-y-3 mx-auto">
                            <p className="text-gray-500 text-xl font-semibold">{blog.period}</p>
                            <h1 className="text-xl font-bold text-white uppercase">{blog.title}</h1>
                            <div className="items-center justify-center flex flex-cols">
                                <div className="border-b-3 border-[#c5a47e] w-full"></div>
                                <p className="text-lg text-[#c5a47e] mx-3 pt-1">*</p>
                                <div className="border-b-3 border-[#c5a47e] w-full"></div>
                            </div>
                        </div>
                        <div className="content-center fixed top-18 right-0 px-10">
                            <button 
                                type="button" 
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={handleCloseModal}    
                            >
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 w-full mx-auto text-center content-center items-center py-10">
                        <div className="text-white text-md">{blog.description}</div>
                        <div>
                            <img src="./resources/img/blogModal.webp" />
                        </div>
                        <div className="text-white text-md">{blog.description}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
