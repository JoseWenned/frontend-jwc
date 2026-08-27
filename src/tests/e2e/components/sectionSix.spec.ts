import { test, expect } from "@playwright/test";

test.describe("SectionSix — Chamada para ação", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar a seção", async ({ page }) => {

        const section = page.locator(".sectionSix");

        await expect(section).toBeVisible();
    });


    // ==================================================
    // CONTEÚDO
    // ==================================================

    test("deve apresentar o título da seção", async ({ page }) => {

        const section = page.locator(".sectionSix");

        await expect(
            section.getByRole("heading", {
                name: "FAÇA PARTE DESSA HISTÓRIA. SEJA JWC LOG.",
            })
        ).toBeVisible();
    });


    // ==================================================
    // BOTÃO
    // ==================================================

    test("deve apresentar o botão Fale conosco", async ({ page }) => {

        const section = page.locator(".sectionSix");

        await expect(
            section.getByRole("button", {
                name: "FALE CONOSCO",
            })
        ).toBeVisible();
    });


    // ==================================================
    // IMAGEM DE FUNDO
    // ==================================================

    test("deve apresentar a imagem de fundo da seção", async ({ page }) => {

        const section = page.locator(".sectionSix");

        const backgroundImage = await section.evaluate((element) => {
            return window.getComputedStyle(element).backgroundImage;
        });

        expect(backgroundImage).not.toBe("none");
        expect(backgroundImage).toContain("melhores-transportadoras");
    });


    // ==================================================
    // ESTRUTURA
    // ==================================================

    test("deve apresentar o conteúdo e o botão dentro do container", async ({
        page,
    }) => {

        const section = page.locator(".sectionSix");

        const container = section.locator(".sectionSixContainer");

        await expect(container).toBeVisible();

        await expect(
            container.locator(".sectionSixContent")
        ).toBeVisible();

        await expect(
            container.locator(".sectionSixButton")
        ).toBeVisible();
    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve navegar para contato ao clicar em Fale conosco", async ({
        page,
    }) => {

        const section = page.locator(".sectionSix");

        await section.getByRole("button", {
            name: "FALE CONOSCO",
        }).click();

        await expect(page).toHaveURL(/\/contato$/);
    });

});