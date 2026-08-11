import "./sectionThree.style.scss";
import { motion, type Variants } from "framer-motion";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

//Imagens icons
// import iconMissao from '../../../../assets/images/icons/icons8-troféu-30.svg';
// import iconVisao from '../../../../assets/images/icons/icons8-olho-30.svg';
// import iconValores from '../../../../assets/images/icons/icons8-estrela-30.svg';
import iconMapa from '../../../../assets/images/icons/ChatGPT_Image_24_de_jul._de_2026__23_58_59-removebg-preview.png';


export const SectionThree = () => {
    //Animacão com frame motion
    
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

    const mapVariants: Variants = {
        hidden: {
            opacity: 0,
            x: 80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
            },
        },
    };
    return (
        <section className="containerSectionThree">
            <div className="containerSectionThreeContent">
                <div className="containerSectionThreeContentArticles">
                    <motion.article
                        className="articleSectionThree"
                        variants={cardVariants}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                    >
                        <div className="containerSectionThreeContentArticlesTitle">
                            <FaBullseye className="iconSectionThree"/>
                            <h2 className="titleSectionThree">MISSÃO</h2>   
                        </div>
                        <p className="textSectionThree">Distribuir produtos de qualidade com eficiência logística, fortalecendo parcerias comerciais e contribuindo para o desenvolvimento econômico.</p>
                    </motion.article>
                    <motion.article
                        className="articleSectionThree"
                        variants={cardVariants}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                    >
                        <div className="containerSectionThreeContentArticlesTitle">
                            <FaEye className="iconSectionThree"/>
                            <h2 className="titleSectionThree">VISÃO</h2>
                        </div>
                        <p className="textSectionThree">Ser reconhecida como uma das principais distribuidoras da região Nordeste, destacando-se pela excelência operacional, confiança e compromisso com clientes, fornecedores e parceiros.</p>
                    </motion.article>
                    <motion.article
                        className="articleSectionThree"
                        variants={cardVariants}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                    >
                        <div className="containerSectionThreeContentArticlesTitle">
                            <FaHandshake className="iconSectionThree"/>
                            <h2 className="titleSectionThree">VALORES</h2>
                        </div>
                        <p className="textSectionThree">Trabalho, comprometimento, qualidade, sustentabilidade com ética e transparência.</p>
                    </motion.article>
                </div>
                
                <motion.div
                    className="containerSectionThreeContentMap"
                    variants={mapVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.4,
                    }}
                >
                    <img className="imgSectionThree" src={iconMapa} alt="icone mapa" />
                </motion.div>
            </div>
        </section>
    )
}