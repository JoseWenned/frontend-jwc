import "./sectionThree.style.scss";
import { motion } from "framer-motion";

import {
    fadeLeft,
    fadeRight,
    staggerContainer,
} from "../../../animations";

import {
    FaBullseye,
    FaEye,
    FaHandshake,
} from "react-icons/fa";

// Imagens
import iconMapa from "../../../../assets/images/Banners/mapa.png";


export const SectionThree = () => {

    return (
        <section className="containerSectionThree">

            <div className="containerSectionThreeContent">

                {/* ==================================================
                    MISSÃO • VISÃO • VALORES
                ================================================== */}

                <motion.div
                    className="containerSectionThreeContentArticles"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >

                    {/* ==================================================
                        MISSÃO
                    ================================================== */}

                    <motion.article
                        className="articleSectionThree"
                        variants={fadeLeft}
                    >

                        <div className="containerSectionThreeContentArticlesTitle">

                            <FaBullseye className="iconSectionThree" />

                            <h2 className="titleSectionThree">
                                MISSÃO
                            </h2>

                        </div>

                        <p className="textSectionThree">
                            Conectar marcas e produtos aos mercados com eficiência, organização e confiança, 
                            oferecendo soluções de distribuição e logística que fortalecem nossos parceiros e impulsionam seus negócios.
                        </p>

                    </motion.article>


                    {/* ==================================================
                        VISÃO
                    ================================================== */}

                    <motion.article
                        className="articleSectionThree"
                        variants={fadeLeft}
                    >

                        <div className="containerSectionThreeContentArticlesTitle">

                            <FaEye className="iconSectionThree" />

                            <h2 className="titleSectionThree">
                                VISÃO
                            </h2>

                        </div>

                        <p className="textSectionThree">
                            Ser referência em distribuição e logística no Nordeste, 
                            reconhecida pela excelência operacional, 
                            pela confiança e pela construção de relações duradouras com clientes, fornecedores e parceiros.
                        </p>

                    </motion.article>


                    {/* ==================================================
                        VALORES
                    ================================================== */}

                    <motion.article
                        className="articleSectionThree"
                        variants={fadeLeft}
                    >

                        <div className="containerSectionThreeContentArticlesTitle">

                            <FaHandshake className="iconSectionThree" />

                            <h2 className="titleSectionThree">
                                VALORES
                            </h2>

                        </div>

                        <p className="textSectionThree">
                            Atuamos com confiança, comprometimento, ética, transparência, excelência e espírito de parceria, 
                            buscando sempre construir relações sólidas e gerar valor para toda a cadeia comercial.
                        </p>

                    </motion.article>

                </motion.div>


                {/* ==================================================
                    MAPA
                ================================================== */}

                <motion.div
                    className="containerSectionThreeContentMap"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >

                    <img
                        className="imgSectionThree"
                        src={iconMapa}
                        alt="Mapa representando a área de atuação da JWC"
                    />

                </motion.div>

            </div>

        </section>
    );
};