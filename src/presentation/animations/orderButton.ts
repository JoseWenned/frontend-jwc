import type { Variants } from "framer-motion";

export const orderButton: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            delay: 0.2,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};