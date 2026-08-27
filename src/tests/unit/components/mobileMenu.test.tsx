import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { MobileMenu } from "../../../presentation/components/mobileMenu/mobileMenu.component";


describe("MobileMenu", () => {

    const renderMobileMenu = (
        isOpen = true,
        onClose = vi.fn()
    ) => {

        render(
            <MemoryRouter>
                <MobileMenu
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </MemoryRouter>
        );

        return {
            onClose,
        };
    };


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    it("não deve renderizar o menu quando isOpen for false", () => {

        renderMobileMenu(false);

        expect(
            screen.queryByRole("button", {
                name: "Fechar menu",
            })
        ).not.toBeInTheDocument();

    });


    it("deve renderizar o menu quando isOpen for true", () => {

        renderMobileMenu(true);

        expect(
            screen.getByRole("button", {
                name: "Fechar menu",
            })
        ).toBeInTheDocument();

    });


    // ==================================================
    // ESTRUTURA DO MENU
    // ==================================================

    it("deve renderizar o conteúdo principal do menu", () => {

        renderMobileMenu();

        expect(
            screen.getByRole("complementary")
        ).toBeInTheDocument();

    });


    it("deve renderizar o botão de fechar", () => {

        renderMobileMenu();

        expect(
            screen.getByRole("button", {
                name: "Fechar menu",
            })
        ).toBeInTheDocument();

    });


    // ==================================================
    // LOGO
    // ==================================================

    it("deve renderizar o logo da JWC", () => {

        renderMobileMenu();

        expect(
            screen.getByAltText("JWC Distribuição e Logística")
        ).toBeInTheDocument();

    });


    it("deve renderizar o texto da marca", () => {

        renderMobileMenu();

        expect(
            screen.getByText("DISTRIBUIÇÃO & LOGÍSTICA")
        ).toBeInTheDocument();

    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    it("deve renderizar todos os links de navegação", () => {

        renderMobileMenu();

        expect(
            screen.getByRole("link", {
                name: "Início",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "Sobre nós",
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


    // ==================================================
    // DESTINO DOS LINKS
    // ==================================================

    it("deve direcionar Início para a página inicial", () => {

        renderMobileMenu();

        expect(
            screen.getByRole("link", {
                name: "Início",
            })
        ).toHaveAttribute("href", "/");

    });


    it("deve direcionar Sobre nós para a página correta", () => {

        renderMobileMenu();

        expect(
            screen.getByRole("link", {
                name: "Sobre nós",
            })
        ).toHaveAttribute("href", "/sobre-nos");

    });


    it("deve direcionar Produtos para a página correta", () => {

        renderMobileMenu();

        expect(
            screen.getByRole("link", {
                name: "Produtos",
            })
        ).toHaveAttribute("href", "/produtos");

    });


    it("deve direcionar Contato para a página correta", () => {

        renderMobileMenu();

        expect(
            screen.getByRole("link", {
                name: "Contato",
            })
        ).toHaveAttribute("href", "/contato");

    });


    // ==================================================
    // FECHAMENTO
    // ==================================================

    it("deve chamar onClose ao clicar no botão de fechar", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        await user.click(
            screen.getByRole("button", {
                name: "Fechar menu",
            })
        );

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    it("deve chamar onClose ao clicar no overlay", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        const overlay = document.querySelector(
            ".mobileMenu__overlay"
        );

        expect(overlay).toBeInTheDocument();

        await user.click(overlay!);

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    // ==================================================
    // FECHAMENTO PELA NAVEGAÇÃO
    // ==================================================

    it("deve chamar onClose ao clicar em Início", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        await user.click(
            screen.getByRole("link", {
                name: "Início",
            })
        );

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    it("deve chamar onClose ao clicar em Sobre nós", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        await user.click(
            screen.getByRole("link", {
                name: "Sobre nós",
            })
        );

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    it("deve chamar onClose ao clicar em Produtos", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        await user.click(
            screen.getByRole("link", {
                name: "Produtos",
            })
        );

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    it("deve chamar onClose ao clicar em Contato", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        await user.click(
            screen.getByRole("link", {
                name: "Contato",
            })
        );

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    // ==================================================
    // REDES SOCIAIS
    // ==================================================

    it("deve renderizar os links das redes sociais", () => {

        renderMobileMenu();

        expect(
            screen.getByRole("link", {
                name: "Facebook",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "Instagram",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "LinkedIn",
            })
        ).toBeInTheDocument();

    });


    it("deve chamar onClose ao clicar em Facebook", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        await user.click(
            screen.getByRole("link", {
                name: "Facebook",
            })
        );

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    it("deve chamar onClose ao clicar em Instagram", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        await user.click(
            screen.getByRole("link", {
                name: "Instagram",
            })
        );

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    it("deve chamar onClose ao clicar em LinkedIn", async () => {

        const user = userEvent.setup();

        const onClose = vi.fn();

        renderMobileMenu(true, onClose);

        await user.click(
            screen.getByRole("link", {
                name: "LinkedIn",
            })
        );

        expect(onClose).toHaveBeenCalledTimes(1);

    });


    // ==================================================
    // FOOTER
    // ==================================================

    it("deve renderizar o copyright do menu", () => {

        renderMobileMenu();

        expect(
            screen.getByText(
                "© 2026 JWC Distribuição & Logística"
            )
        ).toBeInTheDocument();

    });


    // ==================================================
    // QUANTIDADE DE LINKS
    // ==================================================

    it("deve renderizar exatamente quatro links de navegação", () => {

        renderMobileMenu();

        const navigation = document.querySelector(
            ".mobileMenu__navigation"
        );

        expect(navigation).toBeInTheDocument();

        expect(
            navigation?.querySelectorAll("a")
        ).toHaveLength(4);

    });


    it("deve renderizar exatamente três links de redes sociais", () => {

        renderMobileMenu();

        const social = document.querySelector(
            ".mobileMenu__social"
        );

        expect(social).toBeInTheDocument();

        expect(
            social?.querySelectorAll("a")
        ).toHaveLength(3);

    });

});