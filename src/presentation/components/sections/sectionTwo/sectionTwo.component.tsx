import "./sectionTwo.style.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

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
                            Trabalhamos com marcas selecionadas e produtos de qualidade para oferecer ao mercado um portfólio diversificado de polpas, 
                            açaí e frutas congeladas, atendendo diferentes necessidades e oportunidades do canal de distribuição.
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
                            Do Ceará para todo o Nordeste, ampliamos nossa atuação de forma estratégica para conectar marcas, produtos e negócios, 
                            construindo uma rede de distribuição cada vez mais ampla e eficiente.
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
                            Mais do que distribuir produtos, buscamos construir relações de confiança, 
                            oferecendo atendimento próximo, organização e uma logística eficiente para que nossos clientes tenham mais segurança e previsibilidade em seus negócios.
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
                        onClick={() => navigate("/sobre-nos")}
                    />
                </motion.div>

            </div>

        </section>
    );
};