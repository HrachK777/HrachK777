"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
	// Navigation items array
	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "News", href: "/news" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
			<div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800 border-t-1 border-gray-300 pt-5">
				<Link
					href="/"
					className="mr-4 block cursor-pointer py-1.5 text-gray-600 font-bold text-sm"
				>
					@ 2025 Made with Material Tailwind by Creative Tim
				</Link>

				{/* Desktop Menu */}
				<div className="hidden lg:block">
					<ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
						{navItems.map((item, index) => (
							<li
								key={index}
								className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-gray-400"
							>
								<Link href={item.href} className="flex items-center">
									{item.name}
								</Link>
							</li>
						))}
						<li>
							<button className="bg-dark-600 hover:bg-dark-500 text-white px-8 py-2 rounded-md">
								subscribe
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}