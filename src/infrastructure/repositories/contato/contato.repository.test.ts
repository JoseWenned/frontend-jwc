import {
    describe,
    expect,
    it,
    vi,
    beforeEach,
    afterEach,
} from "vitest";

import { ContactRepositoryHttp } from "./contato.repository";

import { ContactMessage } from "../../../domain/entities/contato/contato.entity";

describe("ContactRepositoryHttp", () => {

    const contactMessage = new ContactMessage(
        "João Silva",
        "joao@email.com",
        "Solicitar orçamento",
        "Gostaria de receber um orçamento.",
        "Empresa Teste",
        "(88) 99999-9999"
    );

    beforeEach(() => {
        vi.stubGlobal(
            "fetch",
            vi.fn()
        );
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });


    it("deve enviar uma requisição POST para /api/contact", async () => {

        vi.mocked(fetch).mockResolvedValue(
            new Response(
                JSON.stringify({
                    success: true,
                    message: "Mensagem enviada com sucesso.",
                }),
                {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
        );

        const repository =
            new ContactRepositoryHttp();

        await repository.send(contactMessage);

        expect(fetch).toHaveBeenCalledTimes(1);

        expect(fetch).toHaveBeenCalledWith(
            "/api/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    nome: "João Silva",
                    empresa: "Empresa Teste",
                    email: "joao@email.com",
                    telefone: "(88) 99999-9999",
                    assunto: "Solicitar orçamento",
                    mensagem:
                        "Gostaria de receber um orçamento.",
                }),
            }
        );
    });


    it("deve aceitar uma resposta HTTP 200", async () => {

        vi.mocked(fetch).mockResolvedValue(
            new Response(
                JSON.stringify({
                    success: true,
                    message: "Mensagem enviada com sucesso.",
                }),
                {
                    status: 200,
                }
            )
        );

        const repository =
            new ContactRepositoryHttp();

        await expect(
            repository.send(contactMessage)
        ).resolves.toBeUndefined();
    });


    it("deve aceitar uma resposta HTTP 200 com corpo vazio", async () => {

        vi.mocked(fetch).mockResolvedValue(
            new Response(null, {
                status: 200,
            })
        );

        const repository =
            new ContactRepositoryHttp();

        await expect(
            repository.send(contactMessage)
        ).resolves.toBeUndefined();
    });


    it("deve lançar o erro retornado pela API", async () => {

        vi.mocked(fetch).mockResolvedValue(
            new Response(
                JSON.stringify({
                    success: false,
                    message:
                        "Preencha todos os campos obrigatórios.",
                }),
                {
                    status: 400,
                }
            )
        );

        const repository =
            new ContactRepositoryHttp();

        await expect(
            repository.send(contactMessage)
        ).rejects.toThrow(
            "Preencha todos os campos obrigatórios."
        );
    });


    it("deve usar uma mensagem padrão quando a API retornar erro sem mensagem", async () => {

        vi.mocked(fetch).mockResolvedValue(
            new Response(
                JSON.stringify({
                    success: false,
                }),
                {
                    status: 500,
                }
            )
        );

        const repository =
            new ContactRepositoryHttp();

        await expect(
            repository.send(contactMessage)
        ).rejects.toThrow(
            "Não foi possível enviar a mensagem."
        );
    });


    it("deve rejeitar uma resposta com JSON inválido", async () => {

        vi.mocked(fetch).mockResolvedValue(
            new Response(
                "resposta inválida",
                {
                    status: 200,
                }
            )
        );

        const repository =
            new ContactRepositoryHttp();

        await expect(
            repository.send(contactMessage)
        ).rejects.toThrow(
            "O servidor retornou uma resposta inválida."
        );
    });


    it("deve propagar erros de rede", async () => {

        vi.mocked(fetch).mockRejectedValue(
            new Error("Falha de conexão.")
        );

        const repository =
            new ContactRepositoryHttp();

        await expect(
            repository.send(contactMessage)
        ).rejects.toThrow(
            "Falha de conexão."
        );
    });

});