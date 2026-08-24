import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { BannnerPrincipal } from "./bannerPrincipal.component";


const LocationDisplay = () => {

    const location = useLocation();

    return (
        <span data-testid="current-location">
            {location.pathname}
        </span>
    );

};


const renderBanner = () => {

    return render(
        <MemoryRouter initialEntries={["/"]}>
            <BannnerPrincipal />

            <LocationDisplay />
        </MemoryRouter>
    );

};


describe("BannnerPrincipal", () => {

    it("deve renderizar o banner principal corretamente", () => {

        renderBanner();

        expect(
            screen.getByRole("img", {
                name: "JWC Distribuição e Logística",
            })
        ).toBeInTheDocument();

    });


    it("deve renderizar a imagem principal do banner", () => {

        renderBanner();

        const bannerImage = screen.getByRole("img", {
            name: "JWC Distribuição e Logística",
        });

        expect(bannerImage).toBeInTheDocument();

        expect(bannerImage).toHaveAttribute("src");

        expect(bannerImage).toHaveAttribute(
            "alt",
            "JWC Distribuição e Logística"
        );

    });


    it("deve renderizar o título principal", () => {

        renderBanner();

        const title = screen.getByRole("heading", {
            level: 1,
        });

        expect(title).toBeInTheDocument();

        expect(title).toHaveTextContent("CONECTAMOS");
        expect(title).toHaveTextContent("NEGÓCIOS,");
        expect(title).toHaveTextContent("MOVEMOS");
        expect(title).toHaveTextContent("RESULTADOS.");

    });


    it("deve renderizar a descrição do banner", () => {

        renderBanner();

        expect(
            screen.getByText(
                /Soluções completas em distribuição e logística/i
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                /empresas que querem crescer/i
            )
        ).toBeInTheDocument();

    });


    it("deve renderizar o botão Fale Conosco", () => {

        renderBanner();

        expect(
            screen.getByRole("button", {
                name: "FALE CONOSCO",
            })
        ).toBeInTheDocument();

    });


    it("deve navegar para a página de contato ao clicar em Fale Conosco", async () => {

        const user = userEvent.setup();

        renderBanner();

        const button = screen.getByRole("button", {
            name: "FALE CONOSCO",
        });

        await user.click(button);

        expect(
            screen.getByTestId("current-location")
        ).toHaveTextContent("/contato");

    });

});