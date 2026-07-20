import "./header.style.scss"
import { Navigation } from "../navigation/navigation.component"
import { useEffect, useState } from "react";

//Images
import facebookIconWhite from "../../../assets/images/icons/iconFacebookWhite.png";
import facebookIconGray from "../../../assets/images/icons/iconFacebookGray.png";
import linkedinIconWhite from "../../../assets/images/icons/iconLinkedinWhite.png";
import linkedinIconGray from "../../../assets/images/icons/iconLinkedinGray.png";
import instagramIconWhite from "../../../assets/images/icons/iconInstagramWhite.png";
import instagramIconGray from "../../../assets/images/icons/iconInstagramGray.png";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

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
                    <Navigation/>

                    <ul className="containerHeader__content__socialMedia">
                        <li><a href="#"><img className="iconFacebook" src={scrolled ? facebookIconGray : facebookIconWhite} alt="Facebook" /></a></li>
                        <li><a href="#"><img className="icon" src={scrolled ? linkedinIconGray : linkedinIconWhite} alt="LinkedIn" /></a></li>
                        <li><a href="#"><img className="icon" src={scrolled ? instagramIconGray : instagramIconWhite} alt="Instagram" /></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}