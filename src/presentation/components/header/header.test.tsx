import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { Header } from "./header.component";


describe("Header", () => {

    it("deve renderizar o Header corretamente", () => {

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(
            screen.getByAltText("JWC Distribuição e Logística")
        ).toBeInTheDocument();

    });


    it("deve abrir o menu mobile ao clicar no botão", async () => {

        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const menuButton = screen.getByRole("button", {
            name: "Abrir menu",
        });

        await user.click(menuButton);

        expect(
            screen.getByRole("button", {
                name: "Fechar menu",
            })
        ).toBeInTheDocument();

    });


    it("deve fechar o menu mobile ao clicar no botão de fechar", async () => {

        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const openButton = screen.getByRole("button", {
            name: "Abrir menu",
        });

        await user.click(openButton);

        const closeButton = screen.getByRole("button", {
            name: "Fechar menu",
        });

        expect(closeButton).toBeInTheDocument();

        await user.click(closeButton);

        expect(
            screen.queryByRole("button", {
                name: "Fechar menu",
            })
        ).not.toBeInTheDocument();

    });


    it("deve adicionar as classes de scroll ao rolar a página", () => {

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const header = document.querySelector(".containerHeader");

        const menuButton = screen.getByRole("button", {
            name: "Abrir menu",
        });

        expect(header).not.toHaveClass("scrolled");

        expect(menuButton).not.toHaveClass(
            "containerHeader__menuButtonScrolled"
        );

        Object.defineProperty(window, "scrollY", {
            writable: true,
            configurable: true,
            value: 100,
        });

        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        expect(header).toHaveClass("scrolled");

        expect(menuButton).toHaveClass(
            "containerHeader__menuButtonScrolled"
        );

    });


    it("deve remover as classes de scroll ao voltar para o topo", () => {

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const header = document.querySelector(".containerHeader");

        const menuButton = screen.getByRole("button", {
            name: "Abrir menu",
        });

        Object.defineProperty(window, "scrollY", {
            writable: true,
            configurable: true,
            value: 100,
        });

        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        expect(header).toHaveClass("scrolled");

        expect(menuButton).toHaveClass(
            "containerHeader__menuButtonScrolled"
        );

        Object.defineProperty(window, "scrollY", {
            writable: true,
            configurable: true,
            value: 0,
        });

        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        expect(header).not.toHaveClass("scrolled");

        expect(menuButton).not.toHaveClass(
            "containerHeader__menuButtonScrolled"
        );

    });


    it("deve renderizar os links das redes sociais", () => {

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("link", {
                name: "Facebook",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "LinkedIn",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", {
                name: "Instagram",
            })
        ).toBeInTheDocument();

    });


    it("deve direcionar o Instagram para o perfil correto", () => {

        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const instagramLink = screen.getByRole("link", {
            name: "Instagram",
        });

        expect(instagramLink).toHaveAttribute(
            "href",
            "https://www.instagram.com/jwc.log/"
        );

    });

});