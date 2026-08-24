import "./sobreNos.style.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    
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
                        Distribuição que conecta negócios
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
                                Conheça a JWC no LinkedIn
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
                id="comercial"
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
                            Nossa atuação comercial vai além da venda de produtos. 
                            Buscamos entender as necessidades de cada cliente, 
                            identificar oportunidades e construir relações que façam sentido para todos os envolvidos.
                            Trabalhamos próximos aos nossos clientes, fornecedores e parceiros para conectar produtos aos mercados certos, 
                            criando oportunidades comerciais e contribuindo para o crescimento sustentável de toda a cadeia.
                        </motion.p>

                        <motion.button
                            className="comercialContentButton"
                            variants={zoomIn}
                            whileTap={{
                                scale: .95,
                            }}
                            onClick={() => navigate("/produtos#marcas")}
                        >
                            <span className="comercialContentButtonText">
                                Conheça nossas marcas e parceiros
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
                id="operacaoelogistica"
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
                            Nossa operação é estruturada para que produtos e pedidos avancem de forma organizada, segura e eficiente. 
                            Do planejamento à entrega, buscamos manter controle sobre cada etapa da distribuição, reduzindo imprevistos e oferecendo mais previsibilidade aos nossos parceiros.
                            Mais do que transportar produtos, trabalhamos para construir uma operação confiável, 
                            capaz de acompanhar o crescimento dos nossos clientes e ampliar gradualmente nossa atuação do Ceará para todo o Nordeste.
                        </motion.p>

                        <motion.button
                            className="operacaoContentButton"
                            variants={zoomIn}
                            whileTap={{
                                scale: .95,
                            }}
                            onClick={() => navigate("/contato")}
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