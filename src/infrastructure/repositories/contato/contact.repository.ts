import type { ContactMessage } from "../../../domain/entities/contact/contact.entity";
import type { ContactRepository } from "../../../domain/repositories/contact/contact.repository";

export class ContactRepositoryHttp implements ContactRepository {

    async send(message: ContactMessage): Promise<void> {

        const response = await fetch("/api/contact", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                nome: message.nome,
                empresa: message.empresa,
                email: message.email,
                telefone: message.telefone,
                assunto: message.assunto,
                mensagem: message.mensagem,
            }),
        });

        const responseText = await response.text();

        let data: {
            success?: boolean;
            message?: string;
        } = {};

        if (responseText) {
            try {
                data = JSON.parse(responseText);
            } catch {
                throw new Error(
                    "O servidor retornou uma resposta inválida."
                );
            }
        }

        if (!response.ok) {
            throw new Error(
                data.message ||
                "Não foi possível enviar a mensagem."
            );
        }
    }
}