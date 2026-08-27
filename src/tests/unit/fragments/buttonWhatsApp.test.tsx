import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ButtonWhatsApp } from "../../../presentation/fragments/buttons/buttonWhatsApp/buttonWhatsApp.component";
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
            <a {...filteredProps}>
                {children}
            </a>
        );
    };


    return {
        motion: {
            a: MotionComponent,
        },
    };

});


describe("ButtonWhatsApp", () => {


    /* ==================================================
       RENDERIZAÇÃO
    ================================================== */

    it("deve renderizar o botão do WhatsApp corretamente", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        expect(button).toBeInTheDocument();

    });


    /* ==================================================
       ARIA LABEL
    ================================================== */

    it("deve possuir o aria-label correto", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        expect(button).toHaveAttribute(
            "aria-label",
            "Fale conosco pelo WhatsApp"
        );

    });


    /* ==================================================
       CLASSE CSS
    ================================================== */

    it("deve possuir a classe whatsappButton", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        expect(button).toHaveClass("whatsappButton");

    });


    /* ==================================================
       LINK DO WHATSAPP
    ================================================== */

    it("deve possuir o link correto do WhatsApp", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        expect(button).toHaveAttribute(
            "href",
            expect.stringContaining(
                "https://wa.me/5588988965616"
            )
        );

    });


    /* ==================================================
       NÚMERO DO WHATSAPP
    ================================================== */

    it("deve utilizar o número correto no link do WhatsApp", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        const href = button.getAttribute("href");

        expect(href).toContain(
            "https://wa.me/5588988965616"
        );

    });


    /* ==================================================
       MENSAGEM
    ================================================== */

    it("deve possuir a mensagem correta no link do WhatsApp", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        const href = button.getAttribute("href");

        const message =
            "Olá! Gostaria de conhecer as soluções da JWC Distribuição.";

        const encodedMessage = encodeURIComponent(message);

        expect(href).toContain(
            `text=${encodedMessage}`
        );

    });


    /* ==================================================
       URL COMPLETA
    ================================================== */

    it("deve gerar a URL completa corretamente", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        const message =
            "Olá! Gostaria de conhecer as soluções da JWC Distribuição.";

        const expectedUrl =
            `https://wa.me/5588988965616?text=${encodeURIComponent(
                message
            )}`;

        expect(button).toHaveAttribute(
            "href",
            expectedUrl
        );

    });


    /* ==================================================
       ABERTURA EM NOVA ABA
    ================================================== */

    it("deve abrir o WhatsApp em uma nova aba", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        expect(button).toHaveAttribute(
            "target",
            "_blank"
        );

    });


    /* ==================================================
       SEGURANÇA DO LINK
    ================================================== */

    it("deve possuir os atributos de segurança corretos", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        expect(button).toHaveAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* ==================================================
       ÍCONE WHATSAPP
    ================================================== */

    it("deve renderizar o ícone do WhatsApp", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        expect(
            button.querySelector("svg")
        ).toBeInTheDocument();

    });


    /* ==================================================
       ESTRUTURA
    ================================================== */

    it("deve renderizar apenas um link do WhatsApp", () => {

        render(<ButtonWhatsApp />);

        const buttons = screen.getAllByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        expect(buttons).toHaveLength(1);

    });


    /* ==================================================
       MENSAGEM CODIFICADA
    ================================================== */

    it("deve codificar corretamente os caracteres especiais da mensagem", () => {

        render(<ButtonWhatsApp />);

        const button = screen.getByRole("link", {
            name: "Fale conosco pelo WhatsApp",
        });

        const href = button.getAttribute("href");

        expect(href).toContain("%C3%A1");

        expect(href).toContain(
            "JWC%20Distribui%C3%A7%C3%A3o"
        );

    });

});