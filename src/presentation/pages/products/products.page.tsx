import "./products.style.scss";
import { motion } from "framer-motion";

// Animations
import {
    fadeLeft,
    fadeRight,
    staggerContainer,
    orderContent,
    orderButton,
} from "../../animations";

// Components
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { BrandProdutos } from "../../components/brandProducts/brandProducts.component";

// Buttons
import { ButtonWhatsApp } from "../../fragments/buttons/buttonWhatsApp/buttonWhatsApp.component";

//Database
import { produtosKipolpas }  from "../../../data/kipolpas";
import { produtosAmazon }  from "../../../data/amazon";
import { produtosPeterfrut } from "../../../data/peterfrut";
import { produtosPalamaz } from "../../../data/palamaz";
import { produtosPuroSabor } from "../../../data/puroSaber";

// Banner
import bannerProdutos from "../../../assets/images/Banners/filantropia-corporativa-apoia-os-esforcos-locais-do-banco-de-alimentos-para-aliviar-a-fome_38013-94227.avif";
import { SectionOne } from "../../components/sections/sectionOne/sectionOne.component";

export const ProdutosPage = () => {
    
    const phone = "5588988965616";

    const message =
        "Olá! Gostaria de conhecer as soluções da JWC Distribuição.";

    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <>

            {/* ==================================================
                HEADER
            ================================================== */}

            <Header />


            {/* ==================================================
                HERO
            ================================================== */}

            <motion.section
                id="marcas"
                className="produtosHero"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >

                <img
                    className="produtosHeroBackground"
                    src={bannerProdutos}
                    alt=""
                    aria-hidden="true"
                />

                <div className="produtosHeroOverlay" />

                <div className="produtosHeroContainer">

                    <div className="produtosHeroContent">

                        <motion.span
                            className="produtosHeroSubtitle"
                            variants={fadeLeft}
                        >
                            Nosso portfólio
                        </motion.span>


                        <motion.h1
                            className="produtosHeroTitle"
                            variants={fadeRight}
                        >
                            Produtos
                        </motion.h1>


                        <motion.p
                            className="produtosHeroDescription"
                            variants={fadeLeft}
                        >
                            Conheça as marcas e produtos que fazem parte
                            do portfólio da JWC Distribuição.
                        </motion.p>

                    </div>

                </div>

            </motion.section>

            <SectionOne/>

            {/* ==================================================
                KIPOLPAS
            ================================================== */}

            <BrandProdutos
                marca="Kipolpas"
                produtos={produtosKipolpas}
            />

            {/* ==================================================
                PURO SABOR
            ================================================== */}

            <BrandProdutos
                marca="Puro sabor"
                produtos={produtosPuroSabor.produtos}
            />

            {/* ==================================================
                AMAZON
            ================================================== */}

            <BrandProdutos
                marca="Amazon"
                produtos={produtosAmazon.produtos}
            />

            {/* ==================================================
                PETERFRUT
            ================================================== */}

            <BrandProdutos
                marca="Peterfrut"
                produtos={produtosPeterfrut.produtos}
            />

            {/* ==================================================
                PALAMAZ
            ================================================== */}

            <BrandProdutos
                marca="Palamaz"
                produtos={produtosPalamaz.produtos}
            />

            {/* ==================================================
                SECTION FAÇA SEU PEDIDO
            ================================================== */}

            <motion.section
                className="productsOrder"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
            >
                <div className="productsOrderContainer">

                    <motion.div
                        className="productsOrderContent"
                        variants={orderContent}
                    >

                        <motion.p
                            className="productsOrderText"
                            variants={fadeLeft}
                        >
                            Se interessou pelos produtos?
                        </motion.p>


                        <motion.button
                            type="button"
                            className="productsOrderButton"
                            variants={orderButton}
                            whileHover={{
                                y: -4,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            onClick={() => {
                                window.open(
                                    whatsappLink
                                );
                            }}
                        >
                            Faça seu pedido

                            <span className="productsOrderButtonArrow">
                                →
                            </span>

                        </motion.button>

                    </motion.div>

                </div>
            </motion.section>

            {/* ==================================================
                FOOTER
            ================================================== */}

            <Footer />


            {/* ==================================================
                WHATSAPP
            ================================================== */}

            <ButtonWhatsApp />

        </>
    );
};