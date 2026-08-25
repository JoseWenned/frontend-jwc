import "./header.style.scss";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animations
import {
    fadeDown,
    fadeLeft,
    staggerContainer,
} from "../../animations";

// Components
import { Navigation } from "../navigation/navigation.component";
import { MobileMenu } from "../mobileMenu/mobileMenu.component";

// Icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";

// Images
import facebookIconGray from "../../../assets/images/icons/iconFacebookGray.png";
import linkedinIconGray from "../../../assets/images/icons/iconLinkedinGray.png";
import instagramIconGray from "../../../assets/images/icons/iconInstagramGray.png";
import imagemSlogVermelhoeBranco from "../../../assets/images/slog/SloganVermelhoeBranco.png";
import imagemSlogVermelhaePreta from "../../../assets/images/slog/sloganVermelhaePreta.png";

export const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    /* ==================================================
       SCROLL
    ================================================== */

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    return (
        <>

            {/* ==================================================
                HEADER
            ================================================== */}

            <motion.section
                className={`containerHeader ${scrolled ? "scrolled" : ""}`}

                variants={staggerContainer}

                initial="hidden"

                animate="visible"
            >

                <div className="containerHeader__content">


                    {/* ==================================================
                        SLOGAN
                    ================================================== */}

                    <motion.div
                        className="containerHeader__slogan"
                        variants={fadeDown}
                    >

                        <img
                            src={scrolled ? imagemSlogVermelhaePreta : imagemSlogVermelhoeBranco}
                            alt="JWC Distribuição e Logística"
                        />

                    </motion.div>


                    {/* ==================================================
                        NAVEGAÇÃO
                    ================================================== */}

                    <motion.div
                        className="containerHeader__navigation"
                        variants={fadeDown}
                    >

                        <Navigation />

                    </motion.div>


                    {/* ==================================================
                        MENU MOBILE
                    ================================================== */}

                    <motion.button
                        className={`containerHeader__menuButton ${
                            scrolled ? "containerHeader__menuButtonScrolled" : ""
                        }`}

                        variants={fadeLeft}

                        onClick={() => setMenuOpen(true)}

                        aria-label="Abrir menu"
                    >
                        <HiOutlineMenuAlt3 />
                    </motion.button>


                    {/* ==================================================
                        REDES SOCIAIS
                    ================================================== */}

                    <motion.ul
                        className="containerHeader__content__socialMedia"

                        variants={fadeLeft}
                    >

                        <li>
                            <a
                                href="#"
                                className="socialLink"
                                aria-label="Facebook"
                            >
                                <img
                                    className="socialIcon socialIconFacebook"
                                    src={facebookIconGray}
                                    alt="Facebook"
                                />
                            </a>
                        </li>


                        <li>
                            <a
                                href="#"
                                className="socialLink"
                                aria-label="LinkedIn"
                            >
                                <img
                                    className="socialIcon"
                                    src={linkedinIconGray}
                                    alt="LinkedIn"
                                />
                            </a>
                        </li>


                        <li>
                            <a
                                href="https://www.instagram.com/jwc.log/"
                                target="_blank"
                                className="socialLink"
                                aria-label="Instagram"
                            >
                                <img
                                    className="socialIcon"
                                    src={instagramIconGray}
                                    alt="Instagram"
                                />
                            </a>
                        </li>

                    </motion.ul>

                </div>

            </motion.section>


            {/* ==================================================
                MOBILE MENU
            ================================================== */}

            <MobileMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />

        </>
    );
};