import { test, expect } from "@playwright/test";

test.describe("SectionFive — Nossas soluções", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar a seção de soluções", async ({ page }) => {

        const section = page.locator(".containerSectionFive");

        await expect(section).toBeVisible();
    });


    // ==================================================
    // TÍTULO
    // ==================================================

    test("deve apresentar o título da seção", async ({ page }) => {

        const section = page.locator(".containerSectionFive");

        await expect(
            section.getByText("Nossas soluções", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            section.getByRole("heading", {
                name: "Conheça soluções completas para sua rede",
            })
        ).toBeVisible();
    });


    // ==================================================
    // CARD COMERCIAL
    // ==================================================

    test("deve apresentar o card Comercial", async ({ page }) => {

        const card = page
            .locator(".cardSectionFive")
            .filter({
                has: page.getByRole("heading", {
                    name: "Comercial",
                }),
            });

        await expect(card).toBeVisible();

        await expect(
            card.getByText("01", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            card.getByRole("heading", {
                name: "Comercial",
            })
        ).toBeVisible();

        await expect(
            card.getByText(
                "Na JWC Distribuição & Logística, acreditamos que uma boa parceria começa muito antes da primeira venda.",
                {
                    exact: true,
                }
            )
        ).toBeVisible();

        await expect(
            card.getByText("Saiba mais", {
                exact: true,
            })
        ).toBeVisible();
    });


    // ==================================================
    // CARD LOGÍSTICA
    // ==================================================

    test("deve apresentar o card Logística", async ({ page }) => {

        const card = page
            .locator(".cardSectionFive")
            .filter({
                has: page.getByRole("heading", {
                    name: "Logística",
                }),
            });

        await expect(card).toBeVisible();

        await expect(
            card.getByText("02", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            card.getByRole("heading", {
                name: "Logística",
            })
        ).toBeVisible();

        await expect(
            card.getByText(
                "Nossa operação logística é planejada para garantir eficiência, organização e segurança em cada etapa da distribuição.",
                {
                    exact: true,
                }
            )
        ).toBeVisible();

        await expect(
            card.getByText("Saiba mais", {
                exact: true,
            })
        ).toBeVisible();
    });


    // ==================================================
    // DESTINOS
    // ==================================================

    test("deve possuir os destinos corretos", async ({ page }) => {

        const comercial = page
            .locator(".cardSectionFive")
            .filter({
                has: page.getByRole("heading", {
                    name: "Comercial",
                }),
            });

        const logistica = page
            .locator(".cardSectionFive")
            .filter({
                has: page.getByRole("heading", {
                    name: "Logística",
                }),
            });

        await expect(comercial).toHaveAttribute(
            "href",
            "/sobre-nos#comercial"
        );

        await expect(logistica).toHaveAttribute(
            "href",
            "/sobre-nos#operacaoelogistica"
        );
    });


    // ==================================================
    // ÍCONES
    // ==================================================

    test("deve apresentar os ícones de Saiba mais", async ({ page }) => {

        const section = page.locator(".containerSectionFive");

        const icons = section.getByRole("img", {
            name: "Saiba mais",
        });

        await expect(icons).toHaveCount(2);
    });


    // ==================================================
    // NAVEGAÇÃO — COMERCIAL
    // ==================================================

    test("deve navegar para Comercial", async ({ page }) => {

        const card = page
            .locator(".cardSectionFive")
            .filter({
                has: page.getByRole("heading", {
                    name: "Comercial",
                }),
            });

        await card.click();

        await expect(page).toHaveURL(
            /\/sobre-nos#comercial$/
        );
    });


    // ==================================================
    // NAVEGAÇÃO — LOGÍSTICA
    // ==================================================

    test("deve navegar para Logística", async ({ page }) => {

        const card = page
            .locator(".cardSectionFive")
            .filter({
                has: page.getByRole("heading", {
                    name: "Logística",
                }),
            });

        await card.click();

        await expect(page).toHaveURL(
            /\/sobre-nos#operacaoelogistica$/
        );
    });

});