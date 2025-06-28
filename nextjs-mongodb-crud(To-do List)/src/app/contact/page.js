
const contacts = [
    {
        svg_path: "m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z",
        method: 'Address',
        content: "12124 First Street, nr 54"
    },
    {
        svg_path: "M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
        method: 'Email',
        content: "hello@email.com"
    },
    {
        svg_path: "M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z",
        method: 'Phone',
        content: "+1(424) 535 3523"
    },
    {
        svg_path: "M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
        method: 'Contact',
        content: "Andrew Samian"
    }
]

export default function Contact() {
    return (
        <div className="m-8">
            <div>
                <div className='text-center content-center max-w-screen-lg mx-auto'>
                    <h3 className='text-2xl font-bold text-blue-500'>WE ARE HERE</h3>
                    <h1 className='mt-3 text-4xl font-bold'>Are you looking for answers?</h1>
                    <p className='text-xl leading-reland mt-3 mx-20 lg:w-4/5 text-gray-500'>
                        You have no idea who I am. You do not know me at all. Have you ever written a song line that a full
                        crowd would shout when you enter the stage? I do not think so.
                    </p>
                    <div className="my-6">
                        <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                            <svg className="w-6 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>
                            CHAT WITH US
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x-1 divide-solid divide-gray-300 ">
                    {contacts.map((contact, index) => {
                        return (
                            <div key={index} className="text-center mt-10 mb-20">
                                <div className="bg-[#1da1f2] rounded-full size-16 justify-center items-center inline-flex text-center text-white">
                                    <svg className="w-[38px] h-[38px] text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" d={contact.svg_path} />
                                    </svg>
                                </div>
                                <h1 className='mt-4 text-2xl font-bold'>{contact.method}</h1>
                                <p className='text-sm leading-reland mt-2 mx-2 text-gray-400'>
                                    {contact.content}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-gray-100">
                <div className='py-10 text-center content-center max-w-screen-lg mx-auto'>
                    <h3 className='text-sm font-bold text-orange-500 bg-orange-100 inline-flex px-3 py-2 cursor-pointer'>Leave a message</h3>
                    <h1 className='mt-3 text-4xl font-bold'>Tell us more about you</h1>
                    <p className='text-xl leading-reland mt-3 text-gray-500'>
                        There are a lot of people around you that make you feel invincible, but keep in mind, that they say it only to make you smaller.
                        You've made a few bucks, you've found your way to the market.
                    </p>
                </div>
                <div className="w-1/2 bg-white-500 mx-auto">
                    <form>
                        <div className="flex gap-10">
                            <div className="w-1/2">
                                <label htmlFor="input-group-1" className="uppercase mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: John Smith" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="input-group-1" className="uppercase mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Title</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: Web Developer" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="input-group-1" className="uppercase mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <div className="relative mb-6">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </div>
                                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div className="w-full text-end">
                            <button type="submit" className="inline-flex items-end my-6 mx-6 py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-dark-900 hover:bg-gray-800">
                                Contact US
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}