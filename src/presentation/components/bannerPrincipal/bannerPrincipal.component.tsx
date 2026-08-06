import "./bannerPrincipal.style.scss";
import { motion } from "framer-motion";

// Images
import BannerOne from "../../../assets/images/Banners/BannerOne.png";
import logo from "../../../assets/images/Banners/logo.png";

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.25,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
        },
    },
};

export const BannnerPrincipal = () => {
    return (
        <motion.section
            className="containerBannerOne"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <img
                className="imageBannerOne"
                src={BannerOne}
                alt="Banner Principal"
            />

            <motion.div
                className="containerLogo"
                variants={itemVariants}
            >
                <img
                    className="imageLogo"
                    src={logo}
                    alt="Logo"
                />
            </motion.div>

            <motion.p
                className="textLogo"
                variants={itemVariants}
            >
                SEU MELHOR PARCEIRO EM SOLUÇÕES COMPLETAS NA DISTRIBUIÇÃO
                DE ALIMENTOS CONGELADOS NO CE E RN
            </motion.p>

            <motion.button
                className="buttonFaleConoscoOne"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                FALE CONOSCO
            </motion.button>
        </motion.section>
    );
};