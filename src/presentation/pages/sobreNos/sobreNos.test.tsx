import React from "react";

import {
    describe,
    expect,
    it,
    vi,
    beforeEach,
} from "vitest";

import {
    render,
    screen,
    fireEvent,
} from "@testing-library/react";

import { SobreNosPage } from "./sobreNos.page";

// ==================================================
// MOCKS
// ==================================================

vi.mock(
    "../../components/header/header.component",
    () => ({
        Header: () => (
            <header data-testid="header">
                Header
            </header>
        ),
    })
);

vi.mock(
    "../../components/footer/footer.component",
    () => ({
        Footer: () => (
            <footer data-testid="footer">
                Footer
            </footer>
        ),
    })
);

vi.mock(
    "../../fragments/buttons/buttonWhatsApp/buttonWhatsApp.component",
    () => ({
        ButtonWhatsApp: () => (
            <a
                href="https://wa.me/5588988965616"
                data-testid="button-whatsapp"
                aria-label="Fale conosco pelo WhatsApp"
            >
                WhatsApp
            </a>
        ),
    })
);

// ==================================================
// MOCK DO REACT ROUTER
// ==================================================

const mockNavigate = vi.fn();

vi.mock(
    "react-router-dom",
    () => ({
        useNavigate: () => mockNavigate,
    })
);

// ==================================================
// MOCK DAS ANIMAÇÕES
// ==================================================

vi.mock(
    "../../animations/index",
    () => ({
        fadeLeft: {},
        fadeRight: {},
        fadeDown: {},
        staggerContainer: {},
        zoomIn: {},
        slide: {},
    })
);

// ==================================================
// MOCK DO FRAMER MOTION
// ==================================================

vi.mock("framer-motion", () => {

    const createMotionComponent = (
        Component: keyof React.JSX.IntrinsicElements
    ) => {

        return React.forwardRef<
            HTMLElement,
            React.HTMLAttributes<HTMLElement>
        >(
            (
                {
                    children,
                    ...props
                },
                ref
            ) => {

                return React.createElement(
                    Component,
                    {
                        ...props,
                        ref,
                    },
                    children
                );
            }
        );
    };

    return {
        motion: {
            section: createMotionComponent("section"),
            div: createMotionComponent("div"),
            span: createMotionComponent("span"),
            h1: createMotionComponent("h1"),
            h2: createMotionComponent("h2"),
            h3: createMotionComponent("h3"),
            p: createMotionComponent("p"),
            button: createMotionComponent("button"),
        },
    };
});

// ==================================================
// HELPERS
// ==================================================

const renderSobreNosPage = () => {
    return render(<SobreNosPage />);
};

// ==================================================
// TESTES
// ==================================================

