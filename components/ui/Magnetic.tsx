"use client";

import {
    motion,
    useMotionValue,
    useSpring,
} from "motion/react";
import { ReactNode } from "react";

export default function Magnetic({
    children,
}: {
    children: ReactNode;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, {
        stiffness: 180,
        damping: 15,
    });

    const springY = useSpring(y, {
        stiffness: 180,
        damping: 15,
    });

    function handleMove(
        event: React.MouseEvent<HTMLDivElement>
    ) {
        const rect =
            event.currentTarget.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((event.clientX - centerX) * 0.15);
        y.set((event.clientY - centerY) * 0.15);
    }

    function reset() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{
                x: springX,
                y: springY,
            }}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="w-fit"
        >
            {children}
        </motion.div>
    );
}