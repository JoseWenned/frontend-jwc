import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter, useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import { SectionTwo } from "../../../presentation/components/sections/sectionTwo/sectionTwo.component";
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


    const MotionHeading = ({
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
            <h2 {...filteredProps}>
                {children}
            </h2>
        );
    };


    return {
        motion: {
            section: MotionComponent,
            div: MotionComponent,
            article: MotionComponent,
            h2: MotionHeading,
        },

        AnimatePresence: ({
            children,
        }: React.PropsWithChildren) => (
            <>{children}</>
        ),
    };

});


/* ==================================================
   MOCK ÍCONES
================================================== */

vi.mock("react-icons/fa", () => ({

    FaHandshake: () => (
        <svg data-testid="icon-handshake" />
    ),

    FaTruck: () => (
        <svg data-testid="icon-truck" />
    ),

    FaAward: () => (
        <svg data-testid="icon-award" />
    ),

}));


/* ==================================================
   COMPONENTE AUXILIAR PARA TESTAR NAVEGAÇÃO
================================================== */

const LocationDisplay = () => {

    const location = useLocation();

    return (
        <span data-testid="location">
            {location.pathname}
        </span>
    );

};


/* ==================================================
   TESTES
================================================== */

describe("SectionTwo", () => {

    const renderSectionTwo = () => {

        return render(
            <MemoryRouter initialEntries={["/"]}>

                <SectionTwo />

                <LocationDisplay />

            </MemoryRouter>
        );

    };


    /* ==================================================
       TÍTULO PRINCIPAL
    ================================================== */

    it("deve renderizar o título principal corretamente", () => {

        renderSectionTwo();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "POR QUE A JWC É SEU PARCEIRO E DISTRIBUIDOR IDEAL?",
            })
        ).toBeInTheDocument();

    });


    /* ==================================================
       PARCEIROS COMERCIAIS
    ================================================== */

    it("deve renderizar o card Parceiros Comerciais corretamente", () => {

        renderSectionTwo();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "PARCEIROS COMERCIAIS",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /Trabalhamos com marcas selecionadas e produtos de qualidade/i
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /portfólio diversificado de polpas, açaí e frutas congeladas/i
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       ÁREA DE ATUAÇÃO
    ================================================== */

    it("deve renderizar o card Área de Atuação corretamente", () => {

        renderSectionTwo();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "ÁREA DE ATUAÇÃO",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /Do Ceará para todo o Nordeste/i
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /conectar marcas, produtos e negócios/i
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       COMPROMISSO COM CLIENTES
    ================================================== */

    it("deve renderizar o card Compromisso com Nossos Clientes corretamente", () => {

        renderSectionTwo();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "COMPROMISSO COM NOSSOS CLIENTES",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /Mais do que distribuir produtos, buscamos construir relações de confiança/i
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /atendimento próximo, organização e uma logística eficiente/i
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       ÍCONES
    ================================================== */

    it("deve renderizar os três ícones corretamente", () => {

        renderSectionTwo();

        expect(
            screen.getByTestId("icon-handshake")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("icon-truck")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("icon-award")
        ).toBeInTheDocument();

    });


    /* ==================================================
       QUANTIDADE DE ÍCONES
    ================================================== */

    it("deve renderizar exatamente três ícones", () => {

        renderSectionTwo();

        const icons = [
            screen.getByTestId("icon-handshake"),
            screen.getByTestId("icon-truck"),
            screen.getByTestId("icon-award"),
        ];

        expect(icons).toHaveLength(3);

    });


    /* ==================================================
       QUANTIDADE DE CARDS
    ================================================== */

    it("deve renderizar exatamente três cards", () => {

        renderSectionTwo();

        const articles = document.querySelectorAll(
            ".articleParceiroIdeal"
        );

        expect(articles).toHaveLength(3);

    });


    /* ==================================================
       BOTÃO
    ================================================== */

    it("deve renderizar o botão Saiba Mais", () => {

        renderSectionTwo();

        expect(
            screen.getByRole("button", {
                name: /saiba mais/i,
            })
        ).toBeInTheDocument();

    });


    /* ==================================================
       NAVEGAÇÃO
    ================================================== */

    it("deve navegar para a página Sobre Nós ao clicar no botão", async () => {

        const user = userEvent.setup();

        renderSectionTwo();

        const button = screen.getByRole("button", {
            name: /saiba mais/i,
        });

        await user.click(button);

        expect(
            screen.getByTestId("location")
        ).toHaveTextContent("/sobre-nos");

    });


    /* ==================================================
       CONTAINER PRINCIPAL
    ================================================== */

    it("deve renderizar o container principal da seção", () => {

        renderSectionTwo();

        expect(
            document.querySelector(
                ".containerParceiroIdeal"
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       CONTAINER DOS CARDS
    ================================================== */

    it("deve renderizar o container dos cards", () => {

        renderSectionTwo();

        expect(
            document.querySelector(
                ".containerParceiroIdealContentArticles"
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       CONTAINER DO BOTÃO
    ================================================== */

    it("deve renderizar o container do botão", () => {

        renderSectionTwo();

        expect(
            document.querySelector(
                ".containerButtonParceiroIdeal"
            )
        ).toBeInTheDocument();

    });

});