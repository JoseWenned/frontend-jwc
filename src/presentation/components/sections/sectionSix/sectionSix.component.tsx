import "./sectionSix.style.scss";
import { motion } from "framer-motion";

// Animations
import {
    fadeLeft,
    fadeRight,
} from "../../../../presentation/animations";

// Imagens
import transportadora from "../../../../assets/images/Banners/melhores-transportadoras-para-ecommerce-.webp";


export const SectionSix = () => {

    return (
        <section
            className="sectionSix"
            style={{
                backgroundImage: `url(${transportadora})`,
            }}
        >

            <div className="sectionSixOverlay">

                <div className="sectionSixContainer">

                    {/* ==================================================
                        CONTEÚDO
                    ================================================== */}

                    <motion.div
                        className="sectionSixContent"
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                    >

                        <h2 className="sectionSixTitle">
                            FAÇA PARTE DESSA HISTÓRIA.
                            <br />
                            SEJA JWC LOG.
                        </h2>

                    </motion.div>


                    {/* ==================================================
                        BOTÃO
                    ================================================== */}

                    <motion.button
                        className="sectionSixButton"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                    >
                        FALE CONOSCO
                    </motion.button>

                </div>

            </div>

        </section>
    );
};