describe("SobreNosPage", () => {

    beforeEach(() => {

        vi.clearAllMocks();

    });

    // ==================================================
    // ESTRUTURA PRINCIPAL
    // ==================================================

    it("deve renderizar todas as principais áreas da página", () => {

        renderSobreNosPage();

        expect(
            screen.getByTestId("header")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("footer")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("button-whatsapp")
        ).toBeInTheDocument();

        expect(
            document.querySelector(".sobreNosHero")
        ).toBeInTheDocument();

        expect(
            document.querySelector(".sobreNosPresentation")
        ).toBeInTheDocument();

        expect(
            document.querySelector(".comercialSection")
        ).toBeInTheDocument();

        expect(
            document.querySelector(".operacaoSection")
        ).toBeInTheDocument();
    });

    // ==================================================
    // HERO
    // ==================================================

    it("deve renderizar o subtítulo do hero", () => {

        renderSobreNosPage();

        expect(
            screen.getByText(
                "Distribuição que conecta negócios"
            )
        ).toBeInTheDocument();
    });

    it("deve renderizar o título principal do hero", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("heading", {
                level: 1,
                name: "A JWC Distribuição & Logística",
            })
        ).toBeInTheDocument();
    });

    it("deve renderizar a imagem principal do hero", () => {

        renderSobreNosPage();

        const imagem = document.querySelector(
            ".sobreNosHeroImage"
        );

        expect(imagem).toBeInTheDocument();

        expect(imagem).toHaveAttribute(
            "alt",
            "Banner Sobre Nós"
        );
    });

    // ==================================================
    // PRESENTATION
    // ==================================================

    it("deve renderizar o título da apresentação", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Nossos clientes e parceiros em boas mãos",
            })
        ).toBeInTheDocument();
    });

    it("deve renderizar a descrição da apresentação", () => {

        renderSobreNosPage();

        expect(
            screen.getByText(
                /Na JWC Distribuição & Logística, acreditamos que confiança é o principal ingrediente de uma parceria duradoura/i
            )
        ).toBeInTheDocument();
    });

    it("deve renderizar o botão do LinkedIn", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("button", {
                name: /Conheça a JWC no LinkedIn/i,
            })
        ).toBeInTheDocument();
    });

    // ==================================================
    // COMERCIAL
    // ==================================================

    it("deve renderizar a seção Comercial", () => {

        renderSobreNosPage();

        const section = document.querySelector(
            "#comercial"
        );

        expect(section).toBeInTheDocument();
    });

    it("deve renderizar o título Comercial", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Comercial",
            })
        ).toBeInTheDocument();
    });

    it("deve renderizar o título do conteúdo Comercial", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "Conectando negócios e oportunidades",
            })
        ).toBeInTheDocument();
    });

    it("deve renderizar a descrição Comercial", () => {

        renderSobreNosPage();

        expect(
            screen.getByText(
                /Nossa atuação comercial vai além da venda de produtos/i
            )
        ).toBeInTheDocument();
    });

    it("deve renderizar o botão de marcas e parceiros", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("button", {
                name: /Conheça nossas marcas e parceiros/i,
            })
        ).toBeInTheDocument();
    });

    it("deve navegar para produtos ao clicar no botão de marcas e parceiros", () => {

        renderSobreNosPage();

        const botao = screen.getByRole(
            "button",
            {
                name: /Conheça nossas marcas e parceiros/i,
            }
        );

        fireEvent.click(botao);

        expect(
            mockNavigate
        ).toHaveBeenCalledTimes(1);

        expect(
            mockNavigate
        ).toHaveBeenCalledWith(
            "/produtos#marcas"
        );
    });

    it("deve renderizar a imagem da seção Comercial", () => {

        renderSobreNosPage();

        const imagem = document.querySelector(
            ".comercialBannerImage"
        );

        expect(imagem).toBeInTheDocument();

        expect(imagem).toHaveAttribute(
            "alt",
            "Comercial JWC"
        );
    });

    // ==================================================
    // OPERAÇÃO E LOGÍSTICA
    // ==================================================

    it("deve renderizar a seção de Operação e Logística", () => {

        renderSobreNosPage();

        const section = document.querySelector(
            "#operacaoelogistica"
        );

        expect(section).toBeInTheDocument();
    });

    it("deve renderizar o título Operação e Logística", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Operação e Logística",
            })
        ).toBeInTheDocument();
    });

    it("deve renderizar o título do conteúdo de Operação e Logística", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "Eficiência em cada etapa da operação",
            })
        ).toBeInTheDocument();
    });

    it("deve renderizar a descrição de Operação e Logística", () => {

        renderSobreNosPage();

        expect(
            screen.getByText(
                /Nossa operação é estruturada para que produtos e pedidos avancem de forma organizada, segura e eficiente/i
            )
        ).toBeInTheDocument();
    });

    it("deve renderizar o botão Fale com a JWC", () => {

        renderSobreNosPage();

        expect(
            screen.getByRole("button", {
                name: /Fale com a JWC/i,
            })
        ).toBeInTheDocument();
    });

    it("deve navegar para contato ao clicar em Fale com a JWC", () => {

        renderSobreNosPage();

        const botao = screen.getByRole(
            "button",
            {
                name: /Fale com a JWC/i,
            }
        );

        fireEvent.click(botao);

        expect(
            mockNavigate
        ).toHaveBeenCalledTimes(1);

        expect(
            mockNavigate
        ).toHaveBeenCalledWith(
            "/contato"
        );
    });

    it("deve renderizar a imagem da seção de Operação e Logística", () => {

        renderSobreNosPage();

        const imagem = document.querySelector(
            ".operacaoBannerImage"
        );

        expect(imagem).toBeInTheDocument();

        expect(imagem).toHaveAttribute(
            "alt",
            "Operação e Logística JWC"
        );
    });

    // ==================================================
    // FOOTER
    // ==================================================

    it("deve renderizar o Footer", () => {

        renderSobreNosPage();

        expect(
            screen.getByTestId("footer")
        ).toBeInTheDocument();
    });

    // ==================================================
    // WHATSAPP
    // ==================================================

    it("deve renderizar o botão flutuante do WhatsApp", () => {

        renderSobreNosPage();

        expect(
            screen.getByTestId("button-whatsapp")
        ).toBeInTheDocument();
    });

});