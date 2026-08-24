import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Navigation } from "./navigation.component";


describe("Navigation", () => {


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    it("deve renderizar a navegação corretamente", () => {

        render(<Navigation />);

        expect(
            screen.getByRole("navigation")
        ).toBeInTheDocument();

    });


    // ==================================================
    // LINKS
    // ==================================================

    it("deve renderizar todos os links de navegação", () => {

        render(<Navigation />);

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

        render(<Navigation />);

        expect(
            screen.getByRole("link", {
                name: "Início",
            })
        ).toHaveAttribute("href", "/");

    });


    it("deve direcionar Sobre nós para a página correta", () => {

        render(<Navigation />);

        expect(
            screen.getByRole("link", {
                name: "Sobre nós",
            })
        ).toHaveAttribute("href", "/sobre-nos");

    });


    it("deve direcionar Produtos para a página correta", () => {

        render(<Navigation />);

        expect(
            screen.getByRole("link", {
                name: "Produtos",
            })
        ).toHaveAttribute("href", "/produtos");

    });


    it("deve direcionar Contato para a página correta", () => {

        render(<Navigation />);

        expect(
            screen.getByRole("link", {
                name: "Contato",
            })
        ).toHaveAttribute("href", "/contato");

    });


    // ==================================================
    // QUANTIDADE
    // ==================================================

    it("deve renderizar exatamente quatro links", () => {

        render(<Navigation />);

        expect(
            screen.getAllByRole("link")
        ).toHaveLength(4);

    });


    // ==================================================
    // ESTRUTURA
    // ==================================================

    it("deve renderizar os links dentro de uma lista", () => {

        render(<Navigation />);

        const navigation = screen.getByRole("navigation");

        expect(
            navigation.querySelector("ul")
        ).toBeInTheDocument();

    });


    it("deve renderizar quatro itens na lista de navegação", () => {

        render(<Navigation />);

        const navigation = screen.getByRole("navigation");

        expect(
            navigation.querySelectorAll("li")
        ).toHaveLength(4);

    });

});
