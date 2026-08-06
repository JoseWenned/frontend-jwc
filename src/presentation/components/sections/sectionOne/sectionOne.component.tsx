import "./sectionOne.style.scss";
import { motion } from "framer-motion";

// Imagens
import slogKipolpas from "../../../../assets/images/slog/LOGOCOMTRAÇADO.png"
import slogAmazon from "../../../../assets/images/slog/amazon-acai.png"
import slogPeterFrut from "../../../../assets/images/slog/slogan-perterfrut.png"

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.25,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
        },
    },
};

export const SectionOne = () => {
    return (
        <motion.section
            className="sectionOne"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.3,
            }}
        >
            <motion.figure
                className="sectionOneContainer"
                variants={containerVariants}
            >
                <motion.img
                    variants={itemVariants}
                    className="sectionOneImage"
                    src={slogKipolpas}
                    alt="Kipolpas"
                />

                <motion.img
                    variants={itemVariants}
                    className="sectionOneImage"
                    src={slogAmazon}
                    alt="Amazon Açaí"
                />

                <motion.img
                    variants={itemVariants}
                    className="sectionOneImage"
                    src={slogPeterFrut}
                    alt="Peter Frut"
                />
            </motion.figure>
        </motion.section>
    );
};