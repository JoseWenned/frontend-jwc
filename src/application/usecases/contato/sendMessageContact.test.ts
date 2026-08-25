import { describe, expect, it, vi } from "vitest";

import { SendContactMessage } from "./sendMessageContact.usecases";

import { ContactMessage } from "../../../domain/entities/contato/contato.entity";

import type { ContactRepository } from "../../../domain/repositories/contato/contato.repository";

describe("SendContactMessage", () => {

    it("deve enviar a mensagem através do repository", async () => {

        const repository: ContactRepository = {
            send: vi.fn().mockResolvedValue(undefined),
        };

        const useCase = new SendContactMessage(repository);

        const message = new ContactMessage(
            "João Silva",
            "joao@email.com",
            "Solicitar orçamento",
            "Gostaria de receber um orçamento.",
            "Empresa Teste",
            "(88) 99999-9999"
        );

        await useCase.execute(message);

        expect(repository.send).toHaveBeenCalledTimes(1);

        expect(repository.send).toHaveBeenCalledWith(
            message
        );
    });


    it("não deve chamar o repository mais de uma vez", async () => {

        const repository: ContactRepository = {
            send: vi.fn().mockResolvedValue(undefined),
        };

        const useCase = new SendContactMessage(repository);

        const message = new ContactMessage(
            "João Silva",
            "joao@email.com",
            "Conhecer produtos",
            "Gostaria de conhecer os produtos."
        );

        await useCase.execute(message);

        expect(repository.send).toHaveBeenCalledTimes(1);
    });


    it("deve propagar o erro retornado pelo repository", async () => {

        const error = new Error(
            "Não foi possível enviar a mensagem."
        );

        const repository: ContactRepository = {
            send: vi.fn().mockRejectedValue(error),
        };

        const useCase = new SendContactMessage(repository);

        const message = new ContactMessage(
            "João Silva",
            "joao@email.com",
            "Outro assunto",
            "Mensagem de teste."
        );

        await expect(
            useCase.execute(message)
        ).rejects.toThrow(
            "Não foi possível enviar a mensagem."
        );

        expect(repository.send).toHaveBeenCalledTimes(1);
    });

});