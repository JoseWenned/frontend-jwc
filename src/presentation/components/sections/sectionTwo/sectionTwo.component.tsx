import "./sectionTwo.style.scss";
import { motion, type Variants } from "framer-motion";

//Fragements
import { ButtonSaibaMais } from "../../../fragments/buttons/buttonSaibaMais/buttonSaibaMais.fragments";

//Imagens
import iconParceria from "../../../../assets/images/icons/icon-parceira.png"
import iconDiamante from "../../../../assets/images/icons/icon-diamante.png"
import iconTruck from "../../../../assets/images/icons/icons8-em-trânsito-50.svg"

export const SectionTwo = () => {
    const titleVariants: Variants = {
        hidden: {
            opacity: 0,
            y: -40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: index * 0.2,
            },
        }),
    };

    const buttonVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.6,
            },
        },
    };
    return(
        <section className="containerParceiroIdeal">
            <div className="containerParceiroIdealContent">
                <motion.h2
                    className="titleParceiro"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >
                    PORQUE A JWC É SEU PARCEIRO E DISTRIBUIDOR IDEAL?
                </motion.h2>

                <div className="containerParceiroIdealContentArticles">
                    <motion.article
                        className="articleParceiroIdeal"
                        variants={cardVariants}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                    >
                        <div className="containerIconParceiroIdeal">
                            <img className="icons" src={iconParceria} alt="icone parceiros comerciais" />
                        </div>
                        <h3 className="titlecomercial">PARCEIROS COMERCIAIS</h3>
                        <p className="descriptioncomercial">trabalha inicialmente com a distribuição dos produtos Kipolpas, Amazon Açaí e Peter Frut, oferecendo ao mercado uma linha completa de polpas, açaí, frutas congeladas com elevado padrão de qualidade e excelente aceitação pelos consumidores.</p>
                    </motion.article>
                    <motion.article
                        className="articleParceiroIdeal"
                        variants={cardVariants}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                    >
                        <div className="containerIconParceiroIdeal">
                            <img className="icons" src={iconTruck} alt="icone área de atuação" />
                        </div>
                        <h3 className="titlecomercial">ÁREA DE ATUAÇÃO</h3>
                        <p className="descriptioncomercial">Atendimento inicial na região do Vale do Jaguaribe, Oeste Potiguar e cidades estratégicas do Ceará e Rio Grande do Norte, com expansão gradual conforme o crescimento das operações.</p>
                    </motion.article>
                    <motion.article
                        className="articleParceiroIdeal"
                        variants={cardVariants}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                    >
                        <div className="containerIconParceiroIdeal">
                                <img className="icons" src={iconDiamante} alt="icone experiência e excelência" />
                        </div>
                        <h3 className="titlecomercial">COMPROMISSO COM NOSSOS CLIENTES</h3>
                        <p className="descriptioncomercial">Nosso compromisso é oferecer produtos de qualidade, atendimento ágil, logística confiável e condições comerciais que contribuam para o sucesso dos nossos parceiros.</p>
                    </motion.article> 
                </div>
                <motion.div
                    variants={buttonVariants}
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
    )
}