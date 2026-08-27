import { test, expect } from "@playwright/test";

test.describe("SectionFour — Distribuição e segmentos", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar a seção", async ({ page }) => {

        const section = page.locator(".containerSectionFour");

        await expect(section).toBeVisible();
    });


    // ==================================================
    // IMAGEM
    // ==================================================

    test("deve apresentar a imagem do centro de distribuição", async ({
        page,
    }) => {

        const section = page.locator(".containerSectionFour");

        await expect(
            section.getByRole("img", {
                name: "Centro de distribuição",
            })
        ).toBeVisible();
    });


    // ==================================================
    // CONTEÚDO
    // ==================================================

    test("deve apresentar os segmentos da JWC", async ({ page }) => {
        const firstGroup = page
            .locator(".containerSectionFour .marqueeGroup")
            .first();

        const segmentos = [
            "DISTRIBUIDORES",
            "AUTO SERVIÇO",
            "VAREJO",
            "FOOD SERVICE",
            "ATACADO",
        ];

        for (const segmento of segmentos) {
            const item = firstGroup
                .locator(".marqueeItem")
                .filter({ hasText: segmento });

            await expect(item).toHaveCount(3);
        }
    });


    test("deve apresentar o título da seção", async ({ page }) => {

        const section = page.locator(".containerSectionFour");

        await expect(
            section.getByRole("heading", {
                name: "Conectando produtos, negócios e oportunidades.",
            })
        ).toBeVisible();
    });


    // ==================================================
    // BOTÃO
    // ==================================================

    test("deve apresentar o botão Fale conosco", async ({ page }) => {

        const section = page.locator(".containerSectionFour");

        await expect(
            section.getByRole("button", {
                name: "Fale conosco",
            })
        ).toBeVisible();
    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve navegar para contato ao clicar em Fale conosco", async ({
        page,
    }) => {

        const section = page.locator(".containerSectionFour");

        await section.getByRole("button", {
            name: "Fale conosco",
        }).click();

        await expect(page).toHaveURL(/\/contato$/);
    });


    // ==================================================
    // MARQUEE
    // ==================================================

    test("deve apresentar os grupos do marquee", async ({ page }) => {

        const section = page.locator(".containerSectionFour");

        const groups = section.locator(".marqueeGroup");

        await expect(groups).toHaveCount(2);
    });

    // ==================================================
    // ACESSIBILIDADE
    // ==================================================

    test("deve ocultar o segundo grupo do marquee para leitores de tela", async ({
        page,
    }) => {

        const section = page.locator(".containerSectionFour");

        const secondGroup = section
            .locator(".marqueeGroup")
            .nth(1);

        await expect(secondGroup).toHaveAttribute(
            "aria-hidden",
            "true"
        );
    });

});