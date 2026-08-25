import { ContactMessage } from "../../entities/contato/contato.entity";

export interface ContactRepository {
    send(message: ContactMessage): Promise<void>;
}