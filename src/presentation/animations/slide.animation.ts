/* ==========================================================
SLIDE
========================================================== */

import type { Variants } from "framer-motion";

export const slide: Variants = {
    hidden: {
        opacity: 0,
        x: 80,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .7,
            ease: "easeOut",
        },
    },
};