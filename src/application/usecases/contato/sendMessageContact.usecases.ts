import type { ContactMessage } from "../../../domain/entities/contato/contato.entity";
import type { ContactRepository } from "../../../domain/repositories/contato/contato.repository";

export class SendContactMessage {

    private readonly contactRepository: ContactRepository;

    constructor(contactRepository: ContactRepository) {
        this.contactRepository = contactRepository;
    }

    async execute(message: ContactMessage): Promise<void> {
        await this.contactRepository.send(message);
    }
}