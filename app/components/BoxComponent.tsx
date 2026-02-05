"use client";
import React, { useRef, useEffect, useState } from "react";

type BoxComponentProps = {
    children?: React.ReactNode;
    style?: string;
    w?: string;
};

export default function BoxComponent({ children, style = "" , w = "1/2"}: BoxComponentProps) {

    return (
        <div
            className={` w-${w} flex items-start justify-evenly gap-x-28 mt-8 rounded-4xl px-16 py-3 bg-white/3  outline-[#606060]
                transition-all duration-500  outline backdrop-blur-lg  ${style}`}
        >
            {children}
        </div>
    );
}
