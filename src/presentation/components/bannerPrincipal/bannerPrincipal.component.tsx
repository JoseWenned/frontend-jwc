import "./bannerPrincipal.style.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animations
import {
    fadeLeft,
    fadeRight,
    orderButton,
} from "../../animations";

// Images
import BannerOne from "../../../assets/images/Banners/BannerOne.png";


export const BannnerPrincipal = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            className="containerBannerOne"
            initial="hidden"
            animate="visible"
        >

            {/* ==================================================
                IMAGEM DE FUNDO
            ================================================== */}

            <motion.img
                className="imageBannerOne"
                src={BannerOne}
                alt="JWC Distribuição e Logística"
            />


            {/* ==================================================
                OVERLAY
            ================================================== */}

            <motion.div
                className="overlayBannerOne"
            />


            {/* ==================================================
                CONTEÚDO
            ================================================== */}

            <div className="containerBannerOneContent">

                {/* ==================================================
                    CONTEÚDO TEXTUAL
                ================================================== */}

                <motion.div
                    className="containerBannerOneText"
                >

                    {/* ==================================================
                        TÍTULO
                    ================================================== */}

                    <motion.h1
                        className="titleBannerOne"
                        variants={fadeLeft}
                    >

                        <span>
                            CONECTAMOS
                        </span>

                        <span>
                            NEGÓCIOS,
                        </span>

                        <span className="titleBannerOneHighlight">
                            MOVEMOS
                        </span>

                        <span className="titleBannerOneHighlight">
                            RESULTADOS.
                        </span>

                    </motion.h1>


                    {/* ==================================================
                        DESCRIÇÃO
                    ================================================== */}

                    <motion.p
                        className="descriptionBannerOne"
                        variants={fadeLeft}
                    >
                        Soluções completas em distribuição e logística,
                        levando eficiência, qualidade e oportunidades
                        para <strong>empresas que querem crescer.</strong>
                    </motion.p>


                    {/* ==================================================
                        BOTÃO
                    ================================================== */}

                    <motion.button
                        className="buttonFaleConoscoOne"
                        variants={orderButton}

                        whileHover={{
                            scale: 1.03,
                        }}

                        whileTap={{
                            scale: 0.97,
                        }}
                        onClick={() => navigate("/contato")}
                    >
                        FALE CONOSCO
                    </motion.button>

                </motion.div>


                {/* ==================================================
                    ÁREA VISUAL
                ================================================== */}

                <motion.div
                    className="containerBannerOneVisual"
                    variants={fadeRight}
                />

            </div>

        </motion.section>
    );
};