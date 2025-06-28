
const teams = [
    {
        img_src: 'about/2.jfif',
        name: 'Tina Andrew0',
        skill: 'Founder & CEO',
        description: 'Today you are you! That is truer than true! There is no one alive!'
    },
    {
        img_src: 'about/3.jfif',
        name: 'Phoenix Baker',
        skill: 'Engineering Manager',
        description: 'And I love you like Kanye loves Kanye. We need to restart that.'
    },
    {
        img_src: 'about/4.jfif',
        name: 'Lana Steiner',
        skill: 'Product Manager',
        description: 'Artist is a term applied to a person who engages in an activity'
    },
    {
        img_src: 'about/5.jfif',
        name: 'Demi Wilkinson',
        skill: 'Fronted Developer',
        description: 'Success is not final, failure is not fatal: it is the courage to continue'
    }
]

export default function About() {
    return (
        <div>
            <div className="grid grid-cols lg:grid-cols-2 gap-10  mx-auto m-20">
                {/* description part */}
                <div className="content-center text-center m-10 mr-0-lg p-10 pr-0-lg lg:text-left">
                    <div>
                        <div className="flex flex-row gap-2 inline-flex border-2 border-gray-200 rounded-lg p-1 lg">
                            <span className="text-white bg-black px-2 rounded-sm mx-2">New</span>
                            <p className="font-bold">Personalized coaching in-app </p>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg>

                        </div>
                        <div className='mt-8 text-center content-center max-w-screen-lg mx-auto'>
                            <h1 className='text-center text-4xl font-bold lg:text-left'>Our company mission is to lead the design apps</h1>
                            <p className='text-xl text-center mt-6 mx-auto mx-20  text-gray-500 leading-relaxed lg:mx-0 lg:text-left'>
                                It becomes harder for us to give others a hand. We get our heart broken by people we love,
                                even that we give them all we have. Then we lose family over time.
                            </p>
                        </div>
                    </div>
                    <div className="my-10">
                        <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                            <svg className="uppercase w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            Downlaod IOS
                        </button>
                        <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                            <svg className="uppercase w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            Downlaod Android
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img className="rounded-3xl mx-auto max-w-md" src="./resources/img/about/1.jfif" />
                </div>
            </div>
            {/* Team */}
            <div className="mx-15">
                <div className="items-center text-center mx-auto mb-10 w-3xl">
                    <h3 className="text-lg font-bold mb-2">Our Team</h3>
                    <h1 className="text-4xl font-bold mb-3">You are into a great company</h1>
                    <p className="leading-relaxed text-lg font-normal mb-3 text-gray-500">
                        This is the paragraph where you can write more details about your team.
                        Keep you user engaged by providing meaningful information.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teams.map((member, index) => {
                        return (
                            <div key={index} className="my-5 mx-10">
                                <div className="rounded-xl h-64">
                                    <img className="w-full h-full rounded-xl object-cover object-top" src={`./resources/img/${member.img_src}`} />
                                </div>
                                <h1 className="text-2xl font-bold mt-6">{member.name}</h1>
                                <p className="text-gray-500 mt-2">{member.skill}</p>
                                <p className="text-gray-500 mt-3">
                                    {member.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}