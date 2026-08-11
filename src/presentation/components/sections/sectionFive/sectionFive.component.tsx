
import "./sectionFive.style.scss";
import { Link } from "react-router-dom";

import iconArrowCircle from "../../../../assets/images/icons/icon-seta-com-circulo.svg";
import { motion, type Variants } from "framer-motion";

export const SectionFive = () => {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: .2,
            },
        },
    };

    const titleVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: .9,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: .8,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .7,
            },
        },
    };
    return (
        <motion.section
            className="containerSectionFive"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: .25,
            }}
        >
            <motion.div
                className="containerSectionFiveTitle"
                variants={titleVariants}
            >
                <h1 className="titleSectionFive">
                    Conheça soluções completas para sua rede
                </h1>
            </motion.div>
            <motion.article
                className="containerSectionFiveCards"
                variants={cardVariants}
            >
                <Link to="/comercial" className={`cardSectionFive `}>
                    <h3 className="titleCardSectionFive">
                        Comercial
                    </h3>
                    <p className="descriptionCardSectionFive">
                        Na JWC Distribuição & Logística, acreditamos que uma boa parceria começa muito antes da primeira venda...
                    </p>
                    <span>Saiba mais<img src={iconArrowCircle} alt="Saiba mais"/></span>
                </Link>
                <Link to="/logistica" className={`cardSectionFive`}>
                    <h3 className="titleCardSectionFive">
                        Logística
                    </h3>
                    <p className="descriptionCardSectionFive">
                        Nossa operação logística é planejada para garantir eficiência...
                    </p>
                    <span>Saiba mais<img src={iconArrowCircle       } alt="Saiba mais"/></span>                 
                </Link>
                <Link to="/merchandising" className={`cardSectionFive`}>
                    <h3 className="titleCardSectionFive">
                        Merchandising
                    </h3>
                    <p className="descriptionCardSectionFive">
                        Fortalecemos a presença das marcas no ponto de venda...
                    </p>
                    <span>Saiba mais<img src={iconArrowCircle} alt="Saiba mais"/></span>
                </Link>
            </motion.article>
        </motion.section>
    );
};
