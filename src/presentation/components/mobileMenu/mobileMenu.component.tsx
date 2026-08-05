import "./mobileMenu.style.scss";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu = ({
    isOpen,
    onClose
}: MobileMenuProps) => {
    if (!isOpen) return null;

    //Animação do menu mobile
    const overlayVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    };

    const drawerVariants = {
        hidden: {
            x: "100%",
        },
        visible: {
            x: 0,
        },
        exit: {
            x: "100%",
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="mobileMenu">
                    <motion.div
                        className="mobileMenu__overlay"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: .25 }}
                        onClick={onClose}
                    />
                    <motion.aside
                        className="mobileMenu__content"
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                            duration: .35,
                            ease: "easeInOut",
                        }}
                    >

                        <button
                            className="mobileMenu__close"
                            onClick={onClose}
                        >
                            ✕
                        </button>

                        {/* ===========================================================
                        Logo
                        =========================================================== */}

                        <div className="mobileMenu__brand">
                            <h2>JWC</h2>
                            <span>
                                Distribuição & Logística
                            </span>
                        </div>

                        {/* ===========================================================
                        Navegação
                        =========================================================== */}

                        <nav className="mobileMenu__navigation">
                            <Link to="#">Início</Link>
                            <Link to="#">Sobre nós</Link>
                            <Link to="#">Vantagens</Link>
                            <Link to="#">Produtos</Link>
                            <Link to="#">Como funciona</Link>
                            <Link to="#">Contato</Link>
                        </nav>

                        {/* ===========================================================
                        Redes Sociais
                        =========================================================== */}

                        <div className="mobileMenu__social">
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                        </div>

                        {/* ===========================================================
                        Footer
                        =========================================================== */}

                        <footer className="mobileMenu__footer">
                            © 2026 JWC Distribuição & Logística
                        </footer>
                    </motion.aside>
                </div>
            )}
        </AnimatePresence>
    );
};