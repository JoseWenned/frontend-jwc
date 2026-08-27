import { test, expect } from "@playwright/test";

test.describe("MobileMenu — comportamento e navegação", () => {

    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({
            width: 390,
            height: 844,
        });

        await page.goto("/");
    });


    // ==================================================
    // ABERTURA
    // ==================================================

    test("deve abrir o menu mobile", async ({ page }) => {

        const menuButton = page.getByRole("button", {
            name: "Abrir menu",
        });

        await expect(menuButton).toBeVisible();

        await menuButton.click();

        const mobileMenu = page.locator(".mobileMenu");

        await expect(mobileMenu).toBeVisible();
    });


    // ==================================================
    // BOTÃO FECHAR
    // ==================================================

    test("deve apresentar o botão para fechar o menu", async ({ page }) => {

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const mobileMenu = page.locator(".mobileMenu");

        await expect(
            mobileMenu.getByRole("button", {
                name: "Fechar menu",
            })
        ).toBeVisible();
    });


    // ==================================================
    // LOGO
    // ==================================================

    test("deve apresentar a identidade visual da JWC", async ({ page }) => {

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const mobileMenu = page.locator(".mobileMenu");

        await expect(
            mobileMenu.getByRole("img", {
                name: "JWC Distribuição e Logística",
            })
        ).toBeVisible();

        await expect(
            mobileMenu.getByText("DISTRIBUIÇÃO & LOGÍSTICA", {
                exact: true,
            })
        ).toBeVisible();
    });


    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve apresentar os links de navegação", async ({ page }) => {

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const navigation = page.locator(
            ".mobileMenu__navigation"
        );

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
    // NAVEGAÇÃO PARA CONTATO
    // ==================================================

    test("deve navegar para contato", async ({ page }) => {

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const navigation = page.locator(
            ".mobileMenu__navigation"
        );

        await navigation.getByRole("link", {
            name: "Contato",
        }).click();

        await expect(page).toHaveURL(/\/contato$/);
    });


    // ==================================================
    // FECHAMENTO PELO BOTÃO
    // ==================================================

    test("deve fechar o menu pelo botão fechar", async ({ page }) => {

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const mobileMenu = page.locator(".mobileMenu");

        await expect(mobileMenu).toBeVisible();

        await mobileMenu.getByRole("button", {
            name: "Fechar menu",
        }).click();

        await expect(mobileMenu).toBeHidden();
    });


    // ==================================================
    // FECHAMENTO PELO OVERLAY
    // ==================================================

    test("deve fechar o menu ao clicar no overlay", async ({ page }) => {

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const mobileMenu = page.locator(".mobileMenu");

        await expect(mobileMenu).toBeVisible();

        await mobileMenu.locator(
            ".mobileMenu__overlay"
        ).click({
            position: {
                x: 10,
                y: 10,
            },
        });

        await expect(mobileMenu).toBeHidden();
    });


    // ==================================================
    // REDES SOCIAIS
    // ==================================================

    test("deve apresentar as redes sociais", async ({ page }) => {

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const social = page.locator(
            ".mobileMenu__social"
        );

        await expect(
            social.getByRole("link", {
                name: "Facebook",
            })
        ).toBeVisible();

        await expect(
            social.getByRole("link", {
                name: "Instagram",
            })
        ).toBeVisible();

        await expect(
            social.getByRole("link", {
                name: "LinkedIn",
            })
        ).toBeVisible();
    });


    // ==================================================
    // RODAPÉ
    // ==================================================

    test("deve apresentar o rodapé do menu", async ({ page }) => {

        await page.getByRole("button", {
            name: "Abrir menu",
        }).click();

        const mobileMenu = page.locator(".mobileMenu");

        await expect(
            mobileMenu.getByText(
                "© 2026 JWC Distribuição & Logística"
            )
        ).toBeVisible();
    });

});