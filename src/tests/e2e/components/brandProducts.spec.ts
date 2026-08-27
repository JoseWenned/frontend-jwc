import { test, expect } from "@playwright/test";

test.describe("BrandProdutos — Produtos da marca", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/produtos");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar a seção de produtos", async ({ page }) => {

        const section = page.locator(".brandProduct").first();

        await expect(section).toBeVisible();
    });


    // ==================================================
    // MARCA
    // ==================================================

    test("deve apresentar o nome da marca", async ({ page }) => {

        await expect(
            page.locator(".brandProductBrand").first()
        ).toBeVisible();
    });


    // ==================================================
    // PRODUTO
    // ==================================================

    test("deve apresentar o primeiro produto", async ({ page }) => {

        const title = page
            .locator(".brandProductTitle")
            .first();

        await expect(title).toBeVisible();

        await expect(title).not.toBeEmpty();
    });


    test("deve apresentar a descrição do produto", async ({ page }) => {

        const description = page
            .locator(".brandProductDescription")
            .first();

        await expect(description).toBeVisible();

        await expect(description).not.toBeEmpty();
    });


    // ==================================================
    // INFORMAÇÕES
    // ==================================================

    test("deve apresentar as informações adicionais do produto", async ({
        page,
    }) => {

        const information = page
            .locator(".brandProductInformation")
            .first();

        await expect(information).toBeVisible();

        await expect(
            information.locator("li").first()
        ).toBeVisible();
    });


    // ==================================================
    // IMAGEM
    // ==================================================

    test("deve apresentar a imagem do produto", async ({ page }) => {

        const image = page
            .locator(".brandProductImage")
            .first();

        await expect(image).toBeVisible();

        await expect(image).toHaveAttribute(
            "alt",
            /.+/
        );
    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve avançar para o próximo produto", async ({ page }) => {

        const currentCounter = page
            .locator(".brandProductCounterCurrent")
            .first();

        const nextButton = page.getByRole("button", {
            name: "Próximo produto",
        }).first();

        await expect(currentCounter).toHaveText("01");

        await nextButton.click();

        await expect(currentCounter).toHaveText("02");
    });


    test("deve voltar para o produto anterior", async ({ page }) => {

        const currentCounter = page
            .locator(".brandProductCounterCurrent")
            .first();

        const totalCounter = page
            .locator(".brandProductCounterTotal")
            .first();

        const previousButton = page.getByRole("button", {
            name: "Produto anterior",
        }).first();

        await expect(currentCounter).toHaveText("01");

        await previousButton.click();

        const total = await totalCounter.textContent();

        await expect(currentCounter).toHaveText(total ?? "");
    });


    // ==================================================
    // CONTADOR
    // ==================================================

    test("deve apresentar o contador de produtos", async ({ page }) => {

        const counter = page
            .locator(".brandProductCounter")
            .first();

        await expect(counter).toBeVisible();

        await expect(counter).toContainText("/");
    });

});