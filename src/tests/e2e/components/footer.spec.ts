import { test, expect } from "@playwright/test";

test.describe("Footer — Rodapé", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar o rodapé", async ({ page }) => {

        const footer = page.locator(".containerFooter");

        await expect(footer).toBeVisible();
    });


    // ==================================================
    // LOGO
    // ==================================================

    test("deve apresentar a logo da JWC", async ({ page }) => {

        const logo = page.locator(".imageLogoFooter");

        await expect(logo).toBeVisible();

        await expect(logo).toHaveAttribute(
            "alt",
            "Logo"
        );
    });


    // ==================================================
    // MATRIZ
    // ==================================================

    test("deve apresentar as informações da matriz", async ({ page }) => {

        const footer = page.locator(".containerFooter");

        await expect(
            footer.getByRole("heading", {
                name: "Matriz:",
            })
        ).toBeVisible();

        await expect(
            footer.getByText(
                "Vereador Efésio Costa | Nº 496"
            )
        ).toBeVisible();
    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve apresentar os links principais de navegação", async ({
        page,
    }) => {

        const footer = page.locator(".containerFooter");

        await expect(
            footer.getByRole("link", {
                name: "Início",
            })
        ).toBeVisible();

        await expect(
            footer.getByRole("link", {
                name: "Sobre Nós",
            })
        ).toBeVisible();

        await expect(
            footer.getByRole("link", {
                name: "Produtos",
            })
        ).toBeVisible();

        await expect(
            footer.getByRole("link", {
                name: "Contato",
            })
        ).toBeVisible();
    });


    test("deve apontar os links de navegação para as rotas corretas", async ({
        page,
    }) => {

        const footer = page.locator(".containerFooter");

        await expect(
            footer.getByRole("link", {
                name: "Início",
            })
        ).toHaveAttribute("href", "/");

        await expect(
            footer.getByRole("link", {
                name: "Sobre Nós",
            })
        ).toHaveAttribute("href", "/sobre-nos");

        await expect(
            footer.getByRole("link", {
                name: "Produtos",
            })
        ).toHaveAttribute("href", "/produtos");

        await expect(
            footer.getByRole("link", {
                name: "Contato",
            })
        ).toHaveAttribute("href", "/contato");
    });


    // ==================================================
    // CONTATO
    // ==================================================

    test("deve apresentar as informações de contato", async ({ page }) => {

        const footer = page.locator(".containerFooter");

        await expect(
            footer.getByRole("heading", {
                name: "Contato:",
            })
        ).toBeVisible();

        await expect(
            footer.getByText(
                "+55 (88) 9 8896-5616"
            )
        ).toBeVisible();

        await expect(
            footer.getByText(
                "jwcdistribuicaoelogisticaltda@gmail.com"
            )
        ).toBeVisible();
    });


    // ==================================================
    // REDES SOCIAIS
    // ==================================================

    test("deve apresentar o link do Instagram", async ({ page }) => {

        const instagram = page
            .locator(".containerFooter")
            .getByRole("link")
            .filter({
                has: page.getByAltText("Instagram"),
            });

        await expect(instagram).toBeVisible();

        await expect(instagram).toHaveAttribute(
            "href",
            "https://www.instagram.com/jwc.log/"
        );

        await expect(instagram).toHaveAttribute(
            "target",
            "_blank"
        );
    });


    // ==================================================
    // DIREITOS AUTORAIS
    // ==================================================

    test("deve apresentar o aviso de direitos autorais", async ({
        page,
    }) => {

        await expect(
            page.getByText(
                "© 2026 JWC Distribuição e Logística. Todos os direitos reservados."
            )
        ).toBeVisible();
    });

});