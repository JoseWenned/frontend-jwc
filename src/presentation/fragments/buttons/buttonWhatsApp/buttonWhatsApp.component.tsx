import "./buttonWhatsApp.style.scss";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export const ButtonWhatsApp = () => {
    const phone = "5588988965616";

    const message =
        "Olá! Gostaria de conhecer as soluções da JWC Distribuição.";

    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsappButton"
            initial={{
                opacity: 0,
                scale: 0,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: .5,
            }}
            whileHover={{
                scale: 1.1,
            }}
            whileTap={{
                scale: .95,
            }}
            aria-label="Fale conosco pelo WhatsApp"
        >
            <FaWhatsapp />
        </motion.a>
    );
};