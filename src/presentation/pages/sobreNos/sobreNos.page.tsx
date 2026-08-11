import "./sobreNos.style.scss";
import { motion } from "framer-motion";

import {
    fadeLeft,
    fadeRight,
    fadeDown,
    staggerContainer,
    zoomIn,
    slide
} from "../../animations/index";

// Components
import { Footer } from "../../components/footer/footer.component";

// Icones
import iconArrow from "../../../assets/images/icons/icon-set-right.svg";
import iconArrowCircle from "../../../assets/images/icons/icon-seta-com-circulo.svg";

// Images
import BannerPrincipalSobreNos from "../../../assets/images/Banners/Transligue-Transporte-de-Cargas-Fracionadas.jpg";
import BannerComercial from "../../../assets/images/Banners/pessoas-de-negocios-apertando-as-maos-juntas_53876-13391.avif";
import BannerLogistica from "../../../assets/images/Banners/empresa-transporte-cargas_Para-otimizar-seus-servicos-a-empresa-de-transporte-de-cargas-deve-investir-em-planejamento-e-uma-logistica-eficiente.-1-scaled.jpeg";

import { ButtonWhatsApp } from "../../fragments/buttons/buttonWhatsApp/buttonWhatsApp.component";
import { Header } from "../../components/header/header.component";

