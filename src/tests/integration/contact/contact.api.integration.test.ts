import type { VercelRequest, VercelResponse } from "@vercel/node";
import { beforeEach, describe, expect, it, vi } from "vitest";

import handler from "../../../../api/contact";

// ==================================================
// MOCK DO RESEND
// ==================================================

const sendMock = vi.fn();

vi.mock("resend", () => ({
    Resend: class {
        emails = {
            send: sendMock,
        };
    },
}));

// ==================================================
// TIPOS AUXILIARES
// ==================================================

type MockResponse = VercelResponse & {
    statusCode: number;
    body: unknown;
};

type MockRequest = Partial<VercelRequest> & {
    method: string;
    body?: Record<string, unknown>;
};

// ==================================================
// MOCK DA RESPONSE
// ==================================================

const createResponse = (): MockResponse => {
    const response = {
        statusCode: 200,
        body: undefined as unknown,

        status(code: number) {
            response.statusCode = code;
            return response;
        },

        json(data: unknown) {
            response.body = data;
            return response;
        },

        send(data: unknown) {
            response.body = data;
            return response;
        },

        end() {
            return response;
        },
    };

    return response as unknown as MockResponse;
};

// ==================================================
// MOCK DA REQUEST
// ==================================================

const createRequest = (
    method = "POST",
    body: Record<string, unknown> = {}
): MockRequest => ({
    method,
    body,
});

// ==================================================
// DADOS VÁLIDOS
// ==================================================

const dadosValidos = {
    nome: "José Wenned",
    empresa: "JWC Distribuição & Logística",
    email: "teste@empresa.com",
    telefone: "(88) 98896-5616",
    assunto: "orcamento",
    mensagem: "Gostaria de solicitar um orçamento.",
};

// ==================================================
// SUÍTE
// ==================================================

