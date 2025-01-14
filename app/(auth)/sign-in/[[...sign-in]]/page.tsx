/** @format */
"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";
import { useState } from "react";

const SignInPage = () => {
  const [copied, setCopied] = useState(false);
  const [passwordcopy, setPasswordcopy] = useState(false);

  const credentials = {
    username: "demo",
    password: "demo@testing#123",
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      if (text === "demo") {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        setPasswordcopy(true);
        setTimeout(() => setPasswordcopy(false), 2000);
      }
    });
  };
  return (
    <main className="flex-center  h-screen">
      <div>
        <div className="bg-gray-800">
          <div className="text-white flex flex-col">
            <div className="flex justify-between items-center">
              <div className="ml-2">UserName: {credentials.username}</div>
              <button
                className="text-blue-400 hover:text-blue-600 mr-2"
                onClick={() => handleCopy(credentials.username)}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="ml-2">Password: {credentials.password}</div>
              <button
                className="text-blue-400 hover:text-blue-600 mr-2"
                onClick={() => handleCopy(credentials.password)}
              >
                {passwordcopy ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        <div>
          <SignIn></SignIn>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
