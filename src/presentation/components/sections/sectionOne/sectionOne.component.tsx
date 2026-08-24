import "./sectionOne.style.scss";
import { motion } from "framer-motion";

// Animations
import {
    staggerContainer,
    zoomIn,
    fadeUp,
    fadeDown,
    fadeLeft,
    fadeRight,
} from "../../../../presentation/animations";

// Imagens
import slogKipolpas from "../../../../assets/images/slog/PERFIL 04.png";
import slogAmazon from "../../../../assets/images/slog/amazon-acai.png";
import slogPeterFrut from "../../../../assets/images/slog/slogan-perterfrut.png";
import slogPalamaz from "../../../../assets/images/slog/images__2_-removebg-preview.png";
import slogPuroSabor from "../../../../assets/images/slog/ChatGPT_Image_10_de_ago._de_2026__15_04_09-removebg-preview.png";

export const SectionOne = () => {

    return (
        <motion.section
            className="sectionOne"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.3,
            }}
        >

            <div className="sectionOneContainer">

                <motion.div
                    className="sectionOneItem sectionOneItemKipolpas"
                    variants={zoomIn}
                >
                    <img
                        className="sectionOneImage"
                        src={slogKipolpas}
                        alt="Kipolpas"
                    />
                </motion.div>

                <motion.div
                    className="sectionOneItem sectionOneItemPuroSabor"
                    variants={fadeRight}
                >
                    <img
                        className="sectionOneImage"
                        src={slogPuroSabor}
                        alt="Puro Sabor"
                    />
                </motion.div>

                <motion.div
                    className="sectionOneItem sectionOneItemAmazon"
                    variants={fadeUp}
                >
                    <img
                        className="sectionOneImage"
                        src={slogAmazon}
                        alt="Amazon Açaí"
                    />
                </motion.div>

                <motion.div
                    className="sectionOneItem sectionOneItemPeterfrut"
                    variants={fadeDown}
                >
                    <img
                        className="sectionOneImage"
                        src={slogPeterFrut}
                        alt="Peter Frut"
                    />
                </motion.div>

                <motion.div
                    className="sectionOneItem sectionOneItemPalamaz"
                    variants={fadeLeft}
                >
                    <img
                        className="sectionOneImage"
                        src={slogPalamaz}
                        alt="Palamaz"
                    />
                </motion.div>

            </div>

        </motion.section>
    );
};