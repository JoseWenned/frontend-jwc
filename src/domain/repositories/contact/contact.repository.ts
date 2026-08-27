import { ContactMessage } from "../../entities/contact/contact.entity";

export interface ContactRepository {
    send(message: ContactMessage): Promise<void>;
}