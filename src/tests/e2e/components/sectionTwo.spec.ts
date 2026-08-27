import { test, expect } from "@playwright/test";

test.describe("SectionTwo — Parceiro ideal", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/", {
            waitUntil: "domcontentloaded",
        });
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar a seção", async ({ page }) => {

        const section = page.locator(".containerParceiroIdeal");

        await expect(section).toBeVisible();
    });


    // ==================================================
    // TÍTULO
    // ==================================================

    test("deve apresentar o título da seção", async ({ page }) => {

        const section = page.locator(".containerParceiroIdeal");

        await expect(
            section.getByRole("heading", {
                level: 2,
                name: "POR QUE A JWC É SEU PARCEIRO E DISTRIBUIDOR IDEAL?",
            })
        ).toBeVisible();
    });


    // ==================================================
    // ARTIGOS
    // ==================================================

    test("deve apresentar os três conteúdos", async ({ page }) => {

        const section = page.locator(".containerParceiroIdeal");

        const articles = section.locator(
            ".articleParceiroIdeal"
        );

        await expect(articles).toHaveCount(3);
    });


    test("deve apresentar os três títulos dos conteúdos", async ({
        page,
    }) => {

        const section = page.locator(".containerParceiroIdeal");

        const titulos = [
            "PARCEIROS COMERCIAIS",
            "ÁREA DE ATUAÇÃO",
            "COMPROMISSO COM NOSSOS CLIENTES",
        ];

        for (const titulo of titulos) {

            await expect(
                section.getByRole("heading", {
                    level: 3,
                    name: titulo,
                    exact: true,
                })
            ).toBeVisible();
        }
    });


    // ==================================================
    // CONTEÚDO
    // ==================================================

    test("deve apresentar o conteúdo de Parceiros Comerciais", async ({
        page,
    }) => {

        const article = page
            .locator(".articleParceiroIdeal")
            .filter({
                has: page.getByRole("heading", {
                    name: "PARCEIROS COMERCIAIS",
                    exact: true,
                }),
            });

        await expect(article).toContainText(
            "Trabalhamos com marcas selecionadas e produtos de qualidade"
        );

        await expect(article).toContainText(
            "portfólio diversificado de polpas, açaí e frutas congeladas"
        );
    });


    test("deve apresentar o conteúdo da Área de Atuação", async ({
        page,
    }) => {

        const article = page
            .locator(".articleParceiroIdeal")
            .filter({
                has: page.getByRole("heading", {
                    name: "ÁREA DE ATUAÇÃO",
                    exact: true,
                }),
            });

        await expect(article).toContainText(
            "Do Ceará para todo o Nordeste"
        );

        await expect(article).toContainText(
            "rede de distribuição cada vez mais ampla e eficiente"
        );
    });


    test("deve apresentar o conteúdo do Compromisso com nossos Clientes", async ({
        page,
    }) => {

        const article = page
            .locator(".articleParceiroIdeal")
            .filter({
                has: page.getByRole("heading", {
                    name: "COMPROMISSO COM NOSSOS CLIENTES",
                    exact: true,
                }),
            });

        await expect(article).toContainText(
            "buscamos construir relações de confiança"
        );

        await expect(article).toContainText(
            "mais segurança e previsibilidade em seus negócios"
        );
    });


    // ==================================================
    // ÍCONES
    // ==================================================

    test("deve apresentar um ícone em cada conteúdo", async ({
        page,
    }) => {

        const section = page.locator(".containerParceiroIdeal");

        const articles = section.locator(
            ".articleParceiroIdeal"
        );

        await expect(articles).toHaveCount(3);

        for (let i = 0; i < 3; i++) {

            await expect(
                articles
                    .nth(i)
                    .locator(".icons")
            ).toBeVisible();
        }
    });


    // ==================================================
    // BOTÃO
    // ==================================================

    test("deve apresentar o botão Saiba mais", async ({ page }) => {

        const section = page.locator(".containerParceiroIdeal");

        await expect(
            section.locator(".containerButtonParceiroIdeal")
        ).toBeVisible();

        await expect(
            section.getByRole("button", {
                name: /Saiba mais/i,
            })
        ).toBeVisible();
    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve navegar para Sobre nós ao clicar em Saiba mais", async ({
        page,
    }) => {

        const section = page.locator(".containerParceiroIdeal");

        await section.getByRole("button", {
            name: /Saiba mais/i,
        }).click();

        await expect(page).toHaveURL(/\/sobre-nos$/);
    });

});