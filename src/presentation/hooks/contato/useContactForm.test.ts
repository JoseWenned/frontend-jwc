import {
    describe,
    expect,
    it,
    vi,
    beforeEach,
    afterEach,
} from "vitest";

import { renderHook, act } from "@testing-library/react";

import { useContactForm } from "./useContactForm";

import { makeSendContactMessage } from "../../../infrastructure/factories/contato/sendContactMessage.factory";

vi.mock(
    "../../../infrastructure/factories/contato/sendContactMessage.factory",
);

describe("useContactForm", () => {

    const executeMock = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();

        vi.mocked(makeSendContactMessage).mockReturnValue(
            {
                execute: executeMock,
            } as unknown as ReturnType<typeof makeSendContactMessage>
        );
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });


    const createFormData = (
        overrides: Record<string, string> = {}
    ) => {

        const formData = new FormData();

        formData.append(
            "nome",
            overrides.nome ?? "João Silva"
        );

        formData.append(
            "empresa",
            overrides.empresa ?? "Empresa Teste"
        );

        formData.append(
            "email",
            overrides.email ?? "joao@email.com"
        );

        formData.append(
            "telefone",
            overrides.telefone ?? "(88) 99999-9999"
        );

        formData.append(
            "assunto",
            overrides.assunto ?? "Solicitar orçamento"
        );

        formData.append(
            "mensagem",
            overrides.mensagem ??
                "Gostaria de receber um orçamento."
        );

        return formData;
    };


    it("deve iniciar com estado padrão", () => {

        const { result } = renderHook(
            () => useContactForm()
        );

        expect(result.current.isSubmitting).toBe(false);

        expect(result.current.status).toEqual({
            type: "",
            message: "",
        });
    });


    it("deve enviar os dados do formulário", async () => {

        executeMock.mockResolvedValue(undefined);

        const { result } = renderHook(
            () => useContactForm()
        );

        const formData = createFormData();

        await act(async () => {
            await result.current.submit(formData);
        });

        expect(executeMock).toHaveBeenCalledTimes(1);

        const contactMessage =
            executeMock.mock.calls[0][0];

        expect(contactMessage.nome).toBe(
            "João Silva"
        );

        expect(contactMessage.empresa).toBe(
            "Empresa Teste"
        );

        expect(contactMessage.email).toBe(
            "joao@email.com"
        );

        expect(contactMessage.telefone).toBe(
            "(88) 99999-9999"
        );

        expect(contactMessage.assunto).toBe(
            "Solicitar orçamento"
        );

        expect(contactMessage.mensagem).toBe(
            "Gostaria de receber um orçamento."
        );
    });


    it("deve retornar true quando o envio for realizado com sucesso", async () => {

        executeMock.mockResolvedValue(undefined);

        const { result } = renderHook(
            () => useContactForm()
        );

        let response: boolean | undefined;

        await act(async () => {
            response = await result.current.submit(
                createFormData()
            );
        });

        expect(response).toBe(true);
    });


    it("deve definir status de sucesso após o envio", async () => {

        executeMock.mockResolvedValue(undefined);

        const { result } = renderHook(
            () => useContactForm()
        );

        await act(async () => {
            await result.current.submit(
                createFormData()
            );
        });

        expect(result.current.status).toEqual({
            type: "success",
            message: "Mensagem enviada com sucesso!",
        });
    });


    it("deve finalizar o estado de carregamento após sucesso", async () => {

        executeMock.mockResolvedValue(undefined);

        const { result } = renderHook(
            () => useContactForm()
        );

        await act(async () => {
            await result.current.submit(
                createFormData()
            );
        });

        expect(
            result.current.isSubmitting
        ).toBe(false);
    });


    it("deve retornar false quando ocorrer um erro", async () => {

        executeMock.mockRejectedValue(
            new Error(
                "Não foi possível enviar a mensagem."
            )
        );

        const { result } = renderHook(
            () => useContactForm()
        );

        let response: boolean | undefined;

        await act(async () => {
            response = await result.current.submit(
                createFormData()
            );
        });

        expect(response).toBe(false);
    });


    it("deve definir status de erro quando o envio falhar", async () => {

        executeMock.mockRejectedValue(
            new Error(
                "Não foi possível enviar a mensagem."
            )
        );

        const { result } = renderHook(
            () => useContactForm()
        );

        await act(async () => {
            await result.current.submit(
                createFormData()
            );
        });

        expect(result.current.status).toEqual({
            type: "error",
            message:
                "Não foi possível enviar a mensagem.",
        });
    });


    it("deve finalizar o estado de carregamento após erro", async () => {

        executeMock.mockRejectedValue(
            new Error("Erro de conexão.")
        );

        const { result } = renderHook(
            () => useContactForm()
        );

        await act(async () => {
            await result.current.submit(
                createFormData()
            );
        });

        expect(
            result.current.isSubmitting
        ).toBe(false);
    });


    it("deve usar mensagem padrão para erros que não são instâncias de Error", async () => {

        executeMock.mockRejectedValue(
            "erro desconhecido"
        );

        const { result } = renderHook(
            () => useContactForm()
        );

        await act(async () => {
            await result.current.submit(
                createFormData()
            );
        });

        expect(result.current.status).toEqual({
            type: "error",
            message:
                "Ocorreu um erro ao enviar sua mensagem.",
        });
    });

});