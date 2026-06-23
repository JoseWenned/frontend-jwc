import "./header.style.scss"
import { Navigation } from "../navigation/navigation.component"
import { useEffect, useState } from "react";

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
                <h1>JWC Distribuição & Logística</h1>
                <Navigation/>
                <button><img src="path/to/icon.png"/>Fale conosco</button>
            </section>
        </>
    )
}