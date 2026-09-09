"use client";

import {
    motion,
    useScroll,
    useSpring,
} from "motion/react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 25,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{
                scaleX,
                transformOrigin: "0%",
            }}
            className="fixed left-0 top-0 z-[100] h-[2px] w-full bg-[#a4875d]"
        />
    );
}