import type { Variants } from "framer-motion";

/* ===========================================================
   Stagger Default
=========================================================== */

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .25,
        },
    },
};