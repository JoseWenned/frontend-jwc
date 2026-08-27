import { describe, expect, it } from "vitest";
import { ContactMessage } from "./contact.entity";

describe("ContactMessage", () => {

    describe("criação", () => {

        it("deve criar uma mensagem de contato válida", () => {
            const contact = new ContactMessage(
                "João Silva",
                "joao@email.com",
                "Solicitar orçamento",
                "Gostaria de receber um orçamento.",
                "Empresa Teste",
                "(88) 99999-9999"
            );

            expect(contact.nome).toBe("João Silva");
            expect(contact.email).toBe("joao@email.com");
            expect(contact.assunto).toBe("Solicitar orçamento");
            expect(contact.mensagem).toBe(
                "Gostaria de receber um orçamento."
            );
            expect(contact.empresa).toBe("Empresa Teste");
            expect(contact.telefone).toBe(
                "(88) 99999-9999"
            );
        });

        it("deve permitir empresa e telefone opcionais", () => {
            const contact = new ContactMessage(
                "João Silva",
                "joao@email.com",
                "Conhecer produtos",
                "Gostaria de conhecer os produtos."
            );

            expect(contact.nome).toBe("João Silva");
            expect(contact.email).toBe("joao@email.com");
            expect(contact.assunto).toBe("Conhecer produtos");
            expect(contact.mensagem).toBe(
                "Gostaria de conhecer os produtos."
            );
            expect(contact.empresa).toBeUndefined();
            expect(contact.telefone).toBeUndefined();
        });

    });

    describe("validações", () => {

        it("deve rejeitar nome vazio", () => {
            expect(() => {
                new ContactMessage(
                    "",
                    "joao@email.com",
                    "Solicitar orçamento",
                    "Mensagem de teste."
                );
            }).toThrow("O nome é obrigatório.");
        });

        it("deve rejeitar nome contendo apenas espaços", () => {
            expect(() => {
                new ContactMessage(
                    "   ",
                    "joao@email.com",
                    "Solicitar orçamento",
                    "Mensagem de teste."
                );
            }).toThrow("O nome é obrigatório.");
        });

        it("deve rejeitar e-mail vazio", () => {
            expect(() => {
                new ContactMessage(
                    "João Silva",
                    "",
                    "Solicitar orçamento",
                    "Mensagem de teste."
                );
            }).toThrow("O e-mail é obrigatório.");
        });

        it("deve rejeitar assunto vazio", () => {
            expect(() => {
                new ContactMessage(
                    "João Silva",
                    "joao@email.com",
                    "",
                    "Mensagem de teste."
                );
            }).toThrow("O assunto é obrigatório.");
        });

        it("deve rejeitar mensagem vazia", () => {
            expect(() => {
                new ContactMessage(
                    "João Silva",
                    "joao@email.com",
                    "Solicitar orçamento",
                    ""
                );
            }).toThrow("A mensagem é obrigatória.");
        });

    });

    describe("normalização", () => {

        it("deve remover espaços desnecessários dos campos obrigatórios", () => {
            const contact = new ContactMessage(
                "  João Silva  ",
                "  joao@email.com  ",
                "  Solicitar orçamento  ",
                "  Gostaria de receber um orçamento.  "
            );

            expect(contact.nome).toBe("João Silva");
            expect(contact.email).toBe("joao@email.com");
            expect(contact.assunto).toBe(
                "Solicitar orçamento"
            );
            expect(contact.mensagem).toBe(
                "Gostaria de receber um orçamento."
            );
        });

        it("deve transformar campos opcionais vazios em undefined", () => {
            const contact = new ContactMessage(
                "João Silva",
                "joao@email.com",
                "Outro assunto",
                "Mensagem de teste.",
                "   ",
                "   "
            );

            expect(contact.empresa).toBeUndefined();
            expect(contact.telefone).toBeUndefined();
        });

    });

});