import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { Footer } from "../../../presentation/components/footer/footer.component";


describe("Footer", () => {

    const renderFooter = () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
    };


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    it("deve renderizar o Footer corretamente", () => {

        renderFooter();

        expect(
            screen.getByRole("contentinfo")
        ).toBeInTheDocument();

    });


    // ==================================================
    // LOGO
    // ==================================================

    it("deve renderizar o logo da JWC", () => {

        renderFooter();

        expect(
            screen.getByAltText("Logo")
        ).toBeInTheDocument();

    });


    // ==================================================
    // MATRIZ
    // ==================================================

    it("deve exibir as informações da matriz", () => {

        renderFooter();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "Matriz:",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText("Vereador Efésio Costa | Nº 496")
        ).toBeInTheDocument();

    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    it("deve exibir a seção de navegação", () => {

        renderFooter();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "Navegue:",
            })
        ).toBeInTheDocument();

    });


    it("deve renderizar todos os links de navegação ativos", () => {

        renderFooter();

        expect(
            screen.getByRole("link", {
                name: "Início",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "Sobre Nós",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "Produtos",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "Contato",
            })
        ).toBeInTheDocument();

    });


    it("não deve renderizar links de navegação que estão desativados", () => {

        renderFooter();

        expect(
            screen.queryByRole("link", {
                name: "Vantagens",
            })
        ).not.toBeInTheDocument();

        expect(
            screen.queryByRole("link", {
                name: "Como Funciona",
            })
        ).not.toBeInTheDocument();

    });


    // ==================================================
    // DESTINO DOS LINKS
    // ==================================================

    it("deve direcionar o link Início para a página inicial", () => {

        renderFooter();

        expect(
            screen.getByRole("link", {
                name: "Início",
            })
        ).toHaveAttribute("href", "/");

    });


    it("deve direcionar o link Sobre Nós para a página correta", () => {

        renderFooter();

        expect(
            screen.getByRole("link", {
                name: "Sobre Nós",
            })
        ).toHaveAttribute("href", "/sobre-nos");

    });


    it("deve direcionar o link Produtos para a página correta", () => {

        renderFooter();

        expect(
            screen.getByRole("link", {
                name: "Produtos",
            })
        ).toHaveAttribute("href", "/produtos");

    });


    it("deve direcionar o link Contato para a página correta", () => {

        renderFooter();

        expect(
            screen.getByRole("link", {
                name: "Contato",
            })
        ).toHaveAttribute("href", "/contato");

    });


    // ==================================================
    // CONTATO
    // ==================================================

    it("deve exibir as informações de contato", () => {

        renderFooter();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "Contato:",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText("+55 (88) 9 8896-5616")
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                "jwcdistribuicaoelogisticaltda@gmail.com"
            )
        ).toBeInTheDocument();

    });


    // ==================================================
    // ATENDIMENTO
    // ==================================================

    it("deve exibir a seção de atendimento", () => {

        renderFooter();

        expect(
            screen.getByRole("heading", {
                level: 3,
                name: "Atendimento:",
            })
        ).toBeInTheDocument();

    });


    // ==================================================
    // REDES SOCIAIS
    // ==================================================

    it("deve renderizar as três redes sociais", () => {

        renderFooter();

        expect(
            screen.getByAltText("Facebook")
        ).toBeInTheDocument();

        expect(
            screen.getByAltText("Linkedin")
        ).toBeInTheDocument();

        expect(
            screen.getByAltText("Instagram")
        ).toBeInTheDocument();

    });


    it("deve renderizar exatamente três ícones de redes sociais", () => {

        renderFooter();

        const redesSociais = [
            screen.getByAltText("Facebook"),
            screen.getByAltText("Linkedin"),
            screen.getByAltText("Instagram"),
        ];

        expect(redesSociais).toHaveLength(3);

    });


    // ==================================================
    // INSTAGRAM
    // ==================================================

    it("deve direcionar o Instagram para o perfil correto", () => {

        renderFooter();

        const instagramIcon = screen.getByAltText("Instagram");

        const instagramLink = instagramIcon.closest("a");

        expect(instagramLink).toHaveAttribute(
            "href",
            "https://www.instagram.com/jwc.log/"
        );

    });


    it("deve abrir o Instagram em uma nova aba", () => {

        renderFooter();

        const instagramIcon = screen.getByAltText("Instagram");

        const instagramLink = instagramIcon.closest("a");

        expect(instagramLink).toHaveAttribute(
            "target",
            "_blank"
        );

    });


    // ==================================================
    // COPYRIGHT
    // ==================================================

    it("deve exibir o texto de copyright", () => {

        renderFooter();

        expect(
            screen.getByText(
                "© 2026 JWC Distribuição e Logística. Todos os direitos reservados."
            )
        ).toBeInTheDocument();

    });

});