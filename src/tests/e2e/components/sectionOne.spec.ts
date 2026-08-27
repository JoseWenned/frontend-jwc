import { test, expect } from "@playwright/test";

test.describe("SectionOne — Marcas parceiras", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar a seção de marcas", async ({ page }) => {

        const section = page.locator(".sectionOne");

        await expect(section).toBeVisible();
    });


    // ==================================================
    // IMAGENS
    // ==================================================

    test("deve apresentar as cinco marcas", async ({ page }) => {

        const section = page.locator(".sectionOne");

        const marcas = [
            "Kipolpas",
            "Puro Sabor",
            "Amazon Açaí",
            "Peter Frut",
            "Palamaz",
        ];

        for (const marca of marcas) {

            await expect(
                section.getByRole("img", {
                    name: marca,
                })
            ).toBeVisible();
        }
    });


    // ==================================================
    // QUANTIDADE
    // ==================================================

    test("deve apresentar exatamente cinco imagens de marcas", async ({
        page,
    }) => {

        const section = page.locator(".sectionOne");

        const imagens = section.locator(
            ".sectionOneImage"
        );

        await expect(imagens).toHaveCount(5);
    });


    // ==================================================
    // ACESSIBILIDADE
    // ==================================================

    test("deve possuir texto alternativo nas imagens", async ({ page }) => {

        const section = page.locator(".sectionOne");

        const imagens = section.locator(".sectionOneImage");

        await expect(imagens).toHaveCount(5);

        const marcas = [
            "Kipolpas",
            "Puro Sabor",
            "Amazon Açaí",
            "Peter Frut",
            "Palamaz",
        ];

        for (let i = 0; i < marcas.length; i++) {

            await expect(imagens.nth(i))
                .toHaveAttribute("alt", marcas[i]);
        }
    });


    // ==================================================
    // ESTRUTURA
    // ==================================================

    test("deve apresentar cada marca dentro de seu item", async ({
        page,
    }) => {

        const section = page.locator(".sectionOne");

        const items = section.locator(".sectionOneItem");

        await expect(items).toHaveCount(5);

        for (let i = 0; i < 5; i++) {

            await expect(
                items.nth(i).locator(".sectionOneImage")
            ).toBeVisible();
        }
    });

});