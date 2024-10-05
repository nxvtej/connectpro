/** @format */

import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
	title: "meet",
	description: "meet-navi",
};

const layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<main>
			<StreamVideoProvider>{children}</StreamVideoProvider>
		</main>
	);
};

export default layout;
