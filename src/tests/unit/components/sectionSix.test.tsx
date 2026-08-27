import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter, useLocation } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

import { SectionSix } from "../../../presentation/components/sections/sectionSix/sectionSix.component";
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


    /*
    ==================================================
    MOCK ESPECÍFICO PARA BUTTON

    O componente SectionSix utiliza:

        <motion.button>

    Portanto precisamos preservar o elemento
    HTML <button> no mock.

    Caso contrário o teste encontraria uma <div>
    em vez de um elemento com role="button".
    ==================================================
    */

    const MotionButton = ({
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
            <button {...filteredProps}>
                {children}
            </button>
        );
    };


    return {
        motion: {
            div: MotionComponent,
            button: MotionButton,
        },

        AnimatePresence: ({
            children,
        }: React.PropsWithChildren) => (
            <>{children}</>
        ),
    };

});


/* ==================================================
   COMPONENTE AUXILIAR
   PARA TESTAR NAVEGAÇÃO
================================================== */

const LocationDisplay = () => {

    const location = useLocation();

    return (
        <span data-testid="location">
            {location.pathname}
        </span>
    );

};


describe("SectionSix", () => {

    const renderSectionSix = () => {

        return render(
            <MemoryRouter initialEntries={["/"]}>

                <SectionSix />

                <LocationDisplay />

            </MemoryRouter>
        );

    };


    /* ==================================================
       RENDERIZAÇÃO DA SEÇÃO
    ================================================== */

    it("deve renderizar a seção corretamente", () => {

        renderSectionSix();

        const section = document.querySelector(
            ".sectionSix"
        );

        expect(section).toBeInTheDocument();

    });


    /* ==================================================
       OVERLAY
    ================================================== */

    it("deve renderizar o overlay da seção", () => {

        renderSectionSix();

        const overlay = document.querySelector(
            ".sectionSixOverlay"
        );

        expect(overlay).toBeInTheDocument();

    });


    /* ==================================================
       CONTAINER
    ================================================== */

    it("deve renderizar o container principal corretamente", () => {

        renderSectionSix();

        const container = document.querySelector(
            ".sectionSixContainer"
        );

        expect(container).toBeInTheDocument();

    });


    /* ==================================================
       CONTEÚDO
    ================================================== */

    it("deve renderizar o conteúdo da seção", () => {

        renderSectionSix();

        const content = document.querySelector(
            ".sectionSixContent"
        );

        expect(content).toBeInTheDocument();

    });


    /* ==================================================
       TÍTULO
    ================================================== */

    it("deve renderizar o título corretamente", () => {

        renderSectionSix();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: /FAÇA PARTE DESSA HISTÓRIA\.\s*SEJA JWC LOG\./i,
            })
        ).toBeInTheDocument();

    });


    /* ==================================================
       TEXTO DO TÍTULO
    ================================================== */

    it("deve renderizar o texto completo do título", () => {

        renderSectionSix();

        const title = screen.getByRole("heading", {
            level: 2,
        });

        expect(title).toHaveTextContent(
            "FAÇA PARTE DESSA HISTÓRIA."
        );

        expect(title).toHaveTextContent(
            "SEJA JWC LOG."
        );

    });


    /* ==================================================
       CLASSE DO TÍTULO
    ================================================== */

    it("deve aplicar a classe correta ao título", () => {

        renderSectionSix();

        const title = screen.getByRole("heading", {
            level: 2,
        });

        expect(title).toHaveClass(
            "sectionSixTitle"
        );

    });


    /* ==================================================
       BOTÃO
    ================================================== */

    it("deve renderizar o botão FALE CONOSCO", () => {

        renderSectionSix();

        const button = screen.getByRole("button", {
            name: "FALE CONOSCO",
        });

        expect(button).toBeInTheDocument();

    });


    /* ==================================================
       CLASSE DO BOTÃO
    ================================================== */

    it("deve aplicar a classe correta ao botão", () => {

        renderSectionSix();

        const button = screen.getByRole("button", {
            name: "FALE CONOSCO",
        });

        expect(button).toHaveClass(
            "sectionSixButton"
        );

    });


    /* ==================================================
       QUANTIDADE DE BOTÕES
    ================================================== */

    it("deve renderizar exatamente um botão", () => {

        renderSectionSix();

        const buttons = screen.getAllByRole("button");

        expect(buttons).toHaveLength(1);

    });


    /* ==================================================
       BACKGROUND
    ================================================== */

    it("deve aplicar uma imagem de background na seção", () => {

        renderSectionSix();

        const section = document.querySelector(
            ".sectionSix"
        );

        expect(section).toBeInTheDocument();

        expect(
            section?.getAttribute("style")
        ).toContain("background-image");

    });


    /* ==================================================
       NAVEGAÇÃO
    ================================================== */

    it("deve navegar para a página de contato ao clicar no botão", async () => {

        const user = userEvent.setup();

        renderSectionSix();

        const button = screen.getByRole("button", {
            name: "FALE CONOSCO",
        });

        await user.click(button);

        expect(
            screen.getByTestId("location")
        ).toHaveTextContent("/contato");

    });

});