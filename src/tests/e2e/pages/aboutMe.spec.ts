import { test, expect } from "@playwright/test";

test.describe("SobreNosPage — JWC Distribuição & Logística", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/sobre-nos");
    });


    // ==================================================
    // HERO
    // ==================================================

    test("deve apresentar o hero da página", async ({ page }) => {

        const hero = page.locator(".sobreNosHero");

        await expect(hero).toBeVisible();

        await expect(
            hero.getByRole("img", {
                name: "Banner Sobre Nós",
            })
        ).toBeVisible();

        await expect(
            hero.getByText(
                "Distribuição que conecta negócios",
                { exact: true }
            )
        ).toBeVisible();

        await expect(
            hero.getByRole("heading", {
                name: "A JWC Distribuição & Logística",
            })
        ).toBeVisible();
    });


    // ==================================================
    // APRESENTAÇÃO
    // ==================================================

    test("deve apresentar a seção de apresentação", async ({ page }) => {

        const section = page.locator(".sobreNosPresentation");

        await expect(section).toBeVisible();

        await expect(
            section.getByRole("heading", {
                name: "Nossos clientes e parceiros em boas mãos",
            })
        ).toBeVisible();

        await expect(
            section.getByText(
                "Na JWC Distribuição & Logística, acreditamos que confiança é o principal ingrediente de uma parceria duradoura.",
                { exact: false }
            )
        ).toBeVisible();
    });


    // ==================================================
    // BOTÃO LINKEDIN
    // ==================================================

    test("deve apresentar o botão do LinkedIn", async ({ page }) => {

        await expect(
            page.getByRole("button", {
                name: /Conheça a JWC no LinkedIn/i,
            })
        ).toBeVisible();
    });


    // ==================================================
    // COMERCIAL
    // ==================================================

    test("deve apresentar a seção Comercial", async ({ page }) => {

        const section = page.locator("#comercial");

        await expect(section).toBeVisible();

        await expect(
            section.getByRole("img", {
                name: "Comercial JWC",
            })
        ).toBeVisible();

        await expect(
            section.getByRole("heading", {
                name: "Comercial",
            })
        ).toBeVisible();

        await expect(
            section.getByRole("heading", {
                name: "Conectando negócios e oportunidades",
            })
        ).toBeVisible();

        await expect(
            section.getByText(
                "Nossa atuação comercial vai além da venda de produtos.",
                { exact: false }
            )
        ).toBeVisible();
    });


    // ==================================================
    // NAVEGAÇÃO — COMERCIAL
    // ==================================================

    test("deve navegar para produtos ao clicar em Conheça nossas marcas e parceiros", async ({
        page,
    }) => {

        const section = page.locator("#comercial");

        await section.getByRole("button", {
            name: /Conheça nossas marcas e parceiros/i,
        }).click();

        await expect(page).toHaveURL(/\/produtos#marcas$/);
    });


    // ==================================================
    // OPERAÇÃO E LOGÍSTICA
    // ==================================================

    test("deve apresentar a seção de Operação e Logística", async ({
        page,
    }) => {

        const section = page.locator("#operacaoelogistica");

        await expect(section).toBeVisible();

        await expect(
            section.getByRole("img", {
                name: "Operação e Logística JWC",
            })
        ).toBeVisible();

        await expect(
            section.getByRole("heading", {
                name: "Operação e Logística",
            })
        ).toBeVisible();

        await expect(
            section.getByRole("heading", {
                name: "Eficiência em cada etapa da operação",
            })
        ).toBeVisible();

        await expect(
            section.getByText(
                "Nossa operação é estruturada para que produtos e pedidos avancem de forma organizada, segura e eficiente.",
                { exact: false }
            )
        ).toBeVisible();
    });


    // ==================================================
    // NAVEGAÇÃO — LOGÍSTICA
    // ==================================================

    test("deve navegar para contato ao clicar em Fale com a JWC", async ({
        page,
    }) => {

        const section = page.locator("#operacaoelogistica");

        await section.getByRole("button", {
            name: "Fale com a JWC",
        }).click();

        await expect(page).toHaveURL(/\/contato$/);
    });


    // ==================================================
    // ÂNCORAS
    // ==================================================

    test("deve permitir acesso direto à seção Comercial", async ({
        page,
    }) => {

        await page.goto("/sobre-nos#comercial");

        await expect(
            page.locator("#comercial")
        ).toBeVisible();

        await expect(page).toHaveURL(/\/sobre-nos#comercial$/);
    });


    test("deve permitir acesso direto à seção de Operação e Logística", async ({
        page,
    }) => {

        await page.goto("/sobre-nos#operacaoelogistica");

        await expect(
            page.locator("#operacaoelogistica")
        ).toBeVisible();

        await expect(page).toHaveURL(
            /\/sobre-nos#operacaoelogistica$/
        );
    });


    // ==================================================
    // ESTRUTURA GERAL
    // ==================================================

    test("deve apresentar Header, Footer e WhatsApp", async ({ page }) => {

        // Header
        await expect(
            page.getByRole("navigation")
        ).toBeVisible();

        // Footer
        await expect(
            page.getByRole("contentinfo")
        ).toBeVisible();

        // WhatsApp
        await expect(
            page.getByRole("link", {
                name: "Fale conosco pelo WhatsApp",
            })
        ).toBeVisible();
    });

});