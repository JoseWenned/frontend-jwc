import "./sectionOne.style.scss";
import { motion } from "framer-motion";

// Imagens
import slogKipolpas from "../../../../assets/images/slog/PERFIL 04.png"
import slogAmazon from "../../../../assets/images/slog/amazon-acai.png"
import slogPeterFrut from "../../../../assets/images/slog/slogan-perterfrut.png"
import slogPalamaz from "../../../../assets/images/slog/images__2_-removebg-preview.png"
import slogPuroSabor from "../../../../assets/images/slog/ChatGPT_Image_10_de_ago._de_2026__15_04_09-removebg-preview.png"

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
            <motion.div
                className="sectionOneContainer"
                variants={containerVariants}
            >

                <motion.div
                    className="sectionOneItem sectionOneItemKipolpas"
                    variants={itemVariants}
                >
                    <img
                        className="sectionOneImage"
                        src={slogKipolpas}
                        alt="Kipolpas"
                    />
                </motion.div>


                <motion.div
                    className="sectionOneItem sectionOneItemAmazon"
                    variants={itemVariants}
                >
                    <img
                        className="sectionOneImage"
                        src={slogAmazon}
                        alt="Amazon Açaí"
                    />
                </motion.div>


                <motion.div
                    className="sectionOneItem sectionOneItemPeterfrut"
                    variants={itemVariants}
                >
                    <img
                        className="sectionOneImage"
                        src={slogPeterFrut}
                        alt="Peter Frut"
                    />
                </motion.div>


                <motion.div
                    className="sectionOneItem sectionOneItemPalamaz"
                    variants={itemVariants}
                >
                    <img
                        className="sectionOneImage"
                        src={slogPalamaz}
                        alt="Palamaz"
                    />
                </motion.div>


                <motion.div
                    className="sectionOneItem sectionOneItemPuroSabor"
                    variants={itemVariants}
                >
                    <img
                        className="sectionOneImage"
                        src={slogPuroSabor}
                        alt="Puro Sabor"
                    />
                </motion.div>

            </motion.div>
        </motion.section>
    );
};