export const SobreNosPage = () => {
    return (
        <>
            <Header/>
            {/* ==================================================
                HERO
            ================================================== */}
            <motion.section
                className="sobreNosHero"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <img
                    className="sobreNosHeroImage"
                    src={BannerPrincipalSobreNos}
                    alt="Banner Sobre Nós"
                />
                <div className="sobreNosHeroContent">
                    <motion.span
                        className="sobreNosHeroSubtitle"
                        variants={fadeLeft}
                    >
                        Confiança e Qualidade
                    </motion.span>

                    <motion.h1
                        className="sobreNosHeroTitle"
                        variants={fadeRight}
                    >
                        A JWC Distribuição & Logística
                    </motion.h1>
                </div>
            </motion.section>

            {/* ==================================================
                PRESENTATION
            ================================================== */}

            <motion.section
                className="sobreNosPresentation"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: .35,
                }}
            >
                <div className="sobreNosPresentationContainer">
                    <div className="sobreNosPresentationContent">
                        <motion.h2
                            className="sobreNosPresentationTitle"
                            variants={fadeDown}
                        >
                            Nossos clientes e parceiros em boas mãos
                        </motion.h2>

                        <motion.p
                            className="sobreNosPresentationDescription"
                            variants={fadeLeft}
                        >
                            Na JWC Distribuição & Logística, acreditamos que confiança é o principal
                            ingrediente de uma parceria duradoura. Atuamos conectando marcas,
                            fornecedores e estabelecimentos comerciais com soluções completas em
                            distribuição de alimentos congelados, oferecendo eficiência logística,
                            atendimento próximo e compromisso com a qualidade em cada entrega.
                            Trabalhamos diariamente para que nossos parceiros possam focar no
                            crescimento de seus negócios, enquanto nós cuidamos da distribuição
                            com responsabilidade, segurança e excelência.
                        </motion.p>

                        <motion.button
                            className="sobreNosPresentationButton"
                            variants={zoomIn}
                            whileTap={{
                                scale: .95,
                            }}
                        >
                            <span className="sobreNosPresentationButtonText">
                                Conecte-se com a JWC no LinkedIn
                            </span>
                            <span className="sobreNosPresentationButtonIcon">
                                <img
                                    className="sobreNosPresentationButtonArrow"
                                    src={iconArrow}
                                    alt=""
                                />
                                <img
                                    className="sobreNosPresentationButtonCircle"
                                    src={iconArrowCircle}
                                    alt=""
                                />
                            </span>
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="comercialSection"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: .3,
                }}
            >

                {/* ==================================================
                    BANNER
                ================================================== */}

                <div className="comercialBanner">

                    <img
                        className="comercialBannerImage"
                        src={BannerComercial}
                        alt="Comercial JWC"
                    />

                    <div className="comercialBannerOverlay" />

                    <motion.h2
                        className="comercialBannerTitle"
                        variants={slide}
                    >
                        Comercial
                    </motion.h2>

                </div>


                {/* ==================================================
                    CONTEÚDO
                ================================================== */}

                <div className="comercialContainer">

                    <div className="comercialContent">

                        <motion.h3
                            className="comercialContentTitle"
                            variants={fadeDown}
                        >
                            Conectando negócios e oportunidades
                        </motion.h3>

                        <motion.p
                            className="comercialContentDescription"
                            variants={fadeLeft}
                        >
                            O comercial da JWC Distribuição & Logística atua próximo aos
                            nossos clientes e parceiros, buscando compreender suas
                            necessidades e oferecer soluções que contribuam para o
                            crescimento de seus negócios. Trabalhamos para construir
                            relacionamentos duradouros, conectando estabelecimentos,
                            fornecedores e marcas através de um atendimento próximo,
                            eficiente e comprometido com resultados.
                        </motion.p>

                        <motion.button
                            className="comercialContentButton"
                            variants={zoomIn}
                            whileTap={{
                                scale: .95,
                            }}
                        >
                            <span className="comercialContentButtonText">
                                Conheça os parceiros JWC
                            </span>

                            <span className="comercialContentButtonIcon">

                                <img
                                    className="comercialContentButtonArrow"
                                    src={iconArrow}
                                    alt=""
                                />

                                <img
                                    className="comercialContentButtonCircle"
                                    src={iconArrowCircle}
                                    alt=""
                                />

                            </span>
                        </motion.button>
                    </div>
                </div>
            </motion.section>
            <motion.section
                className="operacaoSection"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: .3,
                }}
            >

                {/* ==================================================
                    BANNER
                ================================================== */}

                <div className="operacaoBanner">

                    <img
                        className="operacaoBannerImage"
                        src={BannerLogistica}
                        alt="Operação e Logística JWC"
                    />

                    <div className="operacaoBannerOverlay" />

                    <motion.h2
                        className="operacaoBannerTitle"
                        variants={zoomIn}
                    >
                        Operação e Logística
                    </motion.h2>

                </div>


                {/* ==================================================
                    CONTEÚDO
                ================================================== */}

                <div className="operacaoContainer">

                    <div className="operacaoContent">

                        <motion.h3
                            className="operacaoContentTitle"
                            variants={fadeDown}
                        >
                            Eficiência em cada etapa da operação
                        </motion.h3>

                        <motion.p
                            className="operacaoContentDescription"
                            variants={fadeLeft}
                        >
                            Na JWC Distribuição & Logística, nossa operação é estruturada
                            para garantir que cada etapa do processo aconteça de forma
                            eficiente, organizada e segura. Trabalhamos para conectar
                            fornecedores e clientes com uma logística eficiente,
                            garantindo o cuidado com os produtos, a agilidade nas entregas
                            e a confiabilidade necessária para que nossos parceiros possam
                            contar com a JWC em todos os momentos.
                        </motion.p>

                        <motion.button
                            className="operacaoContentButton"
                            variants={zoomIn}
                            whileTap={{
                                scale: .95,
                            }}
                        >

                            <span className="operacaoContentButtonText">
                                Fale com a JWC
                            </span>

                            <span className="operacaoContentButtonIcon">

                                <img
                                    className="operacaoContentButtonArrow"
                                    src={iconArrow}
                                    alt=""
                                />

                                <img
                                    className="operacaoContentButtonCircle"
                                    src={iconArrowCircle}
                                    alt=""
                                />

                            </span>

                        </motion.button>

                    </div>

                </div>

            </motion.section>
            <Footer />
            <ButtonWhatsApp />
        </>
    );
};