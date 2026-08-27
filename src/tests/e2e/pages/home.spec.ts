import { test, expect } from "@playwright/test";

test.describe("HomePage — JWC Distribuição & Logística", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    // ==================================================
    // ESTRUTURA PRINCIPAL
    // ==================================================

    test("deve apresentar a estrutura principal da página", async ({ page }) => {

        await expect(
            page.getByRole("navigation")
        ).toBeVisible();

        await expect(
            page.getByRole("heading", {
                name: /CONECTAMOS NEGÓCIOS, MOVEMOS RESULTADOS/i,
            })
        ).toBeVisible();

        await expect(
            page.locator("footer")
        ).toBeVisible();

        await expect(
            page.getByRole("link", {
                name: "Fale conosco pelo WhatsApp",
            })
        ).toBeVisible();
    });

    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve apresentar os links principais de navegação", async ({ page }) => {

        const navigation = page.getByRole("navigation");

        await expect(
            navigation.getByRole("link", {
                name: "Início",
            })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", {
                name: "Sobre nós",
            })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", {
                name: "Produtos",
            })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", {
                name: "Contato",
            })
        ).toBeVisible();
    });

    // ==================================================
    // NAVEGAÇÃO — ROTAS
    // ==================================================

    test("deve navegar para Sobre Nós", async ({ page }) => {

        await page.getByRole("navigation")
            .getByRole("link", {
                name: "Sobre nós",
            })
            .click();

        await expect(page).toHaveURL(/\/sobre-nos$/);
    });

    test("deve navegar para Produtos", async ({ page }) => {

        await page.getByRole("navigation")
            .getByRole("link", {
                name: "Produtos",
            })
            .click();

        await expect(page).toHaveURL(/\/produtos$/);
    });

    test("deve navegar para Contato", async ({ page }) => {

        await page.getByRole("navigation")
            .getByRole("link", {
                name: "Contato",
            })
            .click();

        await expect(page).toHaveURL(/\/contato$/);
    });

    // ==================================================
    // WHATSAPP
    // ==================================================

    test("deve apresentar o botão flutuante do WhatsApp", async ({ page }) => {

        await expect(
            page.getByRole("link", {
                name: "Fale conosco pelo WhatsApp",
            })
        ).toBeVisible();
    });

});