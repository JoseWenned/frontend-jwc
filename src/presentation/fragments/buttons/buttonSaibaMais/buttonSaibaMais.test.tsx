import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ButtonSaibaMais } from "./buttonSaibaMais.fragments";


describe("ButtonSaibaMais", () => {

    /* ==================================================
       RENDERIZAÇÃO
    ================================================== */

    it("deve renderizar o botão corretamente", () => {

        render(<ButtonSaibaMais />);

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        expect(button).toBeInTheDocument();

    });


    /* ==================================================
       TEXTO PADRÃO
    ================================================== */

    it("deve renderizar o texto padrão 'Saiba mais'", () => {

        render(<ButtonSaibaMais />);

        expect(
            screen.getByText("Saiba mais")
        ).toBeInTheDocument();

    });


    /* ==================================================
       TEXTO PERSONALIZADO
    ================================================== */

    it("deve renderizar um texto personalizado quando informado", () => {

        render(
            <ButtonSaibaMais text="Conheça mais" />
        );

        expect(
            screen.getByRole("button", {
                name: "Conheça mais",
            })
        ).toBeInTheDocument();

    });


    /* ==================================================
       NÃO DEVE RENDERIZAR TEXTO PADRÃO
       QUANDO UM TEXTO PERSONALIZADO FOR INFORMADO
    ================================================== */

    it("não deve renderizar o texto padrão quando um texto personalizado for informado", () => {

        render(
            <ButtonSaibaMais text="Ver detalhes" />
        );

        expect(
            screen.queryByText("Saiba mais")
        ).not.toBeInTheDocument();

        expect(
            screen.getByText("Ver detalhes")
        ).toBeInTheDocument();

    });


    /* ==================================================
       CLICK
    ================================================== */

    it("deve executar o onClick ao clicar no botão", async () => {

        const handleClick = vi.fn();

        const { default: userEvent } = await import(
            "@testing-library/user-event"
        );

        const user = userEvent.setup();

        render(
            <ButtonSaibaMais onClick={handleClick} />
        );

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        await user.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);

    });


    /* ==================================================
       SEM ONCLICK
    ================================================== */

    it("deve funcionar normalmente quando onClick não for informado", async () => {

        const { default: userEvent } = await import(
            "@testing-library/user-event"
        );

        const user = userEvent.setup();

        render(<ButtonSaibaMais />);

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        await user.click(button);

        expect(button).toBeInTheDocument();

    });


    /* ==================================================
       CLASSNAME
    ================================================== */

    it("deve aplicar uma classe personalizada ao botão", () => {

        render(
            <ButtonSaibaMais className="meu-botao" />
        );

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        expect(button).toHaveClass("buttonSaibaMais");
        expect(button).toHaveClass("meu-botao");

    });


    /* ==================================================
       ÍCONE DE SETA
    ================================================== */

    it("deve renderizar o ícone de seta", () => {

        render(<ButtonSaibaMais />);

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        const icons = button.querySelectorAll("img");

        expect(icons).toHaveLength(2);

        expect(icons[0]).toHaveClass("iconArrow");

    });


    /* ==================================================
       ÍCONE CIRCULAR
    ================================================== */

    it("deve renderizar o ícone circular", () => {

        render(<ButtonSaibaMais />);

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        const icons = button.querySelectorAll("img");

        expect(icons).toHaveLength(2);

        expect(icons[1]).toHaveClass("iconCircle");

    });


    /* ==================================================
       ÍCONES SEM ALT
    ================================================== */

    it("deve manter os ícones como elementos decorativos", () => {

        render(<ButtonSaibaMais />);

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        const icons = button.querySelectorAll("img");

        icons.forEach((icon) => {

            expect(icon).toHaveAttribute("alt", "");

        });

    });


    /* ==================================================
       ESTRUTURA DO BOTÃO
    ================================================== */

    it("deve renderizar o container dos ícones", () => {

        render(<ButtonSaibaMais />);

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        const iconContainer = button.querySelector(
            ".buttonSaibaMaisIcon"
        );

        expect(iconContainer).toBeInTheDocument();

    });


    /* ==================================================
       CLASSE PADRÃO
    ================================================== */

    it("deve sempre manter a classe padrão buttonSaibaMais", () => {

        render(
            <ButtonSaibaMais className="classe-extra" />
        );

        const button = screen.getByRole("button", {
            name: "Saiba mais",
        });

        expect(button).toHaveClass("buttonSaibaMais");

    });

});