'use client'

import { useState, useEffect } from 'react';
import BlogModal from './components/BlogModal';
import BlogItem from './components/BlogItem';

const images = [
    { id: 1, src: 'resources/img/aerospace.jpg', },
    { id: 2, src: './resources/img/automotive.jpg', },
    { id: 3, src: './resources/img/oil-1.jpg', }
]
export default function Home() {
    const [selectedImage, setSelectedImage] = useState(images[0].src);
    const [blogs, setBlogs] = useState([]);
    const [isShowing, setIsShowing] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({})

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setBlogs(data);
    };

    const handleToggle = (blog) => {
        setIsShowing(!isShowing);
        setSelectedBlog(blog);
    }

    const handleCloseModal = () => {
        setIsShowing(false);
    }
    
    return (
        <div>
            {/* <TodoList /> */}
            <div className='mt-8 text-center content-center max-w-screen-lg mx-auto'>
                <h1 className='text-center text-4xl font-bold'>My Resume List</h1>
                <p className='text-xl text-center mt-6 mx-auto mx-20 lg:w-8/12 text-gray-500'>
                    Welcome to my professional resume page! Below, you'll add new things to do everyday ,
                    and experience in the field of web development.
                </p>
            </div>
            {/* -- My Resume Part */}
            <section className='m-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                    {/* Education and Certification */}
                    <div className=''>
                        <h1 className='text-3xl font-bold mb-2 text-blue-gray-900'>Education & Certifications</h1>
                        <p className='!text-gray-500 text-xl font-normal'>See my education history</p>
                        <div className='grid grid-cols-1  gap-16 gap-y-12'>
                            {blogs.map((blog) => {
                                return (
                                    <BlogItem blog={blog} key={blog._id} handleToggle={handleToggle} />
                                )
                            })}
                        </div>
                    </div>
                    {/* Experience */}
                    <div className=''>
                        <h1 className='text-3xl font-bold mb-2 text-blue-gray-900'>Experience</h1>
                        <p className='!text-gray-500 text-xl font-normal'>See my experience</p>
                        <div className='grid grid-cols-1  gap-16 gap-y-12'>
                            {blogs.map((blog) => {
                                return (
                                    <BlogItem blog={blog} key={blog._id} handleToggle={handleToggle} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* Skills */}
                <div className='mx-auto mt-38 gap-20'>
                    <h1 className='text-3xl font-bold mb-2 text-blue-gray-900'>Skills</h1>
                    <p className='!text-gray-500 text-xl font-normal'>Check out my technical and soft skills</p>
                    <div className='grid grid-cols-3 lg:grid-cols-2  gap-16 gap-y-12'>
                        {blogs.map((blog) => {
                            return (
                                <BlogItem blog={blog} key={blog._id} handleToggle={handleToggle} />
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* What Clients Say */}
            <section className='py-12 px-8 lg:py-24'>
                <div className='max-w-screen-lg mx-auto'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4'>What Clients Say</h1>
                        <p className='block mx-auto text-xl !text-gray-500 lg:w-8/12'>
                            Discover what clients have to say about their experiences working with me. My client's satisfaction is my greatest achievement!
                        </p>
                    </div>
                    <div className='flex flex-row gap-10 mt-20'>
                        <div className='basis-2/3 lg:w-3/5'>
                            <div className='w-full lg:w-3/5'>
                                <h1 className='text-3xl font-semibold leading-[1.3] text-blue-gray-900 mb-4'>Mobile App Development</h1>
                                <p className='block mx-auto text-base !text-gray-500'>
                                    I had the pleasure of working with Lily on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.
                                </p>
                                <h3 className='text-xl font-semibold leading-[1.3] text-blue-gray-900 my-2'>
                                    Michael - Technical Manager
                                </h3>
                                <p className='block mx-auto text-base !text-gray-500'>
                                    Marketing @ APPLE INC.
                                </p>
                            </div>
                            <div className='mt-6 flex flex-row divide-x-1 divide-solid divide-gray-500'>
                                {images.map((img, index) => {
                                    return (
                                        <span key={index} className='flex flex-row'>
                                            <img
                                                key={img.id}
                                                className={`size-10 rounded-sm cursor-pointer mx-3 ${selectedImage == img.src ? 'opacity-100' : 'opacity-50'}`}
                                                src={img.src}
                                                onClick={() => setSelectedImage(img.src)}
                                            />
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='basis-1/3 h-[21rem] rounded-lg sm:w-[18rem] shrink-0'>
                            <img className='w-full h-full rounded-sm' src={selectedImage} />
                        </div>
                    </div>
                </div>
            </section>
            {isShowing === true ? (<BlogModal handleCloseModal={handleCloseModal} blog={selectedBlog} />) : (null)}
        </div>
    );
}
