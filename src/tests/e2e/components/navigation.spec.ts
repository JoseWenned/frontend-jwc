import { test, expect } from "@playwright/test";

test.describe("Navigation — navegação principal", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    // ==================================================
    // RENDERIZAÇÃO
    // ==================================================

    test("deve apresentar a navegação principal", async ({ page }) => {

        const navigation = page.getByRole("navigation");

        await expect(navigation).toBeVisible();
    });


    // ==================================================
    // LINKS
    // ==================================================

    test("deve apresentar todos os links principais", async ({ page }) => {

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
    // DESTINOS
    // ==================================================

    test("deve possuir os destinos corretos", async ({ page }) => {

        const navigation = page.getByRole("navigation");

        await expect(
            navigation.getByRole("link", {
                name: "Início",
            })
        ).toHaveAttribute("href", "/");

        await expect(
            navigation.getByRole("link", {
                name: "Sobre nós",
            })
        ).toHaveAttribute("href", "/sobre-nos");

        await expect(
            navigation.getByRole("link", {
                name: "Produtos",
            })
        ).toHaveAttribute("href", "/produtos");

        await expect(
            navigation.getByRole("link", {
                name: "Contato",
            })
        ).toHaveAttribute("href", "/contato");
    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve navegar para Sobre nós", async ({ page }) => {

        const navigation = page.getByRole("navigation");

        await navigation.getByRole("link", {
            name: "Sobre nós",
        }).click();

        await expect(page).toHaveURL(/\/sobre-nos$/);
    });


    test("deve navegar para Produtos", async ({ page }) => {

        const navigation = page.getByRole("navigation");

        await navigation.getByRole("link", {
            name: "Produtos",
        }).click();

        await expect(page).toHaveURL(/\/produtos$/);
    });


    test("deve navegar para Contato", async ({ page }) => {

        const navigation = page.getByRole("navigation");

        await navigation.getByRole("link", {
            name: "Contato",
        }).click();

        await expect(page).toHaveURL(/\/contato$/);
    });


    test("deve retornar para a página inicial", async ({ page }) => {

        await page.goto("/sobre-nos");

        const navigation = page.getByRole("navigation");

        await navigation.getByRole("link", {
            name: "Início",
        }).click();

        await expect(page).toHaveURL(/\/$/);
    });

});