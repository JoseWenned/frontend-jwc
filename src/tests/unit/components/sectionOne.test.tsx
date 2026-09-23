import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SectionOne } from "../../../presentation/components/sections/sectionOne/sectionOne.component";
import React from "react";


/* ==================================================
   MOCK FRAMER MOTION
================================================== */

vi.mock("framer-motion", () => {

    const MotionComponent = ({
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


    return {
        motion: {
            section: MotionComponent,
            div: MotionComponent,
        },

        AnimatePresence: ({
            children,
        }: React.PropsWithChildren) => (
            <>{children}</>
        ),
    };

});


describe("SectionOne", () => {

    const renderSectionOne = () => {

        return render(
            <SectionOne />
        );

    };


    /* ==================================================
       RENDERIZAÇÃO DA SEÇÃO
    ================================================== */

    it("deve renderizar a seção corretamente", () => {

        renderSectionOne();

        const section = document.querySelector(
            ".sectionOne"
        );

        expect(section).toBeInTheDocument();

    });


    /* ==================================================
       CONTAINER
    ================================================== */

    it("deve renderizar o container principal corretamente", () => {

        renderSectionOne();

        const container = document.querySelector(
            ".sectionOneContainer"
        );

        expect(container).toBeInTheDocument();

    });


    /* ==================================================
       LOGO KIPOLPAS
    ================================================== */

    it("deve renderizar o logo da Kipolpas corretamente", () => {

        renderSectionOne();

        const image = screen.getByAltText("Kipolpas");

        expect(image).toBeInTheDocument();

        expect(image).toHaveClass(
            "sectionOneImage"
        );

    });


    /* ==================================================
       LOGO PURO SABOR
    ================================================== */

    it("deve renderizar o logo da Puro Sabor corretamente", () => {

        renderSectionOne();

        const image = screen.getByAltText("Puro Sabor");

        expect(image).toBeInTheDocument();

        expect(image).toHaveClass(
            "sectionOneImage"
        );

    });


    /* ==================================================
       LOGO Bello Fruto
    ================================================== */

    it("deve renderizar o logo da Bello Fruto corretamente", () => {

        renderSectionOne();

        const image = screen.getByAltText("Bello Fruto");

        expect(image).toBeInTheDocument();

        expect(image).toHaveClass(
            "sectionOneImage"
        );

    });


    /* ==================================================
       LOGO PETER FRUT
    ================================================== */

    it("deve renderizar o logo da Peter Frut corretamente", () => {

        renderSectionOne();

        const image = screen.getByAltText("Peter Frut");

        expect(image).toBeInTheDocument();

        expect(image).toHaveClass(
            "sectionOneImage"
        );

    });

    /* ==================================================
       QUANTIDADE DE LOGOS
    ================================================== */

    it("deve renderizar exatamente quatro logos", () => {

        renderSectionOne();

        const images = screen.getAllByRole("img");

        expect(images).toHaveLength(4);

    });


    /* ==================================================
       CLASSE DOS LOGOS
    ================================================== */

    it("deve aplicar a classe sectionOneImage em todos os logos", () => {

        renderSectionOne();

        const images = screen.getAllByRole("img");

        expect(images).toHaveLength(4);

        images.forEach((image) => {

            expect(image).toHaveClass(
                "sectionOneImage"
            );

        });

    });


    /* ==================================================
       ALT TEXTS
    ================================================== */

    it("deve possuir os textos alternativos corretos em todos os logos", () => {

        renderSectionOne();

        expect(
            screen.getByAltText("Kipolpas")
        ).toBeInTheDocument();

        expect(
            screen.getByAltText("Puro Sabor")
        ).toBeInTheDocument();

        expect(
            screen.getByAltText("Bello Fruto")
        ).toBeInTheDocument();

        expect(
            screen.getByAltText("Peter Frut")
        ).toBeInTheDocument();

    });


    /* ==================================================
       CARDS / ITEMS
    ================================================== */

    it("deve renderizar exatamente quatro itens de marcas", () => {

        renderSectionOne();

        const items = document.querySelectorAll(
            ".sectionOneItem"
        );

        expect(items).toHaveLength(4);

    });


    /* ==================================================
       KIPOLPAS ITEM
    ================================================== */

    it("deve aplicar a classe correta ao item Kipolpas", () => {

        renderSectionOne();

        const item = document.querySelector(
            ".sectionOneItemKipolpas"
        );

        expect(item).toBeInTheDocument();

        expect(item).toHaveClass(
            "sectionOneItem"
        );

    });


    /* ==================================================
       PURO SABOR ITEM
    ================================================== */

    it("deve aplicar a classe correta ao item Puro Sabor", () => {

        renderSectionOne();

        const item = document.querySelector(
            ".sectionOneItemPuroSabor"
        );

        expect(item).toBeInTheDocument();

        expect(item).toHaveClass(
            "sectionOneItem"
        );

    });


    /* ==================================================
       AMAZON ITEM
    ================================================== */

    it("deve aplicar a classe correta ao item Bello Fruto", () => {

        renderSectionOne();

        const item = document.querySelector(
            ".sectionOneItemBelloFruto"
        );

        expect(item).toBeInTheDocument();

        expect(item).toHaveClass(
            "sectionOneItem"
        );

    });


    /* ==================================================
       PETER FRUT ITEM
    ================================================== */

    it("deve aplicar a classe correta ao item Peter Frut", () => {

        renderSectionOne();

        const item = document.querySelector(
            ".sectionOneItemPeterfrut"
        );

        expect(item).toBeInTheDocument();

        expect(item).toHaveClass(
            "sectionOneItem"
        );

    });

});