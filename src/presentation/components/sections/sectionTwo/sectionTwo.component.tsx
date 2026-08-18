import "./sectionTwo.style.scss";
import { motion } from "framer-motion";

import {
    fadeDown,
    fadeUp,
    staggerContainer,
    orderButton,
} from "../../../animations";

import {
    FaHandshake,
    FaTruck,
    FaAward,
} from "react-icons/fa";

// Fragments
import { ButtonSaibaMais } from "../../../fragments/buttons/buttonSaibaMais/buttonSaibaMais.fragments";


export const SectionTwo = () => {

    return (
        <section className="containerParceiroIdeal">

            <div className="containerParceiroIdealContent">

                {/* ==================================================
                    TÍTULO
                ================================================== */}

                <motion.h2
                    className="titleParceiro"
                    variants={fadeDown}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >
                    POR QUE A JWC É SEU PARCEIRO E DISTRIBUIDOR IDEAL?
                </motion.h2>


                {/* ==================================================
                    CONTEÚDOS
                ================================================== */}

                <motion.div
                    className="containerParceiroIdealContentArticles"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                >

                    {/* ==================================================
                        PARCEIROS COMERCIAIS
                    ================================================== */}

                    <motion.article
                        className="articleParceiroIdeal"
                        variants={fadeUp}
                    >

                        <div className="containerIconParceiroIdeal">
                            <FaHandshake className="icons" />
                        </div>

                        <h3 className="titleComercial">
                            PARCEIROS COMERCIAIS
                        </h3>

                        <p className="descriptionComercial">
                            Trabalhamos inicialmente com a distribuição dos
                            produtos Kipolpas, Amazon Açaí e Peter Frut,
                            oferecendo ao mercado uma linha completa de
                            polpas, açaí e frutas congeladas, com elevado
                            padrão de qualidade e excelente aceitação pelos
                            consumidores.
                        </p>

                    </motion.article>


                    {/* ==================================================
                        ÁREA DE ATUAÇÃO
                    ================================================== */}

                    <motion.article
                        className="articleParceiroIdeal"
                        variants={fadeUp}
                    >

                        <div className="containerIconParceiroIdeal">
                            <FaTruck className="icons" />
                        </div>

                        <h3 className="titleComercial">
                            ÁREA DE ATUAÇÃO
                        </h3>

                        <p className="descriptionComercial">
                            Atendimento inicial na região do Vale do
                            Jaguaribe, Oeste Potiguar e cidades estratégicas
                            do Ceará e Rio Grande do Norte, com expansão
                            gradual conforme o crescimento das operações.
                        </p>

                    </motion.article>


                    {/* ==================================================
                        COMPROMISSO COM NOSSOS CLIENTES
                    ================================================== */}

                    <motion.article
                        className="articleParceiroIdeal"
                        variants={fadeUp}
                    >

                        <div className="containerIconParceiroIdeal">
                            <FaAward className="icons" />
                        </div>

                        <h3 className="titleComercial">
                            COMPROMISSO COM NOSSOS CLIENTES
                        </h3>

                        <p className="descriptionComercial">
                            Nosso compromisso é oferecer produtos de
                            qualidade, atendimento ágil, logística confiável
                            e condições comerciais que contribuam para o
                            sucesso dos nossos parceiros.
                        </p>

                    </motion.article>

                </motion.div>


                {/* ==================================================
                    BOTÃO
                ================================================== */}

                <motion.div
                    className="containerButtonParceiroIdeal"
                    variants={orderButton}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >
                    <ButtonSaibaMais
                        onClick={() => console.log("clicou")}
                    />
                </motion.div>

            </div>

        </section>
    );
};