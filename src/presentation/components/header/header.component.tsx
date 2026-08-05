import "./header.style.scss"
import { Navigation } from "../navigation/navigation.component"
import { useEffect, useState } from "react";

//Components
import { MobileMenu } from "../mobileMenu/mobileMenu.component";

//Icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";

//Images
import facebookIconGray from "../../../assets/images/icons/iconFacebookGray.png";
import linkedinIconGray from "../../../assets/images/icons/iconLinkedinGray.png";
import instagramIconGray from "../../../assets/images/icons/iconInstagramGray.png";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
            <section className={`containerHeader ${scrolled ? "scrolled" : ""}`}>
                <div className="containerHeader__content">
                    <h1>JWC</h1>
                    <div className="containerHeader__navigation">
                        <Navigation />
                    </div>
                    <button
                        className="containerHeader__menuButton"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Abrir menu"
                    >
                        <HiOutlineMenuAlt3 />
                    </button>
                    <ul className="containerHeader__content__socialMedia">
                        <li>
                            <a href="#" className="socialLink">
                                <img
                                    className="socialIcon socialIconFacebook"
                                    src={facebookIconGray}
                                    alt="Facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="socialLink">
                                <img
                                    className="socialIcon"
                                    src={linkedinIconGray}
                                    alt="LinkedIn"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="socialLink">
                                <img
                                    className="socialIcon"
                                    src={instagramIconGray}
                                    alt="Instagram"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <MobileMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    )
}