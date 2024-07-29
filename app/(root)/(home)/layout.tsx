/** @format */

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Connect Pro",
	description: "Developed by Navdeep",
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<Navbar />
			<div className='flex'>
				<Sidebar />
				<section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
					<div className='w-full'>{children}</div>
				</section>
			</div>
		</main>
	);
};

export default HomeLayout;
