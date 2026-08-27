import { test, expect } from "@playwright/test";

test.describe("ProdutosPage — JWC Distribuição & Logística", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/produtos", {
            waitUntil: "domcontentloaded",
        });
    });

    // ==================================================
    // HERO
    // ==================================================

    test("deve apresentar o hero da página de produtos", async ({ page }) => {

        await expect(
            page.getByText("Nosso portfólio", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            page.getByRole("heading", {
                name: "Produtos",
            })
        ).toBeVisible();

        await expect(
            page.getByText(
                "Conheça as marcas e produtos que fazem parte do portfólio da JWC Distribuição.",
                { exact: true }
            )
        ).toBeVisible();
    });

    // ==================================================
    // MARCAS
    // ==================================================

    test("deve apresentar as marcas do portfólio", async ({ page }) => {

        await expect(
            page.getByText("Kipolpas", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            page.getByText("Puro sabor", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            page.getByText("Amazon", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            page.getByText("Peterfrut", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            page.getByText("Palamaz", {
                exact: true,
            })
        ).toBeVisible();
    });

    // ==================================================
    // PEDIDO
    // ==================================================

    test("deve apresentar a seção para fazer o pedido", async ({ page }) => {

        await expect(
            page.getByText("Se interessou pelos produtos?", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            page.getByRole("button", {
                name: /Faça seu pedido/,
            })
        ).toBeVisible();
    });

    // ==================================================
    // HEADER / FOOTER
    // ==================================================

    test("deve apresentar Header e Footer", async ({ page }) => {

        await expect(
            page.getByRole("navigation")
        ).toBeVisible();

        await expect(
            page.locator("footer")
        ).toBeVisible();
    });

    // ==================================================
    // WHATSAPP
    // ==================================================

    test("deve abrir o WhatsApp ao fazer o pedido", async ({ page }) => {

        const pedidoButton = page.getByRole("button", {
            name: /Faça seu pedido/,
        });

        await page.evaluate(() => {
            window.open = ((url?: string | URL) => {
                window.location.href = String(url);
                return null;
            }) as typeof window.open;
        });

        await pedidoButton.click();

        await expect(page).toHaveURL(/api\.whatsapp\.com\/send/);

        const url = new URL(page.url());

        expect(
            url.searchParams.get("phone")
        ).toBe("5588988965616");

        expect(
            url.searchParams.get("text")
        ).toBe(
            "Olá! Gostaria de conhecer as soluções da JWC Distribuição."
        );
    });

    // ==================================================
    // WHATSAPP FLUTUANTE
    // ==================================================

    test("deve apresentar o WhatsApp flutuante", async ({ page }) => {

        await expect(
            page.getByRole("link", {
                name: "Fale conosco pelo WhatsApp",
            })
        ).toBeVisible();
    });

    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve navegar para Contato pelo Header", async ({ page }) => {

        const navigation = page.getByRole("navigation");

        await navigation.getByRole("link", {
            name: "Contato",
        }).click();

        await expect(page).toHaveURL(/\/contato$/);
    });

});