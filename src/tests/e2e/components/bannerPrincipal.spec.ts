import { test, expect } from "@playwright/test";

test.describe("Página inicial — Banner Principal", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar o banner principal", async ({ page }) => {

        const banner = page.locator(".containerBannerOne");

        await expect(banner).toBeVisible();
    });


    // ==================================================
    // TÍTULO
    // ==================================================

    test("deve apresentar o título principal", async ({ page }) => {

        const title = page.getByRole("heading", {
            level: 1,
            name: /CONECTAMOS NEGÓCIOS, MOVEMOS RESULTADOS/i,
        });

        await expect(title).toBeVisible();
    });


    // ==================================================
    // DESCRIÇÃO
    // ==================================================

    test("deve apresentar a descrição do banner", async ({ page }) => {

        const banner = page.locator(".containerBannerOne");

        await expect(
            banner.getByText(
                /Soluções completas em distribuição e logística/i
            )
        ).toBeVisible();
    });


    // ==================================================
    // BOTÃO
    // ==================================================

    test("deve apresentar o botão FALE CONOSCO", async ({ page }) => {

        const banner = page.locator(".containerBannerOne");

        const button = banner.getByRole("button", {
            name: "FALE CONOSCO",
        });

        await expect(button).toBeVisible();
    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve navegar para a página de contato", async ({ page }) => {

        const banner = page.locator(".containerBannerOne");

        const button = banner.getByRole("button", {
            name: "FALE CONOSCO",
        });

        await button.click();

        await expect(page).toHaveURL(/\/contato$/);
    });


    // ==================================================
    // IMAGEM
    // ==================================================

    test("deve apresentar a imagem principal do banner", async ({ page }) => {

        const banner = page.locator(".containerBannerOne");

        const image = banner.getByRole("img", {
            name: "JWC Distribuição e Logística",
        });

        await expect(image).toBeVisible();
    });

});