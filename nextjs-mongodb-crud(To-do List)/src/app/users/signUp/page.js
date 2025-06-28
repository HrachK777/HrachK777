"use client"

import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignUp() {
    const [form, setForm] = useState({});
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const resData = await res.json();
            console.log('for debug resData = ', resData);
            const { email, password } = form;
            alert(resData.msg);
            if(resData.status == 'success') {
                signIn('credentials', {email, password, redirect: false});
                router.push('/');
            }
            // router.push('/');
            setForm({});
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid grid-cols lg:grid-cols-2 gap-10  mx-auto m-20">
            <div className="hidden lg:block">
                <img className="rounded-3xl h-full mx-auto max-w-md" src="../resources/img/login.webp" />
            </div>
            {/* signUp part */}
            <div className="content-center text-center p-10 mx-auto ml-0 w-7/10">
                <div>
                    <div className='mt-8 text-center content-center max-w-screen-lg mx-auto'>
                        <h1 className='text-center text-4xl font-bold'>Join Us Today</h1>
                        <p className='text-xl text-center mt-6 mx-auto mx-20  text-gray-500 leading-relaxed'>
                            Enter your email and password to register.
                        </p>
                    </div>
                </div>
                {/* signUp form */}
                <div className="mt-6">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="input-group-1" className="text-left mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                            <div className="relative mb-6">
                                <input
                                    name="email"
                                    type="email"
                                    id="input-group-1"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Hello@email.com"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="input-group-1" className="text-left mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <div className="relative mb-6">
                                <input
                                    name="password"
                                    type="password"
                                    id="input-group-1"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="********"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-full">
                            <input
                                id="checkbox-table-3"
                                type="checkbox"
                                className="cursor-pointer w-5 h-5 bg-gray-100 border-gray-300 rounded-sm"
                            // checked={completed}
                            // onChange={toggleCompletion}
                            />
                            <div>
                                <label htmlFor="checkbox-table-3" className="cursor-pointer text-gray-500">I agree the</label>
                                <Link href="/" className="underline text-black">Terms and Conditions</Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <button type="submit" className="uppercase mx-auto bg-gray-800 w-full my-6 mx-6 py-2.5 px-4 text-xs font-medium text-center text-white rounded-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-dark-900 hover:shadow-lg">
                                Register Now
                            </button>
                        </div>
                    </form>
                </div>
                {/* Sign Up with Social */}
                <div className="my-10 grid grid-col">
                    <button type="button" className="uppercase justify-center text-black shadow-md bg-white hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                        <svg className="uppercase w-5 h-5 me-2 -ms-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clipRule="evenodd" />
                        </svg>
                        Sign In with google
                    </button>
                    <button type="button" className="font-bold uppercase justify-center text-black shadow-md bg-white hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-[#050708]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                        <svg className="uppercase w-5 h-5 me-2 -ms-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd" />
                        </svg>
                        Sign In with twitter
                    </button>
                    <p className="mt-3 text-gray-500">Already have an account? <a href="/users/signIn" className="text-black font-bold">Sign in</a></p>
                </div>
            </div>

        </div>
    )
}