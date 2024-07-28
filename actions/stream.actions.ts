"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;


// needs to be generate dons erver side 
export const tokenProvider = async () => {
    const user = await currentUser();
    if (!user) throw new Error('User not logged in');
    if (!apiKey) throw new Error("No api key");
    if (!apiSecret) throw new Error('No api Secret');


    // now make client using these
    const streamClient = new StreamClient(apiKey, apiSecret)
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() / 100) - 60;
    // now create token
    const token = streamClient.createToken(user.id, exp, issued);
    return token;

}