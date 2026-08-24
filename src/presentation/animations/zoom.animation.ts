import type { Variants } from "framer-motion";

/* ===========================================================
   Zoom In Default
=========================================================== */

export const zoomIn: Variants = {
    hidden:{
        opacity:0,
        scale:.85,
    },
    visible:{
        opacity:1,
        scale:1,
        transition:{
            duration:.6,
        },
    },
};