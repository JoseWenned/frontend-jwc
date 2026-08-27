import type { ContactMessage } from "../../../domain/entities/contact/contact.entity";
import type { ContactRepository } from "../../../domain/repositories/contact/contact.repository";

export class SendContactMessage {

    private readonly contactRepository: ContactRepository;

    constructor(contactRepository: ContactRepository) {
        this.contactRepository = contactRepository;
    }

    async execute(message: ContactMessage): Promise<void> {
        await this.contactRepository.send(message);
    }
}