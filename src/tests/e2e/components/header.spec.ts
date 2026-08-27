import { test, expect } from "@playwright/test";

test.describe("Header — Navegação e comportamento", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar o header", async ({ page }) => {

        const header = page.locator(".containerHeader");

        await expect(header).toBeVisible();
    });

    test("deve apresentar o slogan da JWC", async ({ page }) => {
        const header = page.locator(".containerHeader");

        await expect(
            header.getByRole("img", {
                name: "JWC Distribuição e Logística",
            })
        ).toBeVisible();
    });

    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve apresentar os links principais de navegação", async ({ page }) => {
        const navigation = page.getByRole("navigation");

        await expect(
            navigation.getByRole("link", { name: "Início" })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", { name: "Sobre nós" })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", { name: "Produtos" })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", { name: "Contato" })
        ).toBeVisible();
    });

    test("deve navegar para a página de contato", async ({ page }) => {
        const contato = page
            .getByRole("navigation")
            .getByRole("link", { name: "Contato" });

        await contato.click();

        await expect(page).toHaveURL(/\/contato$/);
    });


    // ==================================================
    // SCROLL
    // ==================================================

    test("deve alterar o estado visual ao rolar a página", async ({
        page,
    }) => {

        const header = page.locator(".containerHeader");

        await expect(header).not.toHaveClass(/scrolled/);

        await page.evaluate(() => {
            window.scrollTo(0, 100);
        });

        await expect(header).toHaveClass(/scrolled/);
    });

    // ==================================================
    // REDES SOCIAIS
    // ==================================================

    test("deve apresentar os links das redes sociais", async ({ page }) => {
        const header = page.locator(".containerHeader");

        await expect(
            header.getByRole("link", { name: "Facebook" })
        ).toBeVisible();

        await expect(
            header.getByRole("link", { name: "LinkedIn" })
        ).toBeVisible();

        await expect(
            header.getByRole("link", { name: "Instagram" })
        ).toBeVisible();
    });

    test("deve apresentar o link correto do Instagram", async ({ page }) => {
        const instagram = page
            .locator(".containerHeader")
            .getByRole("link", { name: "Instagram" });

        await expect(instagram).toHaveAttribute(
            "href",
            "https://www.instagram.com/jwc.log/"
        );
    });


    // ==================================================
    // MENU MOBILE
    // ==================================================

    test("deve abrir o menu mobile", async ({ page }) => {

        await page.setViewportSize({
            width: 390,
            height: 844,
        });

        await page.reload();

        const menuButton = page.getByRole("button", {
            name: "Abrir menu",
        });

        await expect(menuButton).toBeVisible();

        await menuButton.click();

        await expect(
            page.getByRole("button", {
                name: /fechar/i,
            })
        ).toBeVisible();
    });

});