import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { SectionFive } from "./sectionFive.component";


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
            article: MotionComponent,
        },

        AnimatePresence: ({
            children,
        }: React.PropsWithChildren) => (
            <>{children}</>
        ),
    };

});


describe("SectionFive", () => {

    const renderSectionFive = () => {

        return render(
            <MemoryRouter>
                <SectionFive />
            </MemoryRouter>
        );

    };


    /* ==================================================
       RENDERIZAÇÃO DA SEÇÃO
    ================================================== */

    it("deve renderizar a seção corretamente", () => {

        renderSectionFive();

        expect(
            screen.getByText("Nossas soluções")
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Conheça soluções completas para sua rede",
            })
        ).toBeInTheDocument();

    });


    /* ==================================================
       CARD COMERCIAL
    ================================================== */

    it("deve renderizar o card Comercial corretamente", () => {

        renderSectionFive();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "Comercial",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText("01")
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /Na JWC Distribuição & Logística, acreditamos que uma boa parceria começa muito antes da primeira venda\./i
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       CARD LOGÍSTICA
    ================================================== */

    it("deve renderizar o card Logística corretamente", () => {

        renderSectionFive();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "Logística",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText("02")
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /Nossa operação logística é planejada para garantir eficiência, organização e segurança em cada etapa da distribuição\./i
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       LINK COMERCIAL
    ================================================== */

    it("deve direcionar o card Comercial para a seção comercial", () => {

        renderSectionFive();

        const links = screen.getAllByRole("link");

        const linkComercial = links.find(
            (link) =>
                link.getAttribute("href") ===
                "/sobre-nos#comercial"
        );

        expect(linkComercial).toBeInTheDocument();

        expect(linkComercial).toHaveAttribute(
            "href",
            "/sobre-nos#comercial"
        );

    });


    /* ==================================================
       LINK LOGÍSTICA
    ================================================== */

    it("deve direcionar o card Logística para a seção de operação e logística", () => {

        renderSectionFive();

        const links = screen.getAllByRole("link");

        const linkLogistica = links.find(
            (link) =>
                link.getAttribute("href") ===
                "/sobre-nos#operacaoelogistica"
        );

        expect(linkLogistica).toBeInTheDocument();

        expect(linkLogistica).toHaveAttribute(
            "href",
            "/sobre-nos#operacaoelogistica"
        );

    });


    /* ==================================================
       SAIBA MAIS
    ================================================== */

    it("deve renderizar os links 'Saiba mais' nos dois cards", () => {

        renderSectionFive();

        const linksSaibaMais = screen.getAllByText("Saiba mais");

        expect(linksSaibaMais).toHaveLength(2);

    });


    /* ==================================================
       ÍCONES
    ================================================== */

    it("deve renderizar os ícones de 'Saiba mais'", () => {

        renderSectionFive();

        const icons = screen.getAllByAltText("Saiba mais");

        expect(icons).toHaveLength(2);

        icons.forEach((icon) => {

            expect(icon).toBeInTheDocument();

        });

    });


    /* ==================================================
       QUANTIDADE DE CARDS
    ================================================== */

    it("deve renderizar exatamente dois cards ativos", () => {

        renderSectionFive();

        const links = screen.getAllByRole("link");

        expect(links).toHaveLength(2);

    });


    /* ==================================================
       MERCHANDISING
    ================================================== */

    it("não deve renderizar o card Merchandising enquanto estiver desativado", () => {

        renderSectionFive();

        expect(
            screen.queryByRole("heading", {
                level: 3,
                name: "Merchandising",
            })
        ).not.toBeInTheDocument();

    });

});