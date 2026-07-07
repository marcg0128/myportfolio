"use client";
import React, { useRef, useEffect, useState } from "react";

type BoxComponentProps = {
    children?: React.ReactNode;
    style?: string;
    w?: string;
    center?: boolean;
};

export default function BoxComponent({ children, style = "" , w = "1/2", center = true}: BoxComponentProps) {

    return (
        <div
            className={`${style} w-${w} flex items-start  gap-x-28 mt-8 rounded-4xl px-16 py-3 bg-(--bg)/40  outline-[#606060]
                transition-all duration-500  outline backdrop-blur-lg  
                ${center ? 'justify-evenly' : 'justify-start'}`}
        >
            {children}
        </div>
    );
}
