import "./mobileMenu.style.scss";

import { Link } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Images
import imagemSloganVermelhoePreto from "../../../assets/images/slogan/LogoHorizontal2@10x.png";


interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}


export const MobileMenu = ({
    isOpen,
    onClose
}: MobileMenuProps) => {

    if (!isOpen) return null;


    /* ===========================================================
       ANIMAÇÃO OVERLAY
    =========================================================== */

    const overlayVariants: Variants = {
        hidden: {
            opacity: 0,
        },

        visible: {
            opacity: 1,

            transition: {
                duration: 0.25,
                ease: "easeOut",
            },
        },

        exit: {
            opacity: 0,

            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    };


    /* ===========================================================
       ANIMAÇÃO DRAWER
    =========================================================== */

    const drawerVariants: Variants = {
        hidden: {
            x: "100%",
        },

        visible: {
            x: 0,

            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            },
        },

        exit: {
            x: "100%",

            transition: {
                duration: 0.3,
                ease: [0.4, 0, 1, 1],
            },
        },
    };


    return (
        <AnimatePresence>

            {isOpen && (

                <div className="mobileMenu">

                    {/* ==================================================
                        OVERLAY
                    ================================================== */}

                    <motion.div
                        className="mobileMenu__overlay"

                        variants={overlayVariants}

                        initial="hidden"
                        animate="visible"
                        exit="exit"

                        onClick={onClose}
                    />


                    {/* ==================================================
                        MENU
                    ================================================== */}

                    <motion.aside
                        className="mobileMenu__content"

                        variants={drawerVariants}

                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >

                        {/* ==================================================
                            BOTÃO FECHAR
                        ================================================== */}

                        <button
                            className="mobileMenu__close"
                            onClick={onClose}
                            aria-label="Fechar menu"
                        >
                            ✕
                        </button>


                        {/* ==================================================
                            LOGO
                        ================================================== */}

                        <motion.div
                            className="mobileMenu__brand"

                            initial={{
                                opacity: 0,
                                y: -15,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                            }}

                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                        >

                            <img
                                className="mobileMenu__brandImage"
                                src={imagemSloganVermelhoePreto}
                                alt="JWC Distribuição e Logística"
                            />
                            <span>DISTRIBUIÇÃO & LOGÍSTICA</span>
                        </motion.div>


                        {/* ==================================================
                            NAVEGAÇÃO
                        ================================================== */}

                        <nav className="mobileMenu__navigation">

                            <Link
                                to="/"
                                onClick={onClose}
                            >
                                Início
                            </Link>

                            <Link
                                to="/sobre-nos"
                                onClick={onClose}
                            >
                                Sobre nós
                            </Link>

                            <Link
                                to="/produtos"
                                onClick={onClose}
                            >
                                Produtos
                            </Link>

                            <Link
                                to="/contato"
                                onClick={onClose}
                            >
                                Contato
                            </Link>

                        </nav>


                        {/* ==================================================
                            REDES SOCIAIS
                        ================================================== */}

                        <div className="mobileMenu__social">

                            <a
                                href="#"
                                onClick={onClose}
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                onClick={onClose}
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                onClick={onClose}
                            >
                                LinkedIn
                            </a>

                        </div>


                        {/* ==================================================
                            FOOTER
                        ================================================== */}

                        <footer className="mobileMenu__footer">

                            © 2026 JWC Distribuição & Logística

                        </footer>

                    </motion.aside>

                </div>

            )}

        </AnimatePresence>
    );
};