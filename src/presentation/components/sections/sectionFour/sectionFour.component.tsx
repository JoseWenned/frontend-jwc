import "./sectionFour.style.scss";
import { motion } from "framer-motion";

// Animations
import {
    staggerContainer,
    fadeDown,
    zoomIn,
    orderButton,
} from "../../../../presentation/animations";

// Imagens
import imagemDistribuidora from "../../../../assets/images/Banners/filantropia-corporativa-apoia-os-esforcos-locais-do-banco-de-alimentos-para-aliviar-a-fome_38013-94227.avif";

export const SectionFour = () => {

    const segmentos = [
        "DISTRIBUIDORES",
        "AUTO SERVIÇO",
        "VAREJO",
        "FOOD SERVICE",
        "ATACADO",
    ];

    /*
    ==========================================================
    MARQUEE

    Criamos uma sequência maior que a largura da tela.
    Essa sequência será duplicada no JSX.

    Dessa forma:

    GRUPO 01 → sequência completa
    GRUPO 02 → sequência completa

    Quando o grupo 01 termina, o grupo 02 já está
    exatamente na mesma sequência, criando o efeito
    de movimento infinito.
    ==========================================================
    */

    const marqueeGroup = Array(3)
        .fill(segmentos)
        .flat();

    return (
        <section className="containerSectionFour">

            {/* ==================================================
                BANNER
            ================================================== */}

            <div className="containerSectionFourContent">

                <img
                    className="imageDistribuidora"
                    src={imagemDistribuidora}
                    alt="Centro de distribuição"
                />

                <motion.article
                    className="sectionFourContent"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >

                    <motion.span
                        className="sectionFourEyebrow"
                        variants={fadeDown}
                    >
                        JWC DISTRIBUIÇÃO & LOGÍSTICA
                    </motion.span>

                    <motion.h2
                        className="sectionFourTitle"
                        variants={zoomIn}
                    >
                        Conectando produtos,
                        <strong> negócios e oportunidades.</strong>
                    </motion.h2>

                    <motion.button
                        className="sectionFourButton"
                        variants={orderButton}
                        whileHover={{
                            scale: 1.04,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                    >
                        Fale conosco
                    </motion.button>

                </motion.article>

            </div>


            {/* ==================================================
                MARQUEE
            ================================================== */}

            <div className="containerMarquee">

                <div className="marquee">

                    {/* ==================================================
                        GRUPO 01
                    ================================================== */}

                    <div className="marqueeGroup">

                        {marqueeGroup.map((item, index) => (

                            <span
                                key={`marquee-one-${index}`}
                                className="marqueeItem"
                            >
                                <small>•</small>

                                {item}
                            </span>

                        ))}

                    </div>


                    {/* ==================================================
                        GRUPO 02
                    ================================================== */}

                    <div
                        className="marqueeGroup"
                        aria-hidden="true"
                    >

                        {marqueeGroup.map((item, index) => (

                            <span
                                key={`marquee-two-${index}`}
                                className="marqueeItem"
                            >
                                <small>•</small>

                                {item}
                            </span>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};