'use client'

import { useState, useEffect } from 'react';
import TodoItem from '../components/TodoItem';

export default function TodoList() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ name: '', description: '' });

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const res = await fetch('/api/items');
        const data = await res.json();
        setItems(data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            fetchItems();
            setForm({ name: '', description: '' });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='m-8'>
            <div className='text-center content-center max-w-screen-lg mx-auto'>
                <h1 className='text-center text-4xl font-bold'>New To-do List</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-3 ml-20 mt-6">
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                            type="text"
                            name="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Item Title"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input
                            type="text"
                            name="description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Item Description"
                            value={form.description}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className='content-end ml-6 text-2xl text-red-500'>
                        <button type="submit" className='cursor-pointer'>Add Item</button>
                    </div>
                </div>
            </form>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Done
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <TodoItem
                                key={item._id}
                                index={index}
                                title={item.name}
                                description={item.description}
                                id={item._id}
                                completed={item.completed}
                                refreshTodos={fetchItems}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
