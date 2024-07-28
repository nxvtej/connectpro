/** @format */
// import {
// 	AlertDialog,
// 	AlertDialogAction,
// 	AlertDialogCancel,
// 	AlertDialogContent,
// 	AlertDialogDescription,
// 	AlertDialogFooter,
// 	AlertDialogHeader,
// 	AlertDialogTitle,
// 	AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

import React from "react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface MeetingModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
	title: string;
	className?: string;
	handleClick?: () => void;
	image?: string;
	buttonIcon?: string;
	buttonText?: string;
}

const MeetingModal = ({
	isOpen,
	onClose,
	title,
	className,
	children,
	handleClick,
	buttonText,
	image,
	buttonIcon,
}: MeetingModalProps) => {
	return (
		<Dialog open={isOpen}>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default MeetingModal;
