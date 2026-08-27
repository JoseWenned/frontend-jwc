import { test, expect } from "@playwright/test";

test.describe("ScrollToTop — comportamento de rolagem", () => {

    // ==================================================
    // TOPO DA PÁGINA
    // ==================================================

    test("deve rolar para o topo ao navegar para uma página sem hash", async ({
        page,
    }) => {

        await page.goto("/");

        await page.evaluate(() => {
            window.scrollTo(0, 500);
        });

        await page.evaluate(() => {
            window.scrollTo = () => {};
        });

        await page.goto("/sobre-nos");

        await expect
            .poll(async () => {
                return await page.evaluate(() => ({
                    x: window.scrollX,
                    y: window.scrollY,
                }));
            })
            .toEqual({
                x: 0,
                y: 0,
            });
    });


    // ==================================================
    // HASH
    // ==================================================

    test("deve navegar para uma seção quando a URL possui hash", async ({
        page,
    }) => {

        await page.goto("/sobre-nos#comercial");

        await expect(page).toHaveURL(/\/sobre-nos#comercial$/);

        const section = page.locator("#comercial");

        await expect(section).toBeVisible();

        await expect(section).toBeAttached();
    });


    // ==================================================
    // HASH INVÁLIDO
    // ==================================================

    test("não deve gerar erro quando o hash não possui uma seção correspondente", async ({
        page,
    }) => {

        await page.goto("/sobre-nos#secao-inexistente");

        await expect(page).toHaveURL(
            /\/sobre-nos#secao-inexistente$/
        );
    });

});