describe("API /api/contact", () => {
    beforeEach(() => {
        vi.clearAllMocks();

        process.env.RESEND_API_KEY = "re_teste";
        process.env.CONTACT_EMAIL =
            "jwcdistribuicaoelogisticaltda@gmail.com";

        sendMock.mockResolvedValue({
            data: {
                id: "email-test-123",
            },
            error: null,
        });
    });

    // ==================================================
    // MÉTODO HTTP
    // ==================================================

    it("deve rejeitar requisições que não sejam POST", async () => {
        const req = createRequest("GET");
        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(405);

        expect(res.body).toEqual({
            success: false,
            message: "Método não permitido.",
        });

        expect(sendMock).not.toHaveBeenCalled();
    });

    // ==================================================
    // VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS
    // ==================================================

    it("deve rejeitar quando o nome não for informado", async () => {
        const dados = Object.fromEntries(
            Object.entries(dadosValidos).filter(
                ([campo]) => campo !== "nome"
            )
        );

        const req = createRequest("POST", dados);
        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(400);

        expect(res.body).toEqual({
            success: false,
            message: "Preencha todos os campos obrigatórios.",
        });

        expect(sendMock).not.toHaveBeenCalled();
    });

    it("deve rejeitar quando o e-mail não for informado", async () => {
        const dados = Object.fromEntries(
            Object.entries(dadosValidos).filter(
                ([campo]) => campo !== "email"
            )
        );

        const req = createRequest("POST", dados);
        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(400);

        expect(res.body).toEqual({
            success: false,
            message: "Preencha todos os campos obrigatórios.",
        });

        expect(sendMock).not.toHaveBeenCalled();
    });

    it("deve rejeitar quando o assunto não for informado", async () => {
        const dados = Object.fromEntries(
            Object.entries(dadosValidos).filter(
                ([campo]) => campo !== "assunto"
            )
        );

        const req = createRequest("POST", dados);
        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(400);

        expect(res.body).toEqual({
            success: false,
            message: "Preencha todos os campos obrigatórios.",
        });

        expect(sendMock).not.toHaveBeenCalled();
    });

    it("deve rejeitar quando a mensagem não for informada", async () => {
        const dados = Object.fromEntries(
            Object.entries(dadosValidos).filter(
                ([campo]) => campo !== "mensagem"
            )
        );

        const req = createRequest("POST", dados);
        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(400);

        expect(res.body).toEqual({
            success: false,
            message: "Preencha todos os campos obrigatórios.",
        });

        expect(sendMock).not.toHaveBeenCalled();
    });

    // ==================================================
    // CAMPOS OPCIONAIS
    // ==================================================

    it("deve aceitar formulário sem empresa e telefone", async () => {
        const dados = Object.fromEntries(
            Object.entries(dadosValidos).filter(
                ([campo]) =>
                    campo !== "empresa" &&
                    campo !== "telefone"
            )
        );

        const req = createRequest("POST", dados);
        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({
            success: true,
            message: "Mensagem enviada com sucesso.",
            id: "email-test-123",
        });

        expect(sendMock).toHaveBeenCalledTimes(1);
    });
    // ==================================================
    // CONFIGURAÇÃO
    // ==================================================

    it("deve retornar 500 quando CONTACT_EMAIL não estiver configurado", async () => {
        delete process.env.CONTACT_EMAIL;

        const req = createRequest("POST", dadosValidos);
        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(500);

        expect(res.body).toEqual({
            success: false,
            message: "Destinatário do formulário não configurado.",
        });

        expect(sendMock).not.toHaveBeenCalled();
    });

    it("deve retornar 500 quando RESEND_API_KEY não estiver configurada", async () => {
        delete process.env.RESEND_API_KEY;

        const req = createRequest("POST", dadosValidos);
        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(500);

        expect(res.body).toEqual({
            success: false,
            message: "Serviço de e-mail não configurado.",
        });

        expect(sendMock).not.toHaveBeenCalled();
    });

    // ==================================================
    // ENVIO DO E-MAIL
    // ==================================================

    it("deve enviar o e-mail com os dados corretos", async () => {
        const req = createRequest(
            "POST",
            dadosValidos
        );

        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(200);

        expect(sendMock).toHaveBeenCalledTimes(1);

        expect(sendMock).toHaveBeenCalledWith(
            expect.objectContaining({
                from: "JWC Log <onboarding@resend.dev>",

                to: process.env.CONTACT_EMAIL,

                subject:
                    "Nova mensagem de contato — orcamento",

                html: expect.stringContaining(
                    "José Wenned"
                ),
            })
        );
    });

    it("deve incluir os dados do contato no HTML do e-mail", async () => {
        const req = createRequest(
            "POST",
            dadosValidos
        );

        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        const emailConfig =
            sendMock.mock.calls[0][0];

        expect(emailConfig.html).toContain(
            "José Wenned"
        );

        expect(emailConfig.html).toContain(
            "JWC Distribuição & Logística"
        );

        expect(emailConfig.html).toContain(
            "teste@empresa.com"
        );

        expect(emailConfig.html).toContain(
            "(88) 98896-5616"
        );

        expect(emailConfig.html).toContain(
            "orcamento"
        );

        expect(emailConfig.html).toContain(
            "Gostaria de solicitar um orçamento."
        );
    });

    // ==================================================
    // ERRO DO RESEND
    // ==================================================

    it("deve retornar 500 quando o Resend retornar erro", async () => {
        sendMock.mockResolvedValueOnce({
            data: null,
            error: {
                message: "Erro simulado do Resend",
            },
        });

        const req = createRequest(
            "POST",
            dadosValidos
        );

        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(500);

        expect(res.body).toEqual({
            success: false,
            message: "Não foi possível enviar a mensagem.",
        });
    });

    // ==================================================
    // EXCEÇÃO INESPERADA
    // ==================================================

    it("deve retornar 500 quando ocorrer uma exceção inesperada", async () => {
        sendMock.mockRejectedValueOnce(
            new Error("Erro inesperado")
        );

        const req = createRequest(
            "POST",
            dadosValidos
        );

        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(500);

        expect(res.body).toEqual({
            success: false,
            message:
                "Ocorreu um erro ao enviar sua mensagem.",
        });
    });

    // ==================================================
    // SUCESSO
    // ==================================================

    it("deve retornar 200 e o ID do e-mail quando o envio for bem-sucedido", async () => {
        sendMock.mockResolvedValueOnce({
            data: {
                id: "resend-id-456",
            },
            error: null,
        });

        const req = createRequest(
            "POST",
            dadosValidos
        );

        const res = createResponse();

        await handler(
            req as VercelRequest,
            res as VercelResponse
        );

        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({
            success: true,
            message: "Mensagem enviada com sucesso.",
            id: "resend-id-456",
        });
    });
});