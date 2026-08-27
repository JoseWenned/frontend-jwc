import { test, expect } from "@playwright/test";

test.describe("ContatoPage — JWC Distribuição & Logística", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/contato");
    });


    // ==================================================
    // HERO
    // ==================================================

    test("deve apresentar o hero da página de contato", async ({ page }) => {

        await expect(
            page.getByText("Fale conosco", { exact: true })
        ).toBeVisible();

        await expect(
            page.getByRole("heading", {
                name: "Vamos conversar?",
            })
        ).toBeVisible();

        await expect(
            page.getByText(
                "Estamos prontos para entender suas necessidades e encontrar as melhores soluções para o seu negócio.",
                { exact: false }
            )
        ).toBeVisible();
    });


    // ==================================================
    // INFORMAÇÕES DE CONTATO
    // ==================================================

    test("deve apresentar as informações de contato", async ({ page }) => {

        const information = page.locator(".contatoInformation");

        await expect(
            information.getByText("Entre em contato", {
                exact: true,
            })
        ).toBeVisible();

        await expect(
            information.getByRole("heading", {
                name: /Estamos aqui para ajudar você/,
            })
        ).toBeVisible();

        await expect(
            information.getByText(
                "jwcdistribuicaoelogisticaltda@gmail.com",
                { exact: true }
            )
        ).toBeVisible();

        await expect(
            information.getByText(
                "+55 (88) 9 8896-5616",
                { exact: true }
            )
        ).toBeVisible();

        await expect(
            information.getByText(
                "Segunda a domingo, das 08h às 21h",
                { exact: true }
            )
        ).toBeVisible();
    });


    // ==================================================
    // FORMULÁRIO
    // ==================================================

    test("deve apresentar o formulário de contato", async ({ page }) => {

        await expect(
            page.getByRole("heading", {
                name: "Envie uma mensagem",
            })
        ).toBeVisible();

        await expect(
            page.getByLabel("Nome")
        ).toBeVisible();

        await expect(
            page.getByLabel("Empresa")
        ).toBeVisible();

        await expect(
            page.getByLabel("E-mail")
        ).toBeVisible();

        await expect(
            page.getByLabel("Telefone")
        ).toBeVisible();

        await expect(
            page.getByLabel("Assunto")
        ).toBeVisible();

        await expect(
            page.getByLabel("Mensagem")
        ).toBeVisible();

        await expect(
            page.getByRole("button", {
                name: "Enviar mensagem",
            })
        ).toBeVisible();
    });


    // ==================================================
    // CAMPOS DO FORMULÁRIO
    // ==================================================

    test("deve permitir preencher os campos do formulário", async ({
        page,
    }) => {

        await page.getByLabel("Nome").fill("José Wenned");

        await page.getByLabel("Empresa").fill(
            "JWC Distribuição & Logística"
        );

        await page.getByLabel("E-mail").fill(
            "teste@empresa.com"
        );

        await page.getByLabel("Telefone").fill(
            "(88) 98896-5616"
        );

        await page.getByLabel("Assunto").selectOption(
            "orcamento"
        );

        await page.getByLabel("Mensagem").fill(
            "Gostaria de solicitar um orçamento."
        );

        await expect(
            page.getByLabel("Nome")
        ).toHaveValue("José Wenned");

        await expect(
            page.getByLabel("Empresa")
        ).toHaveValue("JWC Distribuição & Logística");

        await expect(
            page.getByLabel("E-mail")
        ).toHaveValue("teste@empresa.com");

        await expect(
            page.getByLabel("Telefone")
        ).toHaveValue("(88) 98896-5616");

        await expect(
            page.getByLabel("Assunto")
        ).toHaveValue("orcamento");

        await expect(
            page.getByLabel("Mensagem")
        ).toHaveValue(
            "Gostaria de solicitar um orçamento."
        );
    });


    // ==================================================
    // OPÇÕES DO ASSUNTO
    // ==================================================

    test("deve apresentar todas as opções de assunto", async ({
        page,
    }) => {

        const assunto = page.getByLabel("Assunto");

        await expect(
            assunto.locator("option")
        ).toHaveCount(5);

        await expect(
            assunto.locator("option").filter({
                hasText: "Selecione uma opção",
            })
        ).toHaveCount(1);

        await expect(
            assunto.locator("option").filter({
                hasText: "Solicitar orçamento",
            })
        ).toHaveCount(1);

        await expect(
            assunto.locator("option").filter({
                hasText: "Conhecer produtos",
            })
        ).toHaveCount(1);

        await expect(
            assunto.locator("option").filter({
                hasText: "Parceria comercial",
            })
        ).toHaveCount(1);

        await expect(
            assunto.locator("option").filter({
                hasText: "Outro assunto",
            })
        ).toHaveCount(1);
    });


    // ==================================================
    // VALIDAÇÃO HTML
    // ==================================================

    test("deve validar campos obrigatórios do formulário", async ({
        page,
    }) => {

        await page.getByRole("button", {
            name: "Enviar mensagem",
        }).click();

        await expect(
            page.getByLabel("Nome")
        ).toBeFocused();
    });


    // ==================================================
    // WHATSAPP
    // ==================================================

    test("deve apresentar a seção de atendimento pelo WhatsApp", async ({
        page,
    }) => {

        await expect(
            page.getByText(
                "Atendimento rápido",
                { exact: true }
            )
        ).toBeVisible();

        await expect(
            page.getByRole("heading", {
                name: "Prefere falar diretamente conosco?",
            })
        ).toBeVisible();

        await expect(
            page.getByText(
                "Se preferir, fale com nossa equipe pelo WhatsApp.",
                { exact: false }
            )
        ).toBeVisible();

        await expect(
            page.getByRole("button", {
                name: /Fale pelo WhatsApp/,
            })
        ).toBeVisible();
    });


    // ==================================================
    // WHATSAPP — LINK
    // ==================================================

    test("deve abrir o WhatsApp com a mensagem correta", async ({ page }) => {
        const whatsappButton = page.getByRole("button", {
            name: /Fale pelo WhatsApp/,
        });

        await page.evaluate(() => {
            window.open = ((url?: string | URL) => {
                window.location.href = String(url);
                return null;
            }) as typeof window.open;
        });

        await whatsappButton.click();

        await expect(page).toHaveURL(/api\.whatsapp\.com\/send/);

        const url = new URL(page.url());

        expect(url.searchParams.get("phone")).toBe("5588988965616");

        expect(url.searchParams.get("text")).toBe(
            "Olá! Gostaria de conhecer as soluções da JWC Distribuição."
        );
    });

    // ==================================================
    // ESTRUTURA GERAL
    // ==================================================

    test("deve apresentar Header, Footer e WhatsApp", async ({ page }) => {
        await expect(
            page.getByRole("navigation")
        ).toBeVisible();

        await expect(
            page.locator("footer")
        ).toBeVisible();

        await expect(
            page.getByRole("link", {
                name: "Fale conosco pelo WhatsApp",
            })
        ).toBeVisible();
    });

    // ==================================================
    // NAVEGAÇÃO
    // ==================================================

    test("deve navegar para Início pelo Header", async ({ page }) => {

        const header = page.getByRole("navigation");

        await header.getByRole("link", {
            name: "Início",
        }).click();

        await expect(page).toHaveURL(/\/$/);
    });


    test("deve navegar para Sobre Nós pelo Header", async ({ page }) => {

        const header = page.getByRole("navigation");

        await header.getByRole("link", {
            name: "Sobre nós",
        }).click();

        await expect(page).toHaveURL(/\/sobre-nos$/);
    });


    test("deve navegar para Produtos pelo Header", async ({ page }) => {

        const header = page.getByRole("navigation");

        await header.getByRole("link", {
            name: "Produtos",
        }).click();

        await expect(page).toHaveURL(/\/produtos$/);
    });

});