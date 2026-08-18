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
import iconMapa from "../../../../assets/images/icons/ChatGPT_Image_24_de_jul._de_2026__23_58_59-removebg-preview.png";


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
                            Distribuir produtos de qualidade com eficiência
                            logística, fortalecendo parcerias comerciais e
                            contribuindo para o desenvolvimento econômico.
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
                            Ser reconhecida como uma das principais
                            distribuidoras da região Nordeste, destacando-se
                            pela excelência operacional, confiança e
                            compromisso com clientes, fornecedores e parceiros.
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
                            Trabalho, comprometimento, qualidade,
                            sustentabilidade com ética e transparência.
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