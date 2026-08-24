import type { Variants } from "framer-motion";

/* ===========================================================
   Fade Left
=========================================================== */

export const fadeLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
            ease: "easeOut",
        },
    },
};

/* ===========================================================
   Fade Right
=========================================================== */

export const fadeRight: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
            ease: "easeOut",
        },
    },
};

/* ===========================================================
   Fade Up
=========================================================== */

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
            ease: "easeOut",
        },
    },
};

/* ===========================================================
   Fade Down
=========================================================== */

export const fadeDown: Variants = {
    hidden: {
        opacity: 0,
        y: -60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
            ease: "easeOut",
        },
    },
};