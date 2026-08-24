import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import { ProdutosPage } from "../produtos/produtos.page";

// ==================================================
// MOCKS
// ==================================================

vi.mock("../../components/header/header.component", () => ({
    Header: () => (
        <header data-testid="header">
            Header
        </header>
    ),
}));



vi.mock("../../components/footer/footer.component", () => ({
    Footer: () => (
        <footer data-testid="footer">
            Footer
        </footer>
    ),
}));



vi.mock(
    "../../components/brandProducts/brandProducts.component",
    () => ({
        BrandProdutos: ({
            marca,
            produtos,
        }: {
            marca: string;
            produtos: unknown[];
        }) => (
            <section data-testid="brand-produtos">
                <h2>{marca}</h2>

                <span data-testid={`produtos-${marca}`}>
                    {produtos.length} produtos
                </span>
            </section>
        ),
    })
);



vi.mock(
    "../../components/sections/sectionOne/sectionOne.component",
    () => ({
        SectionOne: () => (
            <section data-testid="section-one">
                Section One
            </section>
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
// MOCK DAS ANIMAÇÕES
// ==================================================

vi.mock("../../animations", () => ({
    fadeLeft: {},
    fadeRight: {},
    staggerContainer: {},
    orderContent: {},
    orderButton: {},
}));



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
            p: createMotionComponent("p"),
            button: createMotionComponent("button"),
        },
    };
});


// ==================================================
// HELPERS
// ==================================================

const renderProdutosPage = () => {
    return render(<ProdutosPage />);
};



// ==================================================
// TESTES
// ==================================================

describe("ProdutosPage", () => {

    beforeEach(() => {
        vi.clearAllMocks();

        vi.spyOn(window, "open").mockImplementation(
            () => null
        );
    });



    // ==================================================
    // ESTRUTURA PRINCIPAL
    // ==================================================

    it("deve renderizar todas as principais áreas da página", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("header")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("section-one")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("footer")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("button-whatsapp")
        ).toBeInTheDocument();
    });



    // ==================================================
    // HERO
    // ==================================================

    it("deve renderizar o título principal do hero", () => {
        renderProdutosPage();

        expect(
            screen.getByRole("heading", {
                level: 1,
                name: "Produtos",
            })
        ).toBeInTheDocument();
    });



    it("deve renderizar o subtítulo do hero", () => {
        renderProdutosPage();

        expect(
            screen.getByText("Nosso portfólio")
        ).toBeInTheDocument();
    });



    it("deve renderizar a descrição do hero", () => {
        renderProdutosPage();

        expect(
            screen.getByText(
                /Conheça as marcas e produtos que fazem parte do portfólio da JWC Distribuição\./i
            )
        ).toBeInTheDocument();
    });



    it("deve renderizar o hero com o id marcas", () => {
        renderProdutosPage();

        expect(
            document.getElementById("marcas")
        ).toBeInTheDocument();
    });



    it("deve renderizar a imagem de fundo do hero", () => {
        renderProdutosPage();

        const imagem = document.querySelector(
            ".produtosHeroBackground"
        );

        expect(imagem).toBeInTheDocument();

        expect(imagem).toHaveAttribute(
            "aria-hidden",
            "true"
        );
    });



    // ==================================================
    // SECTION ONE
    // ==================================================

    it("deve renderizar a SectionOne", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("section-one")
        ).toBeInTheDocument();
    });



    // ==================================================
    // MARCAS
    // ==================================================

    it("deve renderizar todas as marcas do portfólio", () => {
        renderProdutosPage();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Kipolpas",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Puro sabor",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Amazon",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Peterfrut",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Palamaz",
            })
        ).toBeInTheDocument();
    });



    it("deve renderizar cinco seções de marcas", () => {
        renderProdutosPage();

        const marcas = screen.getAllByTestId(
            "brand-produtos"
        );

        expect(marcas).toHaveLength(5);
    });



    it("deve renderizar a marca Kipolpas", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("produtos-Kipolpas")
        ).toBeInTheDocument();
    });



    it("deve renderizar a marca Puro sabor", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("produtos-Puro sabor")
        ).toBeInTheDocument();
    });



    it("deve renderizar a marca Amazon", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("produtos-Amazon")
        ).toBeInTheDocument();
    });



    it("deve renderizar a marca Peterfrut", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("produtos-Peterfrut")
        ).toBeInTheDocument();
    });



    it("deve renderizar a marca Palamaz", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("produtos-Palamaz")
        ).toBeInTheDocument();
    });



    // ==================================================
    // SEÇÃO DE PEDIDO
    // ==================================================

    it("deve renderizar a mensagem para realizar o pedido", () => {
        renderProdutosPage();

        expect(
            screen.getByText(
                "Se interessou pelos produtos?"
            )
        ).toBeInTheDocument();
    });



    it("deve renderizar o botão Faça seu pedido", () => {
        renderProdutosPage();

        expect(
            screen.getByRole("button", {
                name: /Faça seu pedido/i,
            })
        ).toBeInTheDocument();
    });



    it("deve abrir o WhatsApp ao clicar em Faça seu pedido", () => {
        renderProdutosPage();

        const botao = screen.getByRole(
            "button",
            {
                name: /Faça seu pedido/i,
            }
        );

        fireEvent.click(botao);

        expect(
            window.open
        ).toHaveBeenCalledTimes(1);

        expect(
            window.open
        ).toHaveBeenCalledWith(
            expect.stringContaining(
                "https://wa.me/5588988965616"
            )
        );
    });



    it("deve abrir o WhatsApp com a mensagem correta", () => {
        renderProdutosPage();

        const botao = screen.getByRole(
            "button",
            {
                name: /Faça seu pedido/i,
            }
        );

        fireEvent.click(botao);

        expect(
            window.open
        ).toHaveBeenCalledWith(
            expect.stringContaining(
                encodeURIComponent(
                    "Olá! Gostaria de conhecer as soluções da JWC Distribuição."
                )
            )
        );
    });



    // ==================================================
    // FOOTER
    // ==================================================

    it("deve renderizar o Footer", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("footer")
        ).toBeInTheDocument();
    });



    // ==================================================
    // WHATSAPP
    // ==================================================

    it("deve renderizar o botão flutuante do WhatsApp", () => {
        renderProdutosPage();

        expect(
            screen.getByTestId("button-whatsapp")
        ).toBeInTheDocument();
    });



    it("deve renderizar o link correto do WhatsApp", () => {
        renderProdutosPage();

        const whatsapp = screen.getByTestId(
            "button-whatsapp"
        );

        expect(whatsapp).toHaveAttribute(
            "href",
            "https://wa.me/5588988965616"
        );
    });

});