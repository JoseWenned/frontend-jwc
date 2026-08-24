import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SectionThree } from "./sectionThree.component";


/* ==================================================
   MOCK FRAMER MOTION
================================================== */

vi.mock("framer-motion", () => {

    const MotionDiv = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        const filteredProps = Object.fromEntries(
            Object.entries(props).filter(
                ([key]) =>
                    ![
                        "variants",
                        "initial",
                        "animate",
                        "whileInView",
                        "viewport",
                        "whileHover",
                        "whileTap",
                        "transition",
                    ].includes(key)
            )
        );

        return (
            <div {...filteredProps}>
                {children}
            </div>
        );
    };


    const MotionArticle = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        const filteredProps = Object.fromEntries(
            Object.entries(props).filter(
                ([key]) =>
                    ![
                        "variants",
                        "initial",
                        "animate",
                        "whileInView",
                        "viewport",
                        "whileHover",
                        "whileTap",
                        "transition",
                    ].includes(key)
            )
        );

        return (
            <article {...filteredProps}>
                {children}
            </article>
        );
    };


    return {
        motion: {
            div: MotionDiv,
            article: MotionArticle,
        },

        AnimatePresence: ({
            children,
        }: React.PropsWithChildren) => (
            <>{children}</>
        ),
    };

});


describe("SectionThree", () => {

    const renderSectionThree = () => {

        return render(
            <SectionThree />
        );

    };


    /* ==================================================
       RENDERIZAÇÃO DA SEÇÃO
    ================================================== */

    it("deve renderizar a seção corretamente", () => {

        renderSectionThree();

        const section = document.querySelector(
            ".containerSectionThree"
        );

        expect(section).toBeInTheDocument();

    });


    /* ==================================================
       CONTAINER PRINCIPAL
    ================================================== */

    it("deve renderizar o container principal da seção", () => {

        renderSectionThree();

        const container = document.querySelector(
            ".containerSectionThreeContent"
        );

        expect(container).toBeInTheDocument();

    });


    /* ==================================================
       MISSÃO
    ================================================== */

    it("deve renderizar o artigo de Missão corretamente", () => {

        renderSectionThree();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "MISSÃO",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /Conectar marcas e produtos aos mercados com eficiência, organização e confiança/i
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       VISÃO
    ================================================== */

    it("deve renderizar o artigo de Visão corretamente", () => {

        renderSectionThree();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "VISÃO",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /Ser referência em distribuição e logística no Nordeste/i
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       VALORES
    ================================================== */

    it("deve renderizar o artigo de Valores corretamente", () => {

        renderSectionThree();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "VALORES",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /Atuamos com confiança, comprometimento, ética, transparência, excelência e espírito de parceria/i
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       QUANTIDADE DE ARTIGOS
    ================================================== */

    it("deve renderizar exatamente três artigos", () => {

        renderSectionThree();

        const articles = document.querySelectorAll(
            ".articleSectionThree"
        );

        expect(articles).toHaveLength(3);

    });


    /* ==================================================
       TÍTULOS DOS ARTIGOS
    ================================================== */

    it("deve renderizar exatamente três títulos", () => {

        renderSectionThree();

        const titles = screen.getAllByRole(
            "heading",
            {
                level: 2,
            }
        );

        expect(titles).toHaveLength(3);

    });


    /* ==================================================
       ÍCONE DA MISSÃO
    ================================================== */

    it("deve renderizar o ícone da Missão", () => {

        renderSectionThree();

        const mission = screen.getByRole(
            "heading",
            {
                level: 2,
                name: "MISSÃO",
            }
        );

        const article = mission.closest(
            ".articleSectionThree"
        );

        expect(article).toBeInTheDocument();

        const icon = article?.querySelector(
            ".iconSectionThree"
        );

        expect(icon).toBeInTheDocument();

    });


    /* ==================================================
       ÍCONES
    ================================================== */

    it("deve renderizar exatamente três ícones", () => {

        renderSectionThree();

        const icons = document.querySelectorAll(
            ".iconSectionThree"
        );

        expect(icons).toHaveLength(3);

    });


    /* ==================================================
       CLASSE DOS ÍCONES
    ================================================== */

    it("deve aplicar a classe correta aos ícones", () => {

        renderSectionThree();

        const icons = document.querySelectorAll(
            ".iconSectionThree"
        );

        expect(icons).toHaveLength(3);

        icons.forEach((icon) => {

            expect(icon).toHaveClass(
                "iconSectionThree"
            );

        });

    });


    /* ==================================================
       TEXTOS
    ================================================== */

    it("deve renderizar exatamente três textos de conteúdo", () => {

        renderSectionThree();

        const texts = document.querySelectorAll(
            ".textSectionThree"
        );

        expect(texts).toHaveLength(3);

    });


    /* ==================================================
       CLASSE DOS TÍTULOS
    ================================================== */

    it("deve aplicar a classe correta aos títulos", () => {

        renderSectionThree();

        const titles = document.querySelectorAll(
            ".titleSectionThree"
        );

        expect(titles).toHaveLength(3);

        titles.forEach((title) => {

            expect(title).toHaveClass(
                "titleSectionThree"
            );

        });

    });


    /* ==================================================
       MAPA
    ================================================== */

    it("deve renderizar o mapa corretamente", () => {

        renderSectionThree();

        const map = screen.getByRole("img", {
            name: "Mapa representando a área de atuação da JWC",
        });

        expect(map).toBeInTheDocument();

    });


    /* ==================================================
       CLASSE DO MAPA
    ================================================== */

    it("deve aplicar a classe correta ao mapa", () => {

        renderSectionThree();

        const map = screen.getByRole("img", {
            name: "Mapa representando a área de atuação da JWC",
        });

        expect(map).toHaveClass(
            "imgSectionThree"
        );

    });


    /* ==================================================
       CONTAINER DO MAPA
    ================================================== */

    it("deve renderizar o container do mapa", () => {

        renderSectionThree();

        const mapContainer = document.querySelector(
            ".containerSectionThreeContentMap"
        );

        expect(mapContainer).toBeInTheDocument();

    });


    /* ==================================================
       QUANTIDADE DE IMAGENS
    ================================================== */

    it("deve renderizar exatamente uma imagem", () => {

        renderSectionThree();

        const images = screen.getAllByRole("img");

        expect(images).toHaveLength(1);

    });


    /* ==================================================
       ALT DA IMAGEM
    ================================================== */

    it("deve possuir o texto alternativo correto no mapa", () => {

        renderSectionThree();

        expect(
            screen.getByAltText(
                "Mapa representando a área de atuação da JWC"
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       ESTRUTURA DOS ARTIGOS
    ================================================== */

    it("deve possuir título e texto em cada artigo", () => {

        renderSectionThree();

        const articles = document.querySelectorAll(
            ".articleSectionThree"
        );

        expect(articles).toHaveLength(3);

        articles.forEach((article) => {

            const title = article.querySelector(
                ".titleSectionThree"
            );

            const text = article.querySelector(
                ".textSectionThree"
            );

            expect(title).toBeInTheDocument();

            expect(text).toBeInTheDocument();

        });

    });

});