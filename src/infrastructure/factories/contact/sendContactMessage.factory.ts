import { SendContactMessage } from "../../../application/usecases/contact/sendMessageContact.usecases";
import { ContactRepositoryHttp } from "../../repositories/contato/contact.repository";


export const makeSendContactMessage = (): SendContactMessage => {
    const contactRepository = new ContactRepositoryHttp();

    return new SendContactMessage(contactRepository);
};