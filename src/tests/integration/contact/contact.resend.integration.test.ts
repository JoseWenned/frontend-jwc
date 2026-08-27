import {
    describe,
    expect,
    it,
} from "vitest";

describe(
    "Integração — formulário de contato + Resend",
    () => {

        it(
            "deve enviar uma mensagem real através da API",
            async () => {

                const response = await fetch(
                    "http://localhost:3000/api/contact",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body: JSON.stringify({
                            nome: "Teste de Integração JWC",
                            empresa: "JWC Distribuição",
                            email:
                                "wennedchaves1997@gmail.com",
                            telefone:
                                "(88) 99999-9999",
                            assunto:
                                "Teste de integração",
                            mensagem:
                                "Esta é uma mensagem de teste enviada através do teste de integração do formulário de contato da JWC.",
                        }),
                    }
                );

                expect(response.ok).toBe(true);

                const data = await response.json();

                expect(data.success).toBe(true);

                expect(data.message).toBe(
                    "Mensagem enviada com sucesso."
                );

                expect(data.id).toBeDefined();

                expect(typeof data.id).toBe(
                    "string"
                );

            },
            30000
        );

    }
);