"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [visible, setVisible] = useState(false);
    const [hovering, setHovering] = useState(false);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const smoothX = useSpring(x, {
        stiffness: 500,
        damping: 35,
    });

    const smoothY = useSpring(y, {
        stiffness: 500,
        damping: 35,
    });

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        setVisible(true);

        const move = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);

            const target = e.target as HTMLElement;

            setHovering(
                Boolean(
                    target.closest(
                        "a, button, [data-cursor='interactive']"
                    )
                )
            );
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, [x, y]);

    if (!visible) return null;

    return (
        <motion.div
            aria-hidden="true"
            style={{
                x: smoothX,
                y: smoothY,
            }}
            animate={{
                width: hovering ? 46 : 10,
                height: hovering ? 46 : 10,
            }}
            transition={{
                duration: 0.2,
            }}
            className="pointer-events-none fixed left-0 top-0 z-[9998] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#181713]/50 mix-blend-difference md:block"
        />
    );
}