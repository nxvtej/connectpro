/** @format */
import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useEffect, useState } from "react";

const Home = () => {
	const now = new Date();
	// const time = now.toLocaleTimeString();
	// const date = now.toLocaleDateString();

	const time = now.toLocaleTimeString("en-IN", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
	const date = now.toLocaleDateString("en-IN", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	/*
will cause re renders so add another component
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const time = now.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
	});
	const date = now.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
*/
	return (
		<section className='flex size-full flex-col gap-10 text-white'>
			<h1 className='text-3xl font-bold'>
				<div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
					<div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
						<h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
							Upcoming meeting at: 12:30 PM
						</h2>
						<div className='flex flex-col gap-2'>
							<h1 className='text-4xl font-extrabold lg:text-7xl'>
								{/* 10:30 PM */}
								{time}
							</h1>
							<p className='text-lg font-medium text-sky-1 lg:text-2xl'>
								{/* Saturday, March 23, 2024 */}
								{date}
							</p>
						</div>
					</div>
				</div>
			</h1>

			<MeetingTypeList />
		</section>
	);
};

export default Home;
