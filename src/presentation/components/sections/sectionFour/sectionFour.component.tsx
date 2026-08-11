import "./sectionFour.style.scss";
import { motion, type Variants } from "framer-motion";

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

    const marqueeItems = Array(4)
        .fill(segmentos)
        .flat();

    const contentVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section className="containerSectionFour">
            <div className="containerSectionFourContent">
                <img
                    className="imageDistribuidora"
                    src={imagemDistribuidora}
                    alt="Centro de distribuição"
                />

                <motion.article
                    className="sectionFourContent"
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >
                    <motion.h1
                        className="sectionFourTitle"
                        variants={itemVariants}
                    >
                        Conectando produtos, negócios e oportunidades.
                    </motion.h1>

                    <motion.button
                        className="sectionFourButton"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Fale conosco
                    </motion.button>
                </motion.article>
            </div>

            <div className="containerMarquee">
                <div className="marquee">
                    {marqueeItems.map((item, index) => (
                        <span key={index}>
                            • {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};