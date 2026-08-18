import "./sectionFive.style.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animations
import {
    staggerContainer,
    zoomIn,
    fadeLeft,
    fadeUp,
    fadeRight,
} from "../../../../presentation/animations";

// Icons
import iconArrowCircle from "../../../../assets/images/icons/icon-seta-com-circulo.svg";

export const SectionFive = () => {

    return (
        <motion.section
            className="containerSectionFive"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.25,
            }}
        >

            <div className="containerSectionFiveContent">

                {/* ==================================================
                    TÍTULO
                ================================================== */}

                <motion.div
                    className="containerSectionFiveTitle"
                    variants={zoomIn}
                >

                    <span className="subtitleSectionFive">
                        Nossas soluções
                    </span>

                    <h2 className="titleSectionFive">
                        Conheça soluções completas para sua rede
                    </h2>

                </motion.div>


                {/* ==================================================
                    CARDS
                ================================================== */}

                <motion.article
                    className="containerSectionFiveCards"
                    variants={staggerContainer}
                >

                    {/* ==================================================
                        COMERCIAL
                    ================================================== */}

                    <motion.div
                        variants={fadeLeft}
                    >
                        <Link
                            to="/comercial"
                            className="cardSectionFive"
                        >

                            <div className="cardSectionFiveContent">

                                <span className="cardNumber">
                                    01
                                </span>

                                <h3 className="titleCardSectionFive">
                                    Comercial
                                </h3>

                                <p className="descriptionCardSectionFive">
                                    Na JWC Distribuição & Logística, acreditamos
                                    que uma boa parceria começa muito antes da
                                    primeira venda.
                                </p>

                            </div>

                            <span className="cardSectionFiveLink">
                                Saiba mais

                                <img
                                    src={iconArrowCircle}
                                    alt="Saiba mais"
                                />
                            </span>

                        </Link>
                    </motion.div>


                    {/* ==================================================
                        LOGÍSTICA
                    ================================================== */}

                    <motion.div
                        variants={fadeUp}
                    >
                        <Link
                            to="/logistica"
                            className="cardSectionFive"
                        >

                            <div className="cardSectionFiveContent">

                                <span className="cardNumber">
                                    02
                                </span>

                                <h3 className="titleCardSectionFive">
                                    Logística
                                </h3>

                                <p className="descriptionCardSectionFive">
                                    Nossa operação logística é planejada para
                                    garantir eficiência, organização e segurança
                                    em cada etapa da distribuição.
                                </p>

                            </div>

                            <span className="cardSectionFiveLink">
                                Saiba mais

                                <img
                                    src={iconArrowCircle}
                                    alt="Saiba mais"
                                />
                            </span>

                        </Link>
                    </motion.div>


                    {/* ==================================================
                        MERCHANDISING
                    ================================================== */}

                    <motion.div
                        variants={fadeRight}
                    >
                        <Link
                            to="/merchandising"
                            className="cardSectionFive"
                        >

                            <div className="cardSectionFiveContent">

                                <span className="cardNumber">
                                    03
                                </span>

                                <h3 className="titleCardSectionFive">
                                    Merchandising
                                </h3>

                                <p className="descriptionCardSectionFive">
                                    Fortalecemos a presença das marcas no ponto
                                    de venda, contribuindo para uma apresentação
                                    mais estratégica dos produtos.
                                </p>

                            </div>

                            <span className="cardSectionFiveLink">
                                Saiba mais

                                <img
                                    src={iconArrowCircle}
                                    alt="Saiba mais"
                                />
                            </span>

                        </Link>
                    </motion.div>

                </motion.article>

            </div>

        </motion.section>
    );
};