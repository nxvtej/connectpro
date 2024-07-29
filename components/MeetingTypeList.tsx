/** @format */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast";
// import { useRouter } from "next/router";
// using newer one caused its designed for app directory

const MeetingTypeList = () => {
	const { toast } = useToast();

	const router = useRouter();
	const [meetingState, setMeetingState] = useState<
		"isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
	>();
	const [values, setValues] = useState({
		dateTime: new Date(),
		description: "",
		link: "",
	});
	const [callDetails, setCallDetails] = useState<Call>();
	const { user } = useUser();
	const client = useStreamVideoClient();

	const createMeeting = async () => {
		if (!user || !client) return;

		try {
			if (!values.dateTime) {
				toast({
					title: "Please select a date and Time",
				});
			}
			// generate random id fir call id
			const id = crypto.randomUUID();
			const call = client.call("default", id);
			if (!call) throw new Error("Failed to create meeting");
			console.log(call);
			const startsAt =
				values.dateTime.toISOString() || new Date(Date.now()).toISOString();

			const description = values.description || "Instant meeting";
			// creating a meeting

			console.log("in try 1");
			await call.getOrCreate({
				data: {
					starts_at: startsAt,
					custom: {
						description,
					},
				},
			});

			console.log("in tryt after");
			setCallDetails(call);

			if (!values.description) {
				router.push(`/meeting/${call.id}`);
			}
			toast({
				title: "meeting created",
			});
		} catch (e) {
			console.log("in catch");
			console.error(e);
			toast({
				title: "Failed to create meeting",
			});
		}
	};

	return (
		<section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
			<HomeCard
				img='/icons/add-meeting.svg'
				title='New Meeting'
				description='Start an instant meeting'
				handleClick={() => {
					setMeetingState("isInstantMeeting");
					console.log(meetingState);
				}}
				className='bg-orange-1'
			/>
			<HomeCard
				img='/icons/schedule.svg'
				title='Schedule Meeting'
				description='Plan your meeting'
				handleClick={() => setMeetingState("isScheduleMeeting")}
				className='bg-blue-1'
			/>
			<HomeCard
				img='/icons/recordings.svg'
				title='View Recordings'
				description='CheckOut your recordings'
				handleClick={() => setMeetingState("isJoiningMeeting")}
				// handleClick={() => router.push("/recordings")}
				className='bg-purple-1'
			/>
			<HomeCard
				img='/icons/join-meeting.svg'
				title='Join Meeting'
				description='Via Invitation link'
				handleClick={() => setMeetingState("isJoiningMeeting")}
				className='bg-yellow-1'
			/>

			<MeetingModal
				isOpen={meetingState === "isInstantMeeting"}
				onClose={() => setMeetingState(undefined)}
				title='start an instant meeting'
				className='text-center'
				buttonText='Start Meeting'
				handleClick={() => createMeeting()}
			/>
		</section>
	);
};

export default MeetingTypeList;
