"use client";

import { useEffect, useState } from "react";

type FillTextProps = {
    text: string;
    duration?: number;
    fillColor?: string;
    baseColor?: string;
    chaos?: number; // 🔥 wie unruhig (0.5 – 2)
};

export default function FillText({
    text,
    duration = 10,
    fillColor = "bg-blue-600",
    baseColor = "text-gray-400",
    chaos = 1
}: FillTextProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let current = 0;
        let start: number | null = null;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;

            const elapsed = (timestamp - start) / 1000;
            if (elapsed >= duration) {
                setProgress(1);
                return;
            }

            // 🔥 Zufällige Zustände
            const pauseChance = Math.random();
            const burstChance = Math.random();

            let delta = 0;

            // ⏸ Pause
            if (pauseChance < 0.08 * chaos) {
                delta = 0;
            }
            // 🚀 Burst
            else if (burstChance > 0.9) {
                delta = Math.random() * 0.03 * chaos;
            }
            // 🐢 Langsam
            else {
                delta = Math.random() * 0.002 * chaos;
            }

            current += delta;
            current = Math.min(current, 1);

            setProgress(current);

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [duration, chaos]);

    return (
        <div className="relative flex justify-center items-center overflow-hidden">
            {/* Base */}
            <span className={`absolute font-bold ${baseColor}`}>
                {text}
            </span>

            {/* Fill */}
            <span
                className={`font-bold  bg-clip-text ${fillColor}`}
                style={{
                    clipPath: `inset(0 ${100 - progress * 100}% 0 0)`
                }}
            >
                {text}
            </span>
        </div>
    );
}
