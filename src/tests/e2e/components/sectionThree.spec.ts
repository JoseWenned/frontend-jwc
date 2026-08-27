import { test, expect } from "@playwright/test";

test.describe("SectionThree — Missão, Visão, Valores e área de atuação", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar a seção", async ({ page }) => {

        const section = page.locator(".containerSectionThree");

        await expect(section).toBeVisible();
    });


    // ==================================================
    // MISSÃO • VISÃO • VALORES
    // ==================================================

    test("deve apresentar os três artigos", async ({ page }) => {

        const section = page.locator(".containerSectionThree");

        const articles = section.locator(
            ".articleSectionThree"
        );

        await expect(articles).toHaveCount(3);
    });


    test("deve apresentar Missão, Visão e Valores", async ({ page }) => {

        const section = page.locator(".containerSectionThree");

        const titulos = [
            "MISSÃO",
            "VISÃO",
            "VALORES",
        ];

        for (const titulo of titulos) {

            await expect(
                section.getByRole("heading", {
                    name: titulo,
                    exact: true,
                })
            ).toBeVisible();
        }
    });


    // ==================================================
    // TEXTOS
    // ==================================================

    test("deve apresentar o conteúdo da Missão", async ({ page }) => {

        const article = page
            .locator(".articleSectionThree")
            .filter({
                has: page.getByRole("heading", {
                    name: "MISSÃO",
                    exact: true,
                }),
            });

        await expect(article).toContainText(
            "Conectar marcas e produtos aos mercados com eficiência, organização e confiança"
        );

        await expect(article).toContainText(
            "fortalecem nossos parceiros e impulsionam seus negócios"
        );
    });


    test("deve apresentar o conteúdo da Visão", async ({ page }) => {

        const article = page
            .locator(".articleSectionThree")
            .filter({
                has: page.getByRole("heading", {
                    name: "VISÃO",
                    exact: true,
                }),
            });

        await expect(article).toContainText(
            "Ser referência em distribuição e logística no Nordeste"
        );

        await expect(article).toContainText(
            "construção de relações duradouras com clientes, fornecedores e parceiros"
        );
    });


    test("deve apresentar o conteúdo dos Valores", async ({ page }) => {

        const article = page
            .locator(".articleSectionThree")
            .filter({
                has: page.getByRole("heading", {
                    name: "VALORES",
                    exact: true,
                }),
            });

        await expect(article).toContainText(
            "confiança, comprometimento, ética, transparência, excelência"
        );

        await expect(article).toContainText(
            "construir relações sólidas e gerar valor para toda a cadeia comercial"
        );
    });


    // ==================================================
    // ÍCONES
    // ==================================================

    test("deve apresentar um ícone em cada artigo", async ({ page }) => {

        const section = page.locator(".containerSectionThree");

        const articles = section.locator(
            ".articleSectionThree"
        );

        await expect(articles).toHaveCount(3);

        for (let i = 0; i < 3; i++) {

            await expect(
                articles
                    .nth(i)
                    .locator(".iconSectionThree")
            ).toBeVisible();
        }
    });


    // ==================================================
    // MAPA
    // ==================================================

    test("deve apresentar o mapa da área de atuação", async ({
        page,
    }) => {

        const section = page.locator(".containerSectionThree");

        await expect(
            section.getByRole("img", {
                name: "Mapa representando a área de atuação da JWC",
            })
        ).toBeVisible();
    });


    // ==================================================
    // ESTRUTURA DO MAPA
    // ==================================================

    test("deve apresentar o mapa dentro do container correto", async ({
        page,
    }) => {

        const section = page.locator(".containerSectionThree");

        const mapContainer = section.locator(
            ".containerSectionThreeContentMap"
        );

        await expect(mapContainer).toBeVisible();

        await expect(
            mapContainer.locator(".imgSectionThree")
        ).toBeVisible();
    });


    // ==================================================
    // ACESSIBILIDADE
    // ==================================================

    test("deve possuir texto alternativo no mapa", async ({
        page,
    }) => {

        const section = page.locator(".containerSectionThree");

        const mapa = section.locator(
            ".imgSectionThree"
        );

        await expect(mapa).toHaveAttribute(
            "alt",
            "Mapa representando a área de atuação da JWC"
        );
    });

});