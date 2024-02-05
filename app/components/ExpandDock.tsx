"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import Dock from "./Dock";

export default function Title() {
    const [isDockVisible, setIsDockVisible] = useState(false);

    const handleBurgerMenuClick = () => {
        setIsDockVisible(!isDockVisible);
    };

    return (
        <main className={`dark:bg-[#212121]/70 backdrop-blur-xl z-50 transition-all drop-shadow-xl flex gap-4 flex-col bg-[#f8f8f8]/70 border dark:border-[#ffffff1a] p-[12px] border-[#fefdfe] rounded-[24px] ${isDockVisible ? 'expanded' : ''}`}>
            <div
                className="w-[48px] h-[48px] drop-shadow-md flex justify-center  rounded-[12px] border cursor-pointer dark:bg-[#222122] bg-[#f8f8f8d6] dark:border-[#ffffff1a] border-[#dededf]"
                onClick={handleBurgerMenuClick}
            >
                <div className="self-center flex justify-center w-full dark:text-white text-black">
                    <RxHamburgerMenu size={25} />
                </div>
            </div>
            {isDockVisible && <div className="bg-transparent"><Dock /></div>}
        </main>
    );
}
