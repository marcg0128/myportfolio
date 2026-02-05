"use client";
import Image from "next/image";
import {useState, useEffect} from "react";

import Start from "@/app/pages/Start/Start";
import NavBar from "@/app/components/NavBar/NarBar";
import FillText from "@/app/components/Elements/FillText";
import Aurora from "@/app/components/Elements/Aurora";


export default function Home() {


    return (
        <>
            <div className="w-full h-full relative overflow-x-hidden">
                <div className="z-50 fixed">
                    <NavBar/>
                </div>
                <div className="fixed inset-0 z-0 w-full h">
                    <Aurora
                        colorStops={["#5227FF","#5227FF"]}
                        amplitude={0.1}
                        blend={0.5}
                    />
                </div>

                <div className="z-40 relative">
                    <div>
                        <Start></Start>

                    </div>

                </div>

            </div>

        </>
    );
}

