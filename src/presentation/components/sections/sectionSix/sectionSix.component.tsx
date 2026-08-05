import "./sectionSix.style.scss";
import { motion, type Variants } from "framer-motion";

//Imagens
import transportadora from "../../../../assets/images/Banners/melhores-transportadoras-para-ecommerce-.webp";

export const SectionSix = () => {
    const fadeLeft: Variants = {
        hidden: {
            opacity: 0,
            x: -80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const fadeRight: Variants = {
        hidden: {
            opacity: 0,
            x: 80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
            },
        },
    };

    return(
        <section
            className="sectionSix"
            style={{ backgroundImage: `url(${transportadora})` }}
        >
            <div className="sectionSixOverlay">
                <div className="sectionSixContainer">
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
                            SEJA JWC DISTRIBUIÇÃO.
                        </h2>
                    </motion.div>

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
    )
}