import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {

    const { pathname, hash } = useLocation();

    useEffect(() => {

        // ==================================================
        // SEM HASH
        // Vai para o topo da página
        // ==================================================

        if (!hash) {

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });

            return;
        }


        // ==================================================
        // COM HASH
        // Aguarda a página renderizar e procura a seção
        // ==================================================

        const scrollToSection = () => {

            const element = document.getElementById(
                hash.replace("#", "")
            );

            if (!element) {
                return;
            }

            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };


        // Pequeno delay para garantir que a página
        // e os componentes já tenham sido renderizados.

        const timeout = setTimeout(() => {
            scrollToSection();
        }, 100);


        return () => {
            clearTimeout(timeout);
        };

    }, [pathname, hash]);


    return null